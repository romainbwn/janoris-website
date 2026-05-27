"""Bake clean, Mediterranean grades into the JANORIS homepage photos.

Run from the project root:  python3 scripts/grade-hero.py
Requires:  pip install pillow numpy

Two images, two moods — both clean, premium, alive (no sepia, barely any grain):
  janoris-portrait.jpg -> janoris-hero-graded.jpg   warm red curtain, intimate
  dj-editorial.jpg     -> purple-dj.jpg              vivid blue/violet nightlife

The wedding image (crowd.png) is used as-is — no grade.
Tweak the params per job below and re-run.
"""
import os
import numpy as np
from PIL import Image, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(ROOT, "public/images")


def grade(src, out, *, crop_bottom, out_w, warm, P):
    im = Image.open(os.path.join(IMG, src)).convert("RGB")
    w, h = im.size
    im = im.crop((0, 0, w, int(h * (1 - crop_bottom))))
    im = im.resize((out_w, round(im.height * out_w / im.width)), Image.LANCZOS)

    a = np.asarray(im).astype(np.float32) / 255.0
    lum = 0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2]

    if warm:
        # keep white balance close to neutral — clean, not sepia
        a = lum[..., None] * (1 - P["sat"]) + a * P["sat"]
        a[..., 0] *= P["warm_r"]
        a[..., 2] *= P["warm_b"]
        shadow = np.clip(1.0 - lum * 1.7, 0, 1)
        a[..., 0] += shadow * P["shadow_warm"]
        a[..., 1] += shadow * P["shadow_warm"] * 0.4
    else:
        # cool / vibrant: lift saturation, keep the blues and violets rich
        gray = lum[..., None]
        a = gray + (a - gray) * P["sat"]
        shadow = np.clip(1.0 - lum * 1.7, 0, 1)
        a[..., 2] += shadow * P["shadow_cool"]
        a[..., 0] -= shadow * P["shadow_cool"] * 0.35

    pivot = 0.45
    a = np.clip((a - pivot) * P["contrast"] + pivot, 0, 1)
    a = a ** P["gamma"]
    a = a + P["lift"] * (1 - a)  # gentle exposure lift — keeps it off "dark vintage"
    a = np.clip(a, 0, 1)

    g = Image.fromarray((a * 255).astype(np.uint8))
    g = g.filter(ImageFilter.GaussianBlur(P["soften"]))

    arr = np.asarray(g).astype(np.float32) / 255.0
    blur = np.asarray(g.filter(ImageFilter.GaussianBlur(P["glow_blur"]))).astype(np.float32) / 255.0
    bl = 0.2126 * blur[..., 0] + 0.7152 * blur[..., 1] + 0.0722 * blur[..., 2]
    bw = np.clip((bl - 0.46) / 0.54, 0, 1)[..., None]
    arr = 1 - (1 - arr) * (1 - blur * bw * P["glow"])

    yy, xx = np.mgrid[0:arr.shape[0], 0:arr.shape[1]].astype(np.float32)
    cx, cy = arr.shape[1] * 0.5, arr.shape[0] * P["vig_cy"]
    d = np.sqrt(((xx - cx) / (arr.shape[1] * 0.68)) ** 2 + ((yy - cy) / (arr.shape[0] * 0.66)) ** 2)
    vig = np.clip(1 - np.clip(d - 0.55, 0, 1) * P["vignette"], 0, 1)[..., None]
    arr = arr * vig
    arr = np.clip(arr, 0, 1)

    # grain — kept almost imperceptible, just enough to avoid digital flatness
    lum2 = 0.2126 * arr[..., 0] + 0.7152 * arr[..., 1] + 0.0722 * arr[..., 2]
    noise = np.random.default_rng(7).normal(0, 1, arr.shape[:2]).astype(np.float32)
    amt = P["grain"] * (0.7 + 0.7 * (1 - lum2))
    arr = np.clip(arr + noise[..., None] * amt[..., None], 0, 1)

    Image.fromarray((arr * 255).astype(np.uint8)).save(
        os.path.join(IMG, out), quality=94, subsampling=0)
    print("saved", out, arr.shape[1], "x", arr.shape[0])


# hero — warm red curtain, intimate and premium. Neutral white balance so the
# red stays a clean stage-red, never sepia. Richer contrast, barely any grain.
grade("janoris-portrait.jpg", "janoris-hero-graded.jpg",
      crop_bottom=0.07, out_w=1280, warm=True,
      P=dict(sat=1.05, warm_r=1.0, warm_b=1.0, shadow_warm=0.0,
             contrast=1.12, gamma=1.0, lift=0.045, soften=0.45,
             glow=0.16, glow_blur=15, vignette=0.20, vig_cy=0.42, grain=0.0012))

# the sound — vivid blue/violet club light, energetic nightlife.
grade("dj-editorial.jpg", "purple-dj.jpg",
      crop_bottom=0.05, out_w=1180, warm=False,
      P=dict(sat=1.24, shadow_cool=0.06, contrast=1.12, gamma=1.0,
             lift=0.035, soften=0.5, glow=0.30, glow_blur=18,
             vignette=0.40, vig_cy=0.36, grain=0.0016))

# about — warm golden portrait, intimate but clean. The amber cast is
# gently neutralised and the shadows lifted so it reads premium, not sepia.
grade("Romain Jano .png", "janoris-about.jpg",
      crop_bottom=0.0, out_w=1280, warm=True,
      P=dict(sat=1.06, warm_r=0.99, warm_b=1.05, shadow_warm=0.0,
             contrast=1.13, gamma=0.98, lift=0.06, soften=0.45,
             glow=0.2, glow_blur=16, vignette=0.24, vig_cy=0.42, grain=0.0014))

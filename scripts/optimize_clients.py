"""Optimiza las fotos de los clientes (public/clients_testimony):
- Redimensiona a un máximo de 200px (se muestran como avatares de 48px)
- Comprime como JPG con calidad 80
"""
from pathlib import Path

from PIL import Image

CLIENTS_DIR = Path(r"C:\Users\usuario\Documents\proyectos\PERSONALES\BIM-PORFOLIO\public\clients_testimony")
MAX_SIZE = 200
QUALITY = 80

stats = {"original": 0, "optimized": 0, "count": 0}

for img_path in sorted(CLIENTS_DIR.iterdir()):
    if img_path.suffix.lower() not in {".jpg", ".jpeg"}:
        continue

    original_size = img_path.stat().st_size

    with Image.open(img_path) as img:
        rgb = img.convert("RGB")

        w, h = rgb.size
        if max(w, h) > MAX_SIZE:
            ratio = MAX_SIZE / max(w, h)
            new_size = (int(w * ratio), int(h * ratio))
            rgb = rgb.resize(new_size, Image.LANCZOS)

        rgb.save(img_path, "JPEG", quality=QUALITY, optimize=True, progressive=True)

    new_size = img_path.stat().st_size
    saved = (1 - new_size / original_size) * 100
    stats["original"] += original_size
    stats["optimized"] += new_size
    stats["count"] += 1
    print(f"  {img_path.name}: {original_size/1e3:.1f} KB -> {new_size/1e3:.1f} KB ({saved:.0f}% menos)")

total_orig = stats["original"] / 1e3
total_new = stats["optimized"] / 1e3
print(f"\n=== RESUMEN ===")
print(f"  Imágenes procesadas: {stats['count']}")
print(f"  Peso original: {total_orig:.1f} KB")
print(f"  Peso optimizado: {total_new:.1f} KB")
print(f"  Reducción: {100 - (total_new/total_orig*100):.1f}%")
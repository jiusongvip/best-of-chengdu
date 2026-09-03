import sharp from 'sharp';
import { readdirSync, statSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.argv[2] || 'public/images';
const outDir = process.argv[3] || dir + '.optimized';
mkdirSync(outDir, { recursive: true });
const files = readdirSync(dir).filter((f) => /\.(webp|jpe?g)$/i.test(f));

for (const f of files) {
  const p = join(dir, f);
  const before = statSync(p).size;
  const img = sharp(p);
  const meta = await img.metadata();
  const isJpg = /\.jpe?g$/i.test(f);

  let pipeline = img.resize({ width: 960, withoutEnlargement: true });
  if (isJpg) {
    pipeline = pipeline.jpeg({ quality: 78, mozjpeg: true });
  } else {
    pipeline = pipeline.webp({ quality: 78, effort: 6 });
  }
  const buf = await pipeline.toBuffer();
  if (buf.length < before) {
    writeFileSync(join(outDir, f), buf);
    console.log(`${f}: ${(before / 1024).toFixed(0)}KB -> ${(buf.length / 1024).toFixed(0)}KB (${meta.width}x${meta.height})`);
  } else {
    console.log(`${f}: skipped (${(before / 1024).toFixed(0)}KB, recompress larger)`);
  }
}

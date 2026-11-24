import { existsSync } from "node:fs";
import path from "node:path";
import type { ComponentProps } from "react";

// Drop-in replacement for <img> that also offers a WebP copy of a .jpg.
// The WebP files are made by `node scripts/webp-convert.mjs` and sit next to the
// JPGs with the same name. If no WebP copy exists for an image, this renders the
// plain <img> unchanged, so pages whose images were not converted stay exactly as
// they were. The JPG stays as the fallback for browsers without WebP support.
// `display: contents` on <picture> keeps the layout identical: the <img> is still
// the element that grid, flex and absolute positioning act on.
const toWebp = (s: string) => s.replace(/\.jpg(?=[\s,]|$)/g, ".webp");

function hasWebp(src: string) {
  return existsSync(path.join(process.cwd(), "public", toWebp(src)));
}

// `plain` forces the original <img>, for pages that must not change (LBW30 experiment).
export default function Img({ plain, ...props }: ComponentProps<"img"> & { plain?: boolean }) {
  const { src, srcSet, sizes } = props;
  if (plain || typeof src !== "string" || !src.endsWith(".jpg") || !hasWebp(src)) {
    return <img {...props} />;
  }
  return (
    <picture className="contents">
      <source type="image/webp" srcSet={toWebp(srcSet ?? src)} sizes={sizes} />
      <img {...props} />
    </picture>
  );
}

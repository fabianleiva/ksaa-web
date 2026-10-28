// Cover images have a lighter copy in a "thumb" folder next to the original.
export const thumb = (src) =>
  typeof src === "string" ? src.replace(/([^/]+)$/, "thumb/$1") : src;

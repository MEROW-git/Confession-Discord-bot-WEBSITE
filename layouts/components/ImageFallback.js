/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";

const ImageFallback = (props) => {
  const { src, fallback, width, height, alt, className, priority, ...rest } = props;
  const normalizedSrc = typeof src === "string" ? src : src?.src;

  // For static export with basePath, prepend the basePath to relative image paths
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const processedSrc = typeof normalizedSrc === "string" &&
    normalizedSrc.startsWith("/") &&
    !normalizedSrc.startsWith("//") &&
    !normalizedSrc.startsWith("http") &&
    !normalizedSrc.startsWith(basePath)
    ? `${basePath}${normalizedSrc}`
    : normalizedSrc;

  const [imgSrc, setImgSrc] = useState(processedSrc);

  useEffect(() => {
    setImgSrc(processedSrc);
  }, [processedSrc]);

  // Use regular img tag for static export to avoid Next.js Image component issues
  return (
    <img
      {...rest}
      src={imgSrc}
      width={width}
      height={height}
      alt={alt}
      className={className}
      onError={() => {
        setImgSrc(fallback);
      }}
    />
  );
};

export default ImageFallback;

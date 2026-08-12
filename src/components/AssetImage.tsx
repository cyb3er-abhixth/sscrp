type AssetImageProps = {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  width?: number | string;
  height?: number | string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
};

export function AssetImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  width,
  height,
  objectFit = "cover",
}: AssetImageProps) {
  return (
    <div
      className={`overflow-hidden border border-border bg-muted/30 ${containerClassName}`.trim()}
      style={{ ...(width ? { width } : {}), ...(height ? { height } : {}) }}
    >
      <img
        src={src}
        alt={alt}
        className={`h-full w-full ${className}`.trim()}
        style={{ objectFit }}
        draggable={false}
      />
    </div>
  );
}

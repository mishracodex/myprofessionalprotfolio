import Image, { StaticImageData } from "next/image";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'src' | 'alt' | 'width' | 'height'> {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
}

export function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false,
  fill = false,
  className = "",
  sizes,
  quality = 85,
  ...props 
}: OptimizedImageProps) {
  // For fill images
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes || "100vw"}
        quality={quality}
        priority={priority}
        className={className}
        {...props}
      />
    );
  }

  // For images with explicit dimensions
  if (width && height) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        priority={priority}
        className={className}
        placeholder="blur"
        blurDataURL={typeof src === 'string' ? undefined : src.blurDataURL}
        {...props}
      />
    );
  }

  // Fallback to regular img tag if dimensions not provided
  return (
    <img
      src={typeof src === 'string' ? src : src.src}
      alt={alt}
      className={className}
      {...props}
    />
  );
}

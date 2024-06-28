"use client";

import { useState, useMemo, memo } from "react";
import Image, { type ImageProps } from "next/image";

const BROKEN_IMAGE = "/assets/image-fallback.svg";

function ImageWithFallback(props: ImageWithFallbackProps) {
  const { src, alt, fallbackImage = BROKEN_IMAGE, ...others } = props;
  const [error, setError] = useState(false);

  const initialUri = useMemo(() => {
    if (error) return fallbackImage;

    if (src !== null) {
      return `${src}`;
    }

    return fallbackImage;
  }, [src, fallbackImage, error]);

  return (
    <Image
      src={initialUri}
      alt={alt ?? ""}
      onError={() => setError(true)}
      {...others}
    />
  );
}

type ImageWithFallbackProps = {
  src: string | null;
  alt?: string | null;
  fallbackImage?: string;
  useNextImage?: boolean;
} & Omit<ImageProps, "src" | "alt" | "onError">;

export default memo(ImageWithFallback);

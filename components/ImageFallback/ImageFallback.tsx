"use client";

import { useState, useMemo, memo } from "react";
import Image, { type ImageProps } from "next/image";

type Props = {
  src: string | null;
  alt?: string | null;
  fallbackImage?: string;
  useNextImage?: boolean;
} & Omit<ImageProps, "src" | "alt" | "onError">;

const brokenImage = "/assets/image-fallback.svg";

const ImageFallback = ({
  src,
  alt,
  fallbackImage = brokenImage,
  ...others
}: Props) => {
  const [error, setError] = useState(false);

  const initialUri = useMemo(() => {
    if (error) return fallbackImage;

    if (src !== null) {
      return `/assets/${src}`;
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
};

export default memo(ImageFallback);

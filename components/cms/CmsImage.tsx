"use client";

import NextImage, { type ImageProps } from "next/image";
import { useCmsMediaMap } from "./CmsMediaProvider";

export function CmsImage(props: ImageProps) {
  const mediaMap = useCmsMediaMap();
  const source = typeof props.src === "string" ? props.src : null;
  const cleanSource = source?.split("?")[0] ?? null;
  const override = source ? mediaMap[source] ?? (cleanSource ? mediaMap[cleanSource] : undefined) : undefined;

  return <NextImage {...props} src={override || props.src} />;
}

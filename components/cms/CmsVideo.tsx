"use client";

import type { VideoHTMLAttributes } from "react";
import { useCmsMediaMap } from "./CmsMediaProvider";

export function CmsVideo({ poster, ...props }: VideoHTMLAttributes<HTMLVideoElement>) {
  const mediaMap = useCmsMediaMap();
  const cleanPoster = poster?.split("?")[0];
  const resolvedPoster = poster ? mediaMap[poster] ?? (cleanPoster ? mediaMap[cleanPoster] : undefined) ?? poster : undefined;
  return <video {...props} poster={resolvedPoster} />;
}

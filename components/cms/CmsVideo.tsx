"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  type ReactNode,
  type VideoHTMLAttributes
} from "react";
import { useCmsMediaMap } from "./CmsMediaProvider";

function resolveMediaSource(mediaMap: Record<string, string>, source: unknown) {
  if (typeof source !== "string") return source;
  const cleanSource = source.split("?")[0];
  return mediaMap[source] ?? mediaMap[cleanSource] ?? source;
}

function resolveSourceChildren(children: ReactNode, mediaMap: Record<string, string>) {
  return Children.map(children, (child) => {
    if (!isValidElement<{ src?: string }>(child) || child.type !== "source") return child;
    return cloneElement(child, { src: resolveMediaSource(mediaMap, child.props.src) as string | undefined });
  });
}

export function CmsVideo({ poster, children, src, ...props }: VideoHTMLAttributes<HTMLVideoElement>) {
  const mediaMap = useCmsMediaMap();
  const resolvedPoster = resolveMediaSource(mediaMap, poster) as string | undefined;
  const resolvedSrc = resolveMediaSource(mediaMap, src) as string | undefined;

  return (
    <video {...props} poster={resolvedPoster} src={resolvedSrc}>
      {resolveSourceChildren(children, mediaMap)}
    </video>
  );
}

"use client";

import { createContext, useContext } from "react";

const CmsMediaContext = createContext<Record<string, string>>({});

export function CmsMediaProvider({ mediaMap, children }: { mediaMap: Record<string, string>; children: React.ReactNode }) {
  return <CmsMediaContext.Provider value={mediaMap}>{children}</CmsMediaContext.Provider>;
}

export function useCmsMediaMap() {
  return useContext(CmsMediaContext);
}

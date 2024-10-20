"use client";

import { LocalStorageKeyEnum } from "./enum";

const set = (zoomLevel: number) => {
  localStorage.setItem(LocalStorageKeyEnum.ZOOM_LEVEL, zoomLevel.toString());
};

const get = (): number => {
  if (typeof window === "undefined") {
    return 1.25;
  }
  const zoomLevelString = localStorage.getItem(LocalStorageKeyEnum.ZOOM_LEVEL);

  try {
    const zoomLevelNumber = Number(zoomLevelString);
    const find = [0.5, 0.75, 1, 1.25, 1.5, 1.75].find(
      (item) => item === zoomLevelNumber
    );

    console.log({ find });

    if (find) {
      return find as number;
    }
    return 1.25;
  } catch (error) {
    return 1.25;
  }
};

export const resumeZoomLevel = { set, get };

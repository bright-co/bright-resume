import Image from "next/image";
import { FC } from "react";

import { TEXTS } from "./texts";

export interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const Logo: FC<LogoProps> = ({ className, width, height }) => {
  return (
    <Image
      src={TEXTS.url}
      alt={TEXTS.alt}
      className={className}
      width={width}
      height={height}
    />
  );
};

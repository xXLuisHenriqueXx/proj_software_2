import { memo } from "react";
import { Skeleton } from "moti/skeleton";

import {
  BACKGROUND_SECONDARY_COLOR,
  PRIMARY_COLOR_50,
} from "@src/constants/Colors";

interface ILoaderSkeletonProps {
  width: number;
  height: number;
}

const LoaderSkeleton = ({ width, height }: ILoaderSkeletonProps) => {
  return (
    <Skeleton
      width={width}
      height={height}
      colors={[BACKGROUND_SECONDARY_COLOR, PRIMARY_COLOR_50]}
    />
  );
};

export default memo(LoaderSkeleton);

import { FC } from "react";
import { Props } from "./WithLoader.types";
import { Skeleton } from "antd";

export const WithLoader: FC<Props> = ({ isLoading, children }) => {
  return (
    <>
      {!isLoading && children}
      {isLoading && <Skeleton active />}
    </>
  );
};

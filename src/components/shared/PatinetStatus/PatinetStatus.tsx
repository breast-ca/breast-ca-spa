import { FC } from "react";
import { Props } from "./PatinetStatus.types";
import { StatusWrapper } from "./PatinetStatus.styled";

export const PatinetStatus: FC<Props> = ({ status, statusText }) => {
  return <StatusWrapper status={status}>{statusText}</StatusWrapper>;
};

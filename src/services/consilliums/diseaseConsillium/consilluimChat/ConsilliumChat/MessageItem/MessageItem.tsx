import { FC } from "react";
import { Wrapper } from "./MessageItem.styled";
import { Props } from "./MessageItem.types";

export const MessageItem: FC<Props> = ({ message }) => {
  return <Wrapper>{message.text}</Wrapper>;
};

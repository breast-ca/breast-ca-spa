import { FC } from "react";
import { Message, Wrapper } from "./MessageItem.styled";
import { Props } from "./MessageItem.types";

export const MessageItem: FC<Props> = ({ message, user }) => {
  const isMy = message.creator.id === user?.id;

  return (
    <Wrapper isMy={isMy}>
      <Message isMy={isMy}>{message.text}</Message>
    </Wrapper>
  );
};

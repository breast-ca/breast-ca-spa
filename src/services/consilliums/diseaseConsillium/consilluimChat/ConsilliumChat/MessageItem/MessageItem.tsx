import { FC } from "react";
import { CreatorInfo, Message, Wrapper } from "./MessageItem.styled";
import { Props } from "./MessageItem.types";
import { UserAvatar } from "../UsersOnConsillium";
import dayjs from "dayjs";

export const MessageItem: FC<Props> = ({ message, user, rolesTranslates }) => {
  const isMy = message.creator.id === user?.id;

  const creator = message.creator;

  return (
    <Wrapper isMy={isMy}>
      {!isMy && <UserAvatar user={message.creator} isLead={false} />}{" "}
      <Message isMy={isMy}>
        {message.text}
        <CreatorInfo isMy={isMy}>
          {!isMy && (
            <>
              {creator.lastName} {creator.firstName[0]}.{" "}
              {creator.middleName?.[0] ? `${creator.middleName?.[0]}.` : ""}{" "}
              {creator.roles
                .map((role) => rolesTranslates?.translates[role])
                .join(", ")}{" "}
            </>
          )}
          {dayjs(message.sendingTime).format("HH:mm")}
        </CreatorInfo>
      </Message>
    </Wrapper>
  );
};

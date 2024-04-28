import { FC } from "react";
import {
  AvatarsWrapper,
  ChatWrapper,
  Header,
  HeaderAvatarSC,
  ManagementButton,
  SendMessageWrapper,
  Wrapper,
} from "./ConsilliumChat.styled";
import { Props } from "./ConsilliumChat.types";
import { Button } from "@/components/Button";
import { Empty, Input } from "antd";
import { Send } from "react-bootstrap-icons";

export const ConsilliumChat: FC<Props> = ({ consillium }) => {
  return (
    <Wrapper>
      <Header>
        <AvatarsWrapper>
          {consillium.usersOnConsillium.map(({ user, isLead }) => (
            <HeaderAvatarSC
              colorHash={user.firstName}
              key={user.id}
              isLead={isLead}
            >
              {user.firstName[0].toUpperCase()}
            </HeaderAvatarSC>
          ))}
        </AvatarsWrapper>
        <ManagementButton>
          <Button type="ghost" size="small">
            данные по анализу
          </Button>
          <Button size="small">Завершить консилиум</Button>
        </ManagementButton>
      </Header>
      <ChatWrapper isEmpty>
        <Empty description="Пока сообщений нет" />
      </ChatWrapper>
      <SendMessageWrapper>
        <Input size="large" placeholder="Введите сообщение..." />
        <Button icon={<Send />}>Отправить</Button>
      </SendMessageWrapper>
    </Wrapper>
  );
};

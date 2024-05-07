import { FC, useCallback, useEffect, useRef, useState } from "react";
import {
  ChatWrapper,
  ConsilliumContentWrapper,
  Header,
  ManagementButton,
  SendMessageWrapper,
  Wrapper,
} from "./ConsilliumChat.styled";
import { Props } from "./ConsilliumChat.types";
import { Button } from "@/components/Button";
import { Empty, Input } from "antd";
import { Send } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { UsersOnConsillium } from "./UsersOnConsillium";
import { MessageItem } from "./MessageItem";
import { ConsilliumStatus } from "@/api/shared";
import { ConsilliumStatus as ConsilliumStatusBadge } from "@/components/shared/ConsilliumStatus";
import { GoBack } from "@/components/BackButton";
import { ConsilliumResult } from "./ConsilliumResult";

export const ConsilliumChat: FC<Props> = ({
  consillium,
  isLead,
  handleSendMessage,
  messagesList,
  user,
  handleEnd,
  rolesTranslates,
}) => {
  const [message, setMessage] = useState("");

  const chatRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!chatRef.current) return;

    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [chatRef, messagesList]);

  const onSend = useCallback(() => {
    if (!message) return;
    handleSendMessage({ text: message });
    setMessage("");
  }, [handleSendMessage, message]);

  const isDone = consillium.status === ConsilliumStatus.Done;

  const messagesContent = (
    <ChatWrapper isEmpty={!messagesList.length} ref={chatRef} isDone={isDone}>
      {!messagesList.length && <Empty description="Пока сообщений нет" />}
      {messagesList.map((message) => (
        <MessageItem
          user={user}
          key={message.id}
          message={message}
          rolesTranslates={rolesTranslates}
        />
      ))}
    </ChatWrapper>
  );

  return (
    <Wrapper>
      <Header>
        <ManagementButton>
          <GoBack />
          <ConsilliumStatusBadge status={consillium.status} />
          <UsersOnConsillium usersOnConsillium={consillium.usersOnConsillium} />
        </ManagementButton>
        <ManagementButton>
          {consillium.therapy && (
            <Button
              type="ghost"
              size="small"
              onClick={() => navigate(`/therapy/${consillium.therapy?.id}`)}
            >
              Данные по терапии
            </Button>
          )}
          {consillium.analysis && (
            <Button
              type="ghost"
              size="small"
              onClick={() =>
                navigate(`/analysis/fill/${consillium.analysis?.id}`)
              }
            >
              Данные по анализу
            </Button>
          )}
          {isLead && consillium.status === ConsilliumStatus.Working && (
            <Button size="small" onClick={handleEnd}>
              Завершить консилиум
            </Button>
          )}
        </ManagementButton>
      </Header>
      {!isDone && messagesContent}
      {isDone && (
        <ConsilliumContentWrapper>
          {consillium.consilliumResult && (
            <ConsilliumResult consilliumResult={consillium.consilliumResult} />
          )}
          {messagesContent}
        </ConsilliumContentWrapper>
      )}
      {!isDone && (
        <SendMessageWrapper>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            size="large"
            placeholder="Введите сообщение..."
            onKeyDown={(e) => {
              if (e.key === "Enter") onSend();
            }}
          />
          <Button icon={<Send />} disabled={!message} onClick={onSend}>
            Отправить
          </Button>
        </SendMessageWrapper>
      )}
    </Wrapper>
  );
};

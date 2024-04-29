import { FC, useCallback, useEffect, useRef, useState } from "react";
import {
  ChatWrapper,
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

export const ConsilliumChat: FC<Props> = ({
  consillium,
  isLead,
  handleSendMessage,
  messagesList,
  user,
  handleEnd,
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

  return (
    <Wrapper>
      <Header>
        <UsersOnConsillium usersOnConsillium={consillium.usersOnConsillium} />
        <ManagementButton>
          {consillium.analysis && (
            <Button
              type="ghost"
              size="small"
              onClick={() =>
                navigate(`/analysis/fill/${consillium.analysis.id}`)
              }
            >
              данные по анализу
            </Button>
          )}
          {isLead && (
            <Button size="small" onClick={handleEnd}>
              Завершить консилиум
            </Button>
          )}
        </ManagementButton>
      </Header>
      <ChatWrapper isEmpty={!messagesList.length} ref={chatRef}>
        {!messagesList.length && <Empty description="Пока сообщений нет" />}
        {messagesList.map((message) => (
          <MessageItem user={user} key={message.id} message={message} />
        ))}
      </ChatWrapper>
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
    </Wrapper>
  );
};

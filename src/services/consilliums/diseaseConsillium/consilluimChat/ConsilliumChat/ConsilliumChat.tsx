import { FC, useState } from "react";
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

export const ConsilliumChat: FC<Props> = ({
  consillium,
  isLead,
  handleSendMessage,
}) => {
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

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
          {isLead && <Button size="small">Завершить консилиум</Button>}
        </ManagementButton>
      </Header>
      <ChatWrapper isEmpty>
        <Empty description="Пока сообщений нет" />
      </ChatWrapper>
      <SendMessageWrapper>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          size="large"
          placeholder="Введите сообщение..."
        />
        <Button
          icon={<Send />}
          disabled={!message}
          onClick={() => {
            handleSendMessage({ text: message });
            setMessage("");
          }}
        >
          Отправить
        </Button>
      </SendMessageWrapper>
    </Wrapper>
  );
};

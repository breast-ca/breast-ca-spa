import { FC } from "react";
import { Props } from "./Modal.types";
import { Modal as ModalAntd } from "antd";
import { Footer } from "./Modal.styled";
import { Button } from "../Button";

export const Modal: FC<Props> = ({
  isOpen,
  title,
  children,
  handleClose,
  handleSubmit,
}) => {
  return (
    <ModalAntd
      title={title}
      open={isOpen}
      onCancel={handleClose}
      centered
      footer={
        <Footer>
          <Button size="middle" type="ghost" onClick={handleClose}>
            Отмена
          </Button>
          <Button size="middle" onClick={handleSubmit}>
            Сохранить
          </Button>
        </Footer>
      }
    >
      {children}
    </ModalAntd>
  );
};

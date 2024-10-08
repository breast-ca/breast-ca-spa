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
  disabled,
  width,
  hideFooter,
}) => {
  return (
    <ModalAntd
      title={title}
      open={isOpen}
      onCancel={handleClose}
      centered
      width={width}
      footer={
        hideFooter ? (
          <></>
        ) : (
          <Footer>
            <Button size="middle" type="ghost" onClick={handleClose}>
              Отмена
            </Button>
            <Button size="middle" onClick={handleSubmit} disabled={disabled}>
              Сохранить
            </Button>
          </Footer>
        )
      }
    >
      {children}
    </ModalAntd>
  );
};

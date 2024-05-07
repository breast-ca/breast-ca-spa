import { FC } from "react";
import { Wrapper } from "./ImmunoInfoModal.styled";
import { Props } from "./ImmunoInfoModal.types";
import { Modal } from "@/components/Modal";

export const ImmunoInfoModal: FC<Props> = ({ visisble, onClose }) => {
  return (
    <Modal title="Подтипы опухоли" isOpen={visisble} handleClose={onClose}>
      <Wrapper></Wrapper>
    </Modal>
  );
};

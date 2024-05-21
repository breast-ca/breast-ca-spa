import { FC } from "react";
import { Wrapper, Image } from "./ImmunoInfoModal.styled";
import { Props } from "./ImmunoInfoModal.types";
import { Modal } from "@/components/Modal";
import info from "./assets/info.png";

export const ImmunoInfoModal: FC<Props> = ({ visisble, onClose }) => {
  return (
    <Modal
      title="Подтипы опухоли"
      isOpen={visisble}
      handleClose={onClose}
      hideFooter
      width={850}
    >
      <Wrapper>
        <Image src={info} />
      </Wrapper>
    </Modal>
  );
};

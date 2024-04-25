import { TNMResponseDTO, UpdateTNMDTO } from "@/api/shared";

export type Props = {
  isOpen: boolean;
  closeModal: () => void;
  tnm?: TNMResponseDTO;
  handleSave: (values: UpdateTNMDTO) => void;
};

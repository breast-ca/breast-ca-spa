import { TNMResponseDTO, UpdateTNMDTO } from "@/api/shared";

export type Props = {
  tnm?: TNMResponseDTO;
  diseaseId: number;
};

export interface UpdateTNMRequestPayload extends UpdateTNMDTO {
  id: number;
}

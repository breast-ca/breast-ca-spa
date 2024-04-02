import { EditDiseaseDto } from "@/api/shared";

export interface EditDiseaseRequestPayload extends EditDiseaseDto {
  id: number;
}

import { CreateDiseaseDto } from "@/api/shared";

export interface CreateDiseaseRequestPayload extends CreateDiseaseDto {
  patientId: number;
}

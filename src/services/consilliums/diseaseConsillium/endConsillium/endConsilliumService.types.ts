import { ConsilliumEndDto } from "@/api/shared";

export interface EndConsilliumRequestPayload extends ConsilliumEndDto {
  consilliumId: number;
}

import { ConsilliumFillDto } from "@/api/shared";

export interface ConsilliumFillRequestPayload extends ConsilliumFillDto {
  consilliumId: number;
}

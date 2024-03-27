import { EditUserDto } from "@/api/shared";

export interface EditUserPayload extends EditUserDto {
  userId: number;
}

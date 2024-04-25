import { UploadFileResponseDto } from "@/api/shared";

export interface Props {
  onChange: (files: UploadFileResponseDto[]) => void;
}

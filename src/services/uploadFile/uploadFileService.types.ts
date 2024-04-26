import { UploadFileResponseDto } from "@/api/shared";
import { UploadListType } from "antd/es/upload/interface";

export interface Props {
  onChange: (files: UploadFileResponseDto[]) => void;
  type: UploadListType;
}

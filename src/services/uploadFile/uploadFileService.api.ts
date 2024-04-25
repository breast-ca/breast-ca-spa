import { createMutation } from "@farfetched/core";
import { axios } from "@/api";
import { UploadFileResponseDto } from "@/api/shared";

export const uploadFileMuation = createMutation<File, UploadFileResponseDto>({
  handler: (data) =>
    axios.post("/api/file-storage/upload", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
});

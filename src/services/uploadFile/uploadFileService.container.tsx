import { API_HOST } from "@/constants";
import { Upload } from "antd";
import { PlusCircle } from "react-bootstrap-icons";
import { authService } from "../auth/authService.model";
import { UploadFileResponseDto } from "@/api/shared";
import { Props } from "./uploadFileService.types";
import { FC } from "react";

export const UploadFileContainer: FC<Props> = ({ onChange }) => {
  return (
    <>
      <Upload
        action={`${API_HOST}/file-storage/upload`}
        headers={{
          Authorization: `Bearer ${authService.outputs.$accessToken.getState()}`,
        }}
        listType="picture-card"
        onChange={(file) =>
          onChange(
            file.fileList.map((file) => file.response as UploadFileResponseDto)
          )
        }
        
      >
        <button
          style={{ border: 0, background: "none", cursor: "pointer" }}
          type="button"
        >
          <PlusCircle />
          <div style={{ marginTop: 8 }}>Загрузить</div>
        </button>
      </Upload>
    </>
  );
};

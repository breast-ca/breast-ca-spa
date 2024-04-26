import { API_HOST } from "@/constants";
import { Upload } from "antd";
import { PlusCircle } from "react-bootstrap-icons";
import { authService } from "../auth/authService.model";
import { UploadFileResponseDto } from "@/api/shared";
import { Props } from "./uploadFileService.types";
import { FC } from "react";
import { Button } from "@/components/Button";

export const UploadFileContainer: FC<Props> = ({ onChange, type }) => {
  return (
    <>
      <Upload
        action={`${API_HOST}/file-storage/upload`}
        headers={{
          Authorization: `Bearer ${authService.outputs.$accessToken.getState()}`,
        }}
        listType={type}
        onChange={(file) =>
          onChange(
            file.fileList.map((file) => file.response as UploadFileResponseDto)
          )
        }
      >
        {type !== "text" && (
          <button
            style={{ border: 0, background: "none", cursor: "pointer" }}
            type="button"
          >
            <PlusCircle />
            <div style={{ marginTop: 8, fontSize: 12 }}>Изображение</div>
          </button>
        )}
        {type === "text" && (
          <Button type="ghost" size="small">
            Загрузить документ
          </Button>
        )}
      </Upload>
    </>
  );
};

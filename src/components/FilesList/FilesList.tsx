import { FC } from "react";
import { Extension, FileItem, Wrapper } from "./FilesList.styled";
import { Props } from "./FilesList.types";
import { API_HOST } from "@/constants";

export const FilesList: FC<Props> = ({ files }) => {
  return (
    <Wrapper>
      {files.map((file) => {
        const [name, ext] = file.split(".");
        return (
          <FileItem
            href={`${API_HOST}/file-storage/file/${file}`}
            target="_blank"
          >
            <div>
              {name}
              <Extension>.{ext}</Extension>
            </div>
          </FileItem>
        );
      })}
    </Wrapper>
  );
};

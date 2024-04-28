import { ConsilliumResponseDto } from "@/api/shared";
import { FC } from "react";
import { ConsilliumChat } from "./ConsilliumChat";

export const ConsilluimChatContainer: FC<{
  consillium: ConsilliumResponseDto;
}> = ({ consillium }) => {
  return (
    <>
      <ConsilliumChat consillium={consillium} />
    </>
  );
};

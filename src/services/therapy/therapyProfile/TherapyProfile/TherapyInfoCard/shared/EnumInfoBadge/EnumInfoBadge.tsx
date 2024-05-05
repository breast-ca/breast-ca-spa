import { FC } from "react";
import { Badge, Wrapper } from "./EnumInfoBadge.styled";
import { Props } from "./EnumInfoBadge.types";

export const EnumInfoBadge: FC<Props> = ({ infos }) => {
  return (
    <Wrapper>
      {infos.map((elem) => (
        <Badge>{elem}</Badge>
      ))}
    </Wrapper>
  );
};

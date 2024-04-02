import { FC } from "react";
import {
  CardWrapper,
  KeyWrapper,
  SkeletonLoader,
  ValueWrapper,
  Wrapper,
} from "./CommonInfo.styled";
import { CommonInfoProps } from "./CommonInfo.types";

export const CommonInfo: FC<CommonInfoProps> = ({
  items,
  className,
  isLoading,
  card,
}) => {
  const content = (
    <>
      {items.map(({ key, value, hidden, column }) => {
        if (hidden) {
          return null;
        }

        return (
          <Wrapper key={key} card={card} column={column}>
            <KeyWrapper>{key}</KeyWrapper>
            {isLoading ? (
              <SkeletonLoader active />
            ) : (
              <ValueWrapper column={column}>{value || "—"}</ValueWrapper>
            )}
          </Wrapper>
        );
      })}
    </>
  );

  if (card) {
    return <CardWrapper>{content}</CardWrapper>;
  }

  return <div className={className}>{content}</div>;
};

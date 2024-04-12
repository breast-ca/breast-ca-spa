import { FC, useMemo } from "react";
import { Wrapper } from "./SortButton.styled";
import { SortButtonProps } from "./SortButton.types";
import {
  FunnelFill as SortIcon,
  SortUp as SortIconTop,
  SortDown as SortIconBottom,
} from "react-bootstrap-icons";
import { OrderByRule } from "@/types";

export const SortButton: FC<SortButtonProps> = ({
  onChange,
  value,
  className,
}) => {
  const handleChange = () => {
    if (!value) {
      return onChange(OrderByRule.Ascending);
    } else if (value === OrderByRule.Ascending) {
      return onChange(OrderByRule.Descending);
    }
    return onChange(undefined);
  };

  const Icon = useMemo(() => {
    if (value === OrderByRule.Ascending) {
      return SortIconTop;
    }
    if (value === OrderByRule.Descending) {
      return SortIconBottom;
    }
    return SortIcon;
  }, [value]);

  return (
    <Wrapper className={className} onClick={handleChange}>
      <Icon />
    </Wrapper>
  );
};

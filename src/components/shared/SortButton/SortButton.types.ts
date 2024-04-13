import { OrderByRule } from "@/types";

export type SortButtonProps = {
  onChange: (value?: OrderByRule) => void;
  value?: OrderByRule;
  className?: string;
};

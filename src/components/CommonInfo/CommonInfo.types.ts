import { ReactNode } from 'react';

export type CommonInfoProps = {
  items: CommonInfoItem[];
  className?: string;
  isLoading?: boolean;
  card?: boolean;
};

export type CommonInfoItem = {
  key: string;
  value: ReactNode;
  hidden?: boolean;
  column?: boolean;
};

import { FC } from "react";
import { Wrapper } from "./TherapyProfile.styled";
import { Props } from "./TherapyProfile.types";
import { WithLoader } from "@/components/WithLoader";
import { Empty } from "antd";
import { PageHeader } from "@/components/PageHeader";
import { TherapyStatusBadge } from "@/components/shared/TherapyStatusBadge";

export const TherapyProfile: FC<Props> = ({
  therapy,
  isLoading,
  therapyTranslates,
}) => {
  if (!therapy || isLoading) {
    return (
      <WithLoader isLoading={isLoading}>
        {!therapy && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      </WithLoader>
    );
  }

  if (!therapy) return null;

  return (
    <Wrapper>
      <PageHeader
        goBack
        title={
          <>
            {therapyTranslates.therapyType[therapy.therapyType]}
            <TherapyStatusBadge status={therapy.therapyStatus} />
          </>
        }
      />
    </Wrapper>
  );
};

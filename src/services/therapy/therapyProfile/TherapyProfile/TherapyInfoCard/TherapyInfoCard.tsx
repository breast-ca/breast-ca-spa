import { FC, useMemo } from "react";
import { CardTitle, Wrapper } from "./TherapyInfoCard.styled";
import { Props } from "./TherapyInfoCard.types";
import { TherapyType } from "@/api/shared";
import { ChemotherapyView } from "./ChemotherapyView";
import { OperationView } from "./OperationView";
import { RadiationView } from "./RadiationView";
import { CommonInfo } from "@/components/CommonInfo";
import dayjs from "dayjs";

export const TherapyInfoCard: FC<Props> = ({ therapy, therapyTranslates }) => {
  const therapyView = useMemo(() => {
    const therapyViews = {
      [TherapyType.Chemotherapy]: therapy.Chemotherapy ? (
        <ChemotherapyView
          chemoTherapy={therapy.Chemotherapy}
          therapyTranslates={therapyTranslates}
        />
      ) : null,
      [TherapyType.Operation]: therapy.Operation ? (
        <OperationView
          operation={therapy.Operation}
          therapyTranslates={therapyTranslates}
        />
      ) : null,
      [TherapyType.RadiationTherapy]: therapy.RadiationTherapy ? (
        <RadiationView
          therapyTranslates={therapyTranslates}
          radiation={therapy.RadiationTherapy}
        />
      ) : null,
      [TherapyType.Symptomatic]: null,
    };

    return therapyViews[therapy.therapyType];
  }, [
    therapy.Chemotherapy,
    therapy.Operation,
    therapy.RadiationTherapy,
    therapy.therapyType,
    therapyTranslates,
  ]);

  return (
    <Wrapper>
      <CardTitle>Информация</CardTitle>
      <CommonInfo
        card
        items={[
          {
            key: "Дата начала",
            value: dayjs(therapy.creationTime).format("DD.MM.YYYY"),
          },
        ]}
      />
      {therapyView && (
        <>
          <CardTitle>Терапия:</CardTitle>
          {therapyView}
        </>
      )}
    </Wrapper>
  );
};

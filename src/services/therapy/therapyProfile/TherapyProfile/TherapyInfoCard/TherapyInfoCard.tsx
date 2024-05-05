import { FC, useMemo } from "react";
import { CardTitle, DynamicWrapper, Wrapper } from "./TherapyInfoCard.styled";
import { Props } from "./TherapyInfoCard.types";
import { TherapyDynamic, TherapyType } from "@/api/shared";
import { ChemotherapyView } from "./ChemotherapyView";
import { OperationView } from "./OperationView";
import { RadiationView } from "./RadiationView";
import { CommonInfo } from "@/components/CommonInfo";
import dayjs from "dayjs";
import { CommonInfoItem } from "@/components/CommonInfo/CommonInfo.types";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";

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

  const infoItems = useMemo(() => {
    const infos: CommonInfoItem[] = [
      {
        key: "Дата начала",
        value: dayjs(therapy.creationTime).format("DD.MM.YYYY"),
      },
    ];

    if (therapy.therapyDynamic) {
      infos.push({
        key: "Динамика",
        value: (
          <DynamicWrapper>
            {therapyTranslates.therapyDynamic[therapy.therapyDynamic]}
            <TherapyDynamicIcon dynamic={therapy.therapyDynamic} />
          </DynamicWrapper>
        ),
      });
    }

    return infos;
  }, [
    therapy.creationTime,
    therapy.therapyDynamic,
    therapyTranslates.therapyDynamic,
  ]);

  return (
    <Wrapper>
      <CardTitle>Информация</CardTitle>
      <CommonInfo card items={infoItems} />
      {therapyView && (
        <>
          <CardTitle>Терапия:</CardTitle>
          {therapyView}
        </>
      )}
    </Wrapper>
  );
};

export const TherapyDynamicIcon: FC<{ dynamic: TherapyDynamic }> = ({
  dynamic,
}) => {
  const colors = {
    [TherapyDynamic.Negative]: "#ff2e2e",
    [TherapyDynamic.Positive]: "#04b804",
    [TherapyDynamic.None]: "none",
  };

  const Icon = useMemo(() => {
    const icons = {
      [TherapyDynamic.Negative]: CaretDownFill,
      [TherapyDynamic.Positive]: CaretUpFill,
      [TherapyDynamic.None]: null,
    };

    return icons[dynamic];
  }, [dynamic]);

  return Icon && <Icon style={{ color: colors[dynamic] }} />;
};

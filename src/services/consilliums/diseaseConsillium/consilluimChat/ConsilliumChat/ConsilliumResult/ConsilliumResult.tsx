import { FC } from "react";
import { AnalysisWrapper, SubTitle, Wrapper } from "./ConsilliumResult.styled";
import { Props } from "./ConsilliumResult.types";
import { PageHeader } from "@/components/PageHeader";
import dayjs from "dayjs";
import { Divider } from "antd";
import { FormItem } from "@/components/FormItem";
import { AnalysisShortInfo } from "@/services/analysis/AnalysisCard/AnalysisCard";
import { useUnit } from "effector-react";
import { AnalysisTranslatesQuery } from "@/services/analysis/analysisService.api";
import { useNavigate } from "react-router-dom";
import { TherapyShortInfo } from "../../../../../therapy/TherapyShortInfo";
import { therapyTranslatesQuery } from "@/services/therapy/therapyTranslates/therapyTranslatesService.api";

export const ConsilliumResult: FC<Props> = ({ consilliumResult }) => {
  const { analysisTranslates, therapyTranslates } = useUnit({
    analysisTranslates: AnalysisTranslatesQuery.$data,
    therapyTranslates: therapyTranslatesQuery.$data,
  });

  const navigate = useNavigate();

  if (!analysisTranslates) return;

  return (
    <Wrapper>
      <PageHeader title="Результаты">
        {dayjs(consilliumResult.resultTime).format("DD.MM.YYYY HH:mm")}
      </PageHeader>
      {consilliumResult.description && (
        <>
          <Divider
            style={{
              margin: 0,
              padding: 0,
              width: "calc(100% + 32px)",
              transform: "translateX(-16px)",
            }}
          />
          <FormItem label="Заключение">{consilliumResult.description}</FormItem>
        </>
      )}
      {Boolean(consilliumResult?.analysis?.length) && (
        <>
          <Divider
            style={{
              margin: 0,
              padding: 0,
              width: "calc(100% + 32px)",
              transform: "translateX(-16px)",
            }}
          />
          <SubTitle>Анализы:</SubTitle>
          {consilliumResult?.analysis?.map((elem) => (
            <AnalysisWrapper
              onClick={() => navigate(`/analysis/fill/${elem.id}`)}
            >
              <AnalysisShortInfo
                analysis={elem}
                analysisTranslates={analysisTranslates}
              />
            </AnalysisWrapper>
          ))}
        </>
      )}
      {consilliumResult.therapy && (
        <Divider
          style={{
            margin: 0,
            padding: 0,
            width: "calc(100% + 32px)",
            transform: "translateX(-16px)",
          }}
        />
      )}
      {consilliumResult.therapy && therapyTranslates && (
        <>
          <SubTitle>Терапия:</SubTitle>
          <TherapyShortInfo
            therapyTranslates={therapyTranslates}
            therapy={consilliumResult.therapy}
          />
        </>
      )}
    </Wrapper>
  );
};

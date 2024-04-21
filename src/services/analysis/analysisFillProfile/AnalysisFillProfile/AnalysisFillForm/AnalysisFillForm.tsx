import { FC, useMemo } from "react";
import { Footer, Wrapper } from "./AnalysisFillForm.styled";
import { Props } from "./AnalysisFillForm.types";
import TextArea from "antd/es/input/TextArea";
import { FormItem } from "@/components/FormItem";
import { Button } from "@/components/Button";
import { AnalysisType } from "@/api/shared";
import { FillUltrasoundForm } from "./FillUltrasoundForm";

export const AnalysisFillForm: FC<Props> = ({ analysis }) => {
  const FillForm = useMemo(() => {
    const forms: { [key in keyof typeof AnalysisType]: FC | null } = {
      [AnalysisType.Ultrasound]: FillUltrasoundForm,
      [AnalysisType.Biopsy]: null,
      [AnalysisType.BloodBiochemistry]: null,
      [AnalysisType.BoneScan]: null,
      [AnalysisType.CommonBloodAnalysis]: null,
      [AnalysisType.CommonUrineAnalysis]: null,
      [AnalysisType.ComputerTomography]: null,
      [AnalysisType.MRI]: null,
      [AnalysisType.Mammography]: null,
      [AnalysisType.Markers]: null,
      [AnalysisType.PETCT]: null,
      [AnalysisType.XRay]: null,
    };

    return forms[analysis.analysisType];
  }, [analysis]);

  return (
    <Wrapper>
      {FillForm && <FillForm />}
      <FormItem label="Заключение">
        <TextArea placeholder="Введите заключение" />
      </FormItem>
      <Footer>
        <Button>Сохранить анализ</Button>
      </Footer>
    </Wrapper>
  );
};

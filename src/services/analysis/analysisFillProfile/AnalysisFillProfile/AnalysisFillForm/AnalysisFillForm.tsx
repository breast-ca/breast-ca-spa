import { FC, useEffect, useMemo } from "react";
import { Footer, Wrapper } from "./AnalysisFillForm.styled";
import { Props } from "./AnalysisFillForm.types";
import TextArea from "antd/es/input/TextArea";
import { FormItem } from "@/components/FormItem";
import { Button } from "@/components/Button";
import { AnalysisType, CreateUltrasoundDto } from "@/api/shared";
import { FillUltrasoundForm } from "./FillUltrasoundForm";
import { FillProps } from "./FillUltrasoundForm/FillUltrasoundForm.types";
import { useFormik } from "formik";
import { analysisFillProfileService } from "../../analysisFillProfileService.model";
import { useUnit } from "effector-react";

const { inputs } = analysisFillProfileService;

export const AnalysisFillForm: FC<Props> = ({
  analysis,
  analysisTranslates,
}) => {
  const { hadleSave, pushFillAnalysisPayload } = useUnit({
    hadleSave: inputs.handleSaveAnalysisButtonClicked,
    pushFillAnalysisPayload: inputs.pushFillAnalysisPayload,
  });

  const { setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      description: "",
      ultrasoundPayload: null as CreateUltrasoundDto | null,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(
    () =>
      inputs.pushFillAnalysisPayload.watch(async (payload) => {
        await setFieldValue("ultrasoundPayload", payload);

        handleSubmit();
      }).unsubscribe,
    [handleSubmit, setFieldValue]
  );

  const FillForm = useMemo(() => {
    const forms: { [key in keyof typeof AnalysisType]: FC<FillProps> | null } =
      {
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
      {FillForm && (
        <FillForm
          analysisTranslates={analysisTranslates}
          pushFillAnalysisPayload={pushFillAnalysisPayload}
        />
      )}
      <FormItem label="Заключение">
        <TextArea size="large" placeholder="Введите заключение" />
      </FormItem>
      <Footer>
        <Button onClick={hadleSave}>Сохранить анализ</Button>
      </Footer>
    </Wrapper>
  );
};

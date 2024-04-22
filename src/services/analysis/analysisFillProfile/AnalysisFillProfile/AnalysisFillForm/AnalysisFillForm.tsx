import { FC, useEffect, useMemo } from "react";
import { Footer, Wrapper } from "./AnalysisFillForm.styled";
import { FillAnalysisOmit, Props } from "./AnalysisFillForm.types";
import TextArea from "antd/es/input/TextArea";
import { FormItem } from "@/components/FormItem";
import { Button } from "@/components/Button";
import {
  AnalysisType,
  CreateUltrasoundDto,
  EditAnalysisDto,
} from "@/api/shared";
import { FillUltrasoundForm } from "./FillUltrasoundForm";
import { FillProps } from "./FillUltrasoundForm/FillUltrasoundForm.types";
import { useFormik } from "formik";
import { analysisFillProfileService } from "../../analysisFillProfileService.model";
import { useUnit } from "effector-react";
import { AnalysisFillSavePayload } from "../../analysisFillProfileService.types";
import { createEvent } from "effector";
import { validationSchema } from "./AnalysisFillForm.constants";
import { ErrorMessage } from "@/components/ErrorMessage";

const { inputs } = analysisFillProfileService;

const analysisFillConnect = createEvent<FillAnalysisOmit>();

export const AnalysisFillForm: FC<Props> = ({
  analysis,
  analysisTranslates,
  handleSaveAnalysisFill,
}) => {
  const { hadleSave, handleAnalysisFillConnect } = useUnit({
    hadleSave: inputs.handleSaveAnalysisButtonClicked,
    handleAnalysisFillConnect: analysisFillConnect,
  });

  const { values, handleChange, setFieldValue, handleSubmit, errors } =
    useFormik({
      initialValues: {
        description: "",
        ultrasoundPayload: null as CreateUltrasoundDto | null,
      },
      onSubmit: (values) => {
        const { ultrasoundPayload, ...analysisPayloadRest } = values;

        const analysisPayload: EditAnalysisDto = analysisPayloadRest;

        const fillSavePayload: AnalysisFillSavePayload = {
          analysisEditPayload: analysisPayload,
          ultrasound: ultrasoundPayload,
        };

        handleSaveAnalysisFill(fillSavePayload);
      },
      validationSchema,
      validateOnChange: false,
    });

  useEffect(
    () =>
      analysisFillConnect.watch(async (payload) => {
        await setFieldValue("ultrasoundPayload", payload.ultrasound);

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
          pushFillAnalysisPayload={handleAnalysisFillConnect}
        />
      )}
      <FormItem label="Заключение">
        <TextArea
          size="large"
          placeholder="Введите заключение"
          status={errors.description ? "error" : void 0}
          value={values.description}
          name="description"
          onChange={handleChange}
        />
        {errors.description && (
          <ErrorMessage>{errors.description}</ErrorMessage>
        )}
      </FormItem>
      <Footer>
        <Button onClick={hadleSave}>Сохранить анализ</Button>
      </Footer>
    </Wrapper>
  );
};

import { FC, useEffect, useMemo } from "react";
import { Footer, Wrapper } from "./AnalysisFillForm.styled";
import { FillAnalysisOmit, Props } from "./AnalysisFillForm.types";
import TextArea from "antd/es/input/TextArea";
import { FormItem } from "@/components/FormItem";
import { Button } from "@/components/Button";
import {
  AnalysisType,
  CreateBiopsyDto,
  CreateMammographyDto,
  CreateUltrasoundDto,
  EditAnalysisDto,
  UploadFileResponseDto,
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
import { UploadFileContainer } from "@/services/uploadFile";
import { MammographyFillForm } from "./MammographyFillForm";
import { CommonFillForm } from "./CommonFillForm";
import { BiopsyFillForm } from "./BiopsyFillForm";
import { Divider } from "antd";

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

  const {
    values,
    handleChange,
    setFieldValue,
    handleSubmit,
    errors,
    setValues,
  } = useFormik({
    initialValues: {
      description: "",
      attachedImages: [] as UploadFileResponseDto[],
      attachedDocuments: [] as UploadFileResponseDto[],
      ultrasoundPayload: null as CreateUltrasoundDto | null,
      mammographyPayload: null as CreateMammographyDto | null,
      biopsyPayload: null as CreateBiopsyDto | null,
    },
    onSubmit: (values) => {
      const {
        ultrasoundPayload,
        mammographyPayload,
        biopsyPayload,
        ...analysisPayloadRest
      } = values;

      const analysisPayload: EditAnalysisDto = {
        ...analysisPayloadRest,
        attachedImages: values.attachedImages.map((item) => item.filename),
        attachedDocuments: values.attachedDocuments.map(
          (item) => item.filename
        ),
      };

      const fillSavePayload: AnalysisFillSavePayload = {
        analysisEditPayload: analysisPayload,
        ultrasound: ultrasoundPayload,
        mammography: mammographyPayload,
        biopsy: biopsyPayload && {
          ...biopsyPayload,
          gystologyPayload: biopsyPayload.isPostOperational
            ? biopsyPayload.gystologyPayload
            : { histotype: biopsyPayload.gystologyPayload.histotype },
        },
      };

      return void handleSaveAnalysisFill(fillSavePayload);
    },
    validationSchema,
    validateOnChange: false,
  });

  useEffect(
    () =>
      analysisFillConnect.watch(async (payload) => {
        await setValues((prev) => ({
          ...prev,
          ultrasoundPayload: payload.ultrasound || null,
          mammographyPayload: payload.mammography || null,
          biopsyPayload: payload.biopsy || null,
        }));

        handleSubmit();
      }).unsubscribe,
    [handleSubmit, setValues]
  );

  const FillForm = useMemo(() => {
    const forms: { [key in keyof typeof AnalysisType]: FC<FillProps> | null } =
      {
        [AnalysisType.Ultrasound]: FillUltrasoundForm,
        [AnalysisType.Biopsy]: BiopsyFillForm,
        [AnalysisType.BloodBiochemistry]: CommonFillForm,
        [AnalysisType.BoneScan]: null,
        [AnalysisType.CommonBloodAnalysis]: CommonFillForm,
        [AnalysisType.CommonUrineAnalysis]: null,
        [AnalysisType.ComputerTomography]: null,
        [AnalysisType.MRI]: null,
        [AnalysisType.Mammography]: MammographyFillForm,
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
      <UploadFileContainer
        type="picture-card"
        onChange={(images) => setFieldValue("attachedImages", images)}
      />
      <UploadFileContainer
        type="text"
        onChange={(files) => setFieldValue("attachedDocuments", files)}
      />
      <Divider
        orientation="left"
        style={{
          margin: 0,
          padding: 0,
          width: "calc(100% + 32px)",
          transform: "translateX(-16px)",
        }}
      />
      <Footer>
        <Button onClick={hadleSave}>Сохранить анализ</Button>
      </Footer>
    </Wrapper>
  );
};

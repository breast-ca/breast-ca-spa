import { FC, useEffect, useState } from "react";
import {
  AnalysisTitle,
  GystologyWrapper,
  IghFormWrapper,
  Wrapper,
} from "./BiopsyFillForm.styled";
import { Props } from "./BiopsyFillForm.types";
import { Checkbox, Divider, Input, Select } from "antd";
import { FormItem } from "@/components/FormItem";
import {
  ISH,
  Immunohistotype,
  TumorDifferentiation,
  TumorHistotype,
} from "@/api/shared";
import { useFormik } from "formik";
import {
  TumorSizeField,
  TumorSizeWrapper,
} from "../MammographyFillForm/MammographyFillForm.styled";
import {
  mOptionsList,
  nOptionsList,
  tOptionsList,
} from "@/services/diseaseProfile/DiseaseProfilePage/updateTNM/UpdateTNMModal/UpdateTNMModal.constants";
import { validationSchema } from "./BiopsyFillForm.constants";
import { ErrorMessage } from "@/components/ErrorMessage";
import { analysisFillProfileService } from "../../../analysisFillProfileService.model";

const { inputs } = analysisFillProfileService;

export const BiopsyFillForm: FC<Props> = ({
  analysisTranslates,
  pushFillAnalysisPayload,
}) => {
  const [search, setSearch] = useState("");

  const { values, setFieldValue, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues: {
        isPostOperational: false,
        gystologyPayload: {
          resectionDistance: null as number | null,
          resectionEdgeState: false,
          havingDuctalComponent: false,
          tumorSize: {
            sizeX: null as number | null,
            sizeY: null as number | null,
            sizeZ: null as number | null,
          },
          histotype: null as TumorHistotype | null,
          tumorDifferentiation: null as TumorDifferentiation | null,
          havingInvasion: false,
          metastasisNumber: null as string | null,
          patomorphologicalAnswer: null as number | null,
          T: null as string | null,
          N: null as string | null,
        },
        ighPayload: {
          researchNumber: "",
          ER: null as number | null,
          PR: null as number | null,
          HERneu: null as number | null,
          HERneuFactor: false,
          ISH: null as ISH | null,
          Ki67: null as number | null,
          Immunohistotype: null as Immunohistotype | null,
        },
      },
      validationSchema,
      validateOnChange: false,
      onSubmit: () => {
        pushFillAnalysisPayload({
          biopsy: {
            gystologyPayload: {
              ...values.gystologyPayload,
              resectionDistance: values.gystologyPayload.resectionDistance!,
              tumorSize: {
                sizeX: values.gystologyPayload.tumorSize.sizeX!,
                sizeY: values.gystologyPayload.tumorSize.sizeY!,
                sizeZ: values.gystologyPayload.tumorSize.sizeZ!,
              },
              histotype: values.gystologyPayload.histotype!,
              tumorDifferentiation:
                values.gystologyPayload.tumorDifferentiation!,
              havingInvasion: values.gystologyPayload.havingInvasion!,
              metastasisNumber: Number(
                values.gystologyPayload.metastasisNumber
              ),
              patomorphologicalAnswer:
                values.gystologyPayload.patomorphologicalAnswer!,
              T: values.gystologyPayload.T!,
              N: values.gystologyPayload.N!,
            },
            ighPayload: {
              ...values.ighPayload,
              ER: String(values.ighPayload.ER),
              PR: String(values.ighPayload.PR),
              HERneu: values.ighPayload.HERneu!,
              ISH: values.ighPayload.ISH!,
              Ki67: values.ighPayload.Ki67!,
              Immunohistotype: values.ighPayload.Immunohistotype!,
            },
            isPostOperational: values.isPostOperational,
          },
        });
      },
    });

  useEffect(
    () =>
      inputs.handleSaveAnalysisButtonClicked.watch(() => handleSubmit())
        .unsubscribe,
    [handleSubmit]
  );

  return (
    <Wrapper>
      <AnalysisTitle>
        Гистология{" "}
        <Checkbox
          checked={values.isPostOperational}
          onChange={(e) => setFieldValue("isPostOperational", e.target.checked)}
          name="isPostOperational"
        >
          Послеоперационная
        </Checkbox>
      </AnalysisTitle>
      <FormItem label="Гистологическое строение опухоли">
        <Select
          placeholder="Выберите"
          size="large"
          value={values.gystologyPayload.histotype}
          onChange={(value) =>
            setFieldValue("gystologyPayload.histotype", value)
          }
          showSearch
          searchValue={search}
          onSearch={setSearch}
          allowClear
          status={errors.gystologyPayload?.histotype && "error"}
        >
          {Object.values(TumorHistotype).map((elem) => (
            <Select.Option key={elem} value={elem}>
              {analysisTranslates.histotypeCorrection[elem]}{" "}
              {analysisTranslates.histotypeDescription[elem]}
            </Select.Option>
          ))}
        </Select>
        <ErrorMessage>{errors.gystologyPayload?.histotype}</ErrorMessage>
      </FormItem>
      {values.isPostOperational && (
        <GystologyWrapper>
          <FormItem label="Расстояние до ближайшего края резекции">
            <Input
              size="large"
              placeholder="Введите расстояние"
              suffix="см"
              name="gystologyPayload.resectionDistance"
              onChange={handleChange}
              value={values.gystologyPayload.resectionDistance ?? ""}
              status={errors.gystologyPayload?.resectionDistance && "error"}
            />
            <ErrorMessage>
              {errors.gystologyPayload?.resectionDistance}
            </ErrorMessage>
          </FormItem>
          <FormItem label="Размеры опухоли">
            <TumorSizeWrapper>
              <TumorSizeField>
                <Input
                  value={values.gystologyPayload.tumorSize.sizeX ?? ""}
                  type="number"
                  name="gystologyPayload.tumorSize.sizeX"
                  onChange={handleChange}
                  size="large"
                  placeholder="X:"
                  status={errors.gystologyPayload?.tumorSize?.sizeX && "error"}
                />
                <ErrorMessage>
                  {errors.gystologyPayload?.tumorSize?.sizeX}
                </ErrorMessage>
              </TumorSizeField>
              <TumorSizeField>
                <Input
                  type="number"
                  name="gystologyPayload.tumorSize.sizeY"
                  onChange={handleChange}
                  value={values.gystologyPayload.tumorSize.sizeY ?? ""}
                  size="large"
                  placeholder="Y:"
                  status={errors.gystologyPayload?.tumorSize?.sizeY && "error"}
                />
                <ErrorMessage>
                  {errors.gystologyPayload?.tumorSize?.sizeY}
                </ErrorMessage>
              </TumorSizeField>
              <TumorSizeField>
                <Input
                  type="number"
                  value={values.gystologyPayload.tumorSize.sizeZ ?? ""}
                  onChange={handleChange}
                  name="gystologyPayload.tumorSize.sizeZ"
                  size="large"
                  placeholder="Z:"
                  status={errors.gystologyPayload?.tumorSize?.sizeZ && "error"}
                />
                <ErrorMessage>
                  {errors.gystologyPayload?.tumorSize?.sizeZ}
                </ErrorMessage>
              </TumorSizeField>
            </TumorSizeWrapper>
          </FormItem>
          <FormItem label="Состояние краев резекции ">
            <Checkbox
              checked={values.gystologyPayload.resectionEdgeState}
              onChange={(e) =>
                setFieldValue(
                  "gystologyPayload.resectionEdgeState",
                  e.target.checked
                )
              }
            >
              Есть раковые клетки
            </Checkbox>
          </FormItem>
          <FormItem label="Наличие внутрипротокового компонента">
            <Checkbox
              checked={values.gystologyPayload.havingDuctalComponent}
              onChange={(e) =>
                setFieldValue(
                  "gystologyPayload.havingDuctalComponent",
                  e.target.checked
                )
              }
            >
              Есть внутрипротоковый компонент
            </Checkbox>
          </FormItem>
          <FormItem label="Степень дифференцировки опухоли">
            <Select
              size="large"
              placeholder="Выберите"
              value={values.gystologyPayload.tumorDifferentiation}
              onChange={(value) =>
                setFieldValue("gystologyPayload.tumorDifferentiation", value)
              }
              status={errors.gystologyPayload?.tumorDifferentiation && "error"}
            >
              {Object.values(TumorDifferentiation).map((elem) => (
                <Select.Option key={elem} value={elem}>
                  {elem}
                </Select.Option>
              ))}
            </Select>
            <ErrorMessage>
              {errors.gystologyPayload?.tumorDifferentiation}
            </ErrorMessage>
          </FormItem>
          <FormItem label="pTNM">
            <TumorSizeWrapper>
              <TumorSizeField style={{ width: "100%" }}>
                <Select
                  placeholder="T:"
                  size="large"
                  value={values.gystologyPayload.T}
                  onChange={(value) =>
                    setFieldValue("gystologyPayload.T", value)
                  }
                  status={errors.gystologyPayload?.T && "error"}
                >
                  {tOptionsList.map((elem) => (
                    <Select.Option key={elem} value={elem}>
                      {elem}
                    </Select.Option>
                  ))}
                </Select>
                <ErrorMessage>{errors.gystologyPayload?.T}</ErrorMessage>
              </TumorSizeField>
              <TumorSizeField style={{ width: "100%" }}>
                <Select
                  placeholder="N:"
                  size="large"
                  style={{ width: "100%" }}
                  value={values.gystologyPayload.N}
                  onChange={(value) =>
                    setFieldValue("gystologyPayload.N", value)
                  }
                  status={errors.gystologyPayload?.N && "error"}
                >
                  {nOptionsList.map((elem) => (
                    <Select.Option key={elem} value={elem}>
                      {elem}
                    </Select.Option>
                  ))}
                </Select>
                <ErrorMessage>
                  {errors.gystologyPayload?.metastasisNumber}
                </ErrorMessage>
              </TumorSizeField>
              <TumorSizeField style={{ width: "100%" }}>
                <Select
                  placeholder="M:"
                  size="large"
                  style={{ width: "100%" }}
                  value={values.gystologyPayload.metastasisNumber}
                  onChange={(value) =>
                    setFieldValue("gystologyPayload.metastasisNumber", value)
                  }
                  status={errors.gystologyPayload?.metastasisNumber && "error"}
                >
                  {mOptionsList.map((elem) => (
                    <Select.Option key={elem} value={elem}>
                      {elem}
                    </Select.Option>
                  ))}
                </Select>
                <ErrorMessage>
                  {errors.gystologyPayload?.metastasisNumber}
                </ErrorMessage>
              </TumorSizeField>
            </TumorSizeWrapper>
          </FormItem>
          <FormItem label="Наличие лимфоваскулярной инвазии">
            <Checkbox
              checked={values.gystologyPayload.havingInvasion}
              onChange={(e) =>
                setFieldValue(
                  "gystologyPayload.havingInvasion",
                  e.target.checked
                )
              }
            >
              Есть лимфоваскулярная инвазия
            </Checkbox>
          </FormItem>
          <FormItem label="Cтепень патоморфологического ответа опухоли">
            <Input
              placeholder="Введите степень"
              size="large"
              value={values.gystologyPayload.patomorphologicalAnswer ?? ""}
              onChange={handleChange}
              name="gystologyPayload.patomorphologicalAnswer"
              status={
                errors.gystologyPayload?.patomorphologicalAnswer && "error"
              }
            />
            <ErrorMessage>
              {errors.gystologyPayload?.patomorphologicalAnswer}
            </ErrorMessage>
          </FormItem>
        </GystologyWrapper>
      )}
      <Divider
        orientation="left"
        style={{
          margin: 0,
          padding: 0,
          width: "calc(100% + 32px)",
          transform: "translateX(-16px)",
        }}
      />
      <AnalysisTitle>ИГХ</AnalysisTitle>
      <IghFormWrapper>
        <FormItem label="Номер исследования">
          <Input
            value={values.ighPayload.researchNumber}
            onChange={handleChange}
            name="ighPayload.researchNumber"
            placeholder="Введите номер исследования"
            size="large"
            status={errors.ighPayload?.researchNumber && "error"}
          />
          <ErrorMessage>{errors.ighPayload?.researchNumber}</ErrorMessage>
        </FormItem>
        <FormItem label="Иммунногистотип">
          <Select
            size="large"
            placeholder="Выберите"
            value={values.ighPayload.Immunohistotype}
            onChange={(value) =>
              setFieldValue("ighPayload.Immunohistotype", value)
            }
            status={errors.ighPayload?.Immunohistotype && "error"}
          >
            {Object.values(Immunohistotype).map((elem) => (
              <Select.Option key={elem} value={elem}>
                {analysisTranslates.immunohistotype[elem]}
              </Select.Option>
            ))}
          </Select>
          <ErrorMessage>{errors.ighPayload?.Immunohistotype}</ErrorMessage>
        </FormItem>
        <FormItem label="РЭ Пролиферативная активность">
          <Input
            type="number"
            size="large"
            placeholder="Введите РЭ"
            suffix="%"
            value={values.ighPayload.ER ?? ""}
            name="ighPayload.ER"
            onChange={handleChange}
            status={errors.ighPayload?.ER && "error"}
          />
          <ErrorMessage>{errors.ighPayload?.ER}</ErrorMessage>
        </FormItem>
        <FormItem label="РП Пролиферативная активность">
          <Input
            type="number"
            size="large"
            placeholder="Введите РП"
            suffix="%"
            name="ighPayload.PR"
            value={values.ighPayload.PR ?? ""}
            onChange={handleChange}
            status={errors.ighPayload?.PR && "error"}
          />
          <ErrorMessage>{errors.ighPayload?.PR}</ErrorMessage>
        </FormItem>
        <FormItem label="HER2-neu">
          <Input
            size="large"
            placeholder="Введите HER2-neu"
            value={values.ighPayload.HERneu ?? ""}
            name="ighPayload.HERneu"
            onChange={handleChange}
            type="number"
            status={errors.ighPayload?.HERneu && "error"}
          />
          <ErrorMessage>{errors.ighPayload?.HERneu}</ErrorMessage>
        </FormItem>
        <FormItem label="HER2-neu factor">
          <Checkbox
            checked={values.ighPayload.HERneuFactor}
            onChange={(e) =>
              setFieldValue("ighPayload.HERneuFactor", e.target.checked)
            }
          >
            Положительный
          </Checkbox>
        </FormItem>
        <FormItem label="ISH Цитогенетический анализ">
          <Select
            size="large"
            placeholder="Укажите ISH"
            value={values.ighPayload.ISH}
            onChange={(value) => setFieldValue("ighPayload.ISH", value)}
            status={errors.ighPayload?.ISH && "error"}
          >
            {Object.values(ISH).map((elem) => (
              <Select.Option key={elem} value={elem}>
                {analysisTranslates.ish[elem]}
              </Select.Option>
            ))}
          </Select>
          <ErrorMessage>{errors.ighPayload?.ISH}</ErrorMessage>
        </FormItem>
        <FormItem label="Ki67">
          <Input
            size="large"
            placeholder="Введите Ki67"
            suffix="%"
            value={values.ighPayload.Ki67 ?? ""}
            name="ighPayload.Ki67"
            onChange={handleChange}
            status={errors.ighPayload?.Ki67 && "error"}
          />
          <ErrorMessage>{errors.ighPayload?.Ki67}</ErrorMessage>
        </FormItem>
      </IghFormWrapper>
      <Divider
        orientation="left"
        style={{
          margin: 0,
          padding: 0,
          width: "calc(100% + 32px)",
          transform: "translateX(-16px)",
        }}
      />
    </Wrapper>
  );
};

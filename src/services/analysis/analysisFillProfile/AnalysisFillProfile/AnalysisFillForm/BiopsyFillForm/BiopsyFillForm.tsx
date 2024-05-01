import { FC, useState } from "react";
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

export const BiopsyFillForm: FC<Props> = ({ analysisTranslates }) => {
  const [search, setSearch] = useState("");

  const { values, setFieldValue, handleChange } = useFormik({
    initialValues: {
      isPostOperational: true,
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
        metastasisNumber: null as number | null,
        patomorphologicalAnswer: null as number | null,
      },
      ighPayload: {
        researchNumber: "",
        ER: "",
        PR: "",
        HERneu: null as number | null,
        HERneuFactor: false,
        ISH: null as ISH | null,
        Ki67: null as number | null,
        Immunohistotype: null as Immunohistotype | null,
      },
    },
    onSubmit: () => void 0,
  });

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
        >
          {Object.values(TumorHistotype).map((elem) => (
            <Select.Option key={elem} value={elem}>
              {analysisTranslates.histotypeCorrection[elem]}{" "}
              {analysisTranslates.histotypeDescription[elem]}
            </Select.Option>
          ))}
        </Select>
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
            />
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
                  // status={errors.tumorSize ? "error" : void 0}
                />
                {/* {errors.tumorSize?.sizeX && (
                  <ErrorMessage>{errors.tumorSize.sizeX}</ErrorMessage>
                )} */}
              </TumorSizeField>
              <TumorSizeField>
                <Input
                  type="number"
                  name="gystologyPayload.tumorSize.sizeY"
                  onChange={handleChange}
                  value={values.gystologyPayload.tumorSize.sizeY ?? ""}
                  size="large"
                  placeholder="Y:"
                  // status={errors.tumorSize ? "error" : void 0}
                />
                {/* {errors.tumorSize?.sizeY && (
                  <ErrorMessage>{errors.tumorSize.sizeY}</ErrorMessage>
                )} */}
              </TumorSizeField>
              <TumorSizeField>
                <Input
                  type="number"
                  value={values.gystologyPayload.tumorSize.sizeZ ?? ""}
                  onChange={handleChange}
                  name="gystologyPayload.tumorSize.sizeZ"
                  size="large"
                  placeholder="Z:"
                  // status={errors.tumorSize ? "error" : void 0}
                />
                {/* {errors.tumorSize?.sizeZ && (
                  <ErrorMessage>{errors.tumorSize.sizeZ}</ErrorMessage>
                )} */}
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
            >
              {Object.values(TumorDifferentiation).map((elem) => (
                <Select.Option key={elem} value={elem}>
                  {elem}
                </Select.Option>
              ))}
            </Select>
          </FormItem>
          <FormItem label="pTNM">
            <TumorSizeWrapper>
              <TumorSizeField style={{ width: "100%" }}>
                <Select placeholder="T:" size="large">
                  {tOptionsList.map((elem) => (
                    <Select.Option key={elem} value={elem}>
                      {elem}
                    </Select.Option>
                  ))}
                </Select>
              </TumorSizeField>
              <TumorSizeField style={{ width: "100%" }}>
                <Select placeholder="N:" size="large" style={{ width: "100%" }}>
                  {nOptionsList.map((elem) => (
                    <Select.Option key={elem} value={elem}>
                      {elem}
                    </Select.Option>
                  ))}
                </Select>
              </TumorSizeField>
              <TumorSizeField style={{ width: "100%" }}>
                <Select placeholder="M:" size="large" style={{ width: "100%" }}>
                  {mOptionsList.map((elem) => (
                    <Select.Option key={elem} value={elem}>
                      {elem}
                    </Select.Option>
                  ))}
                </Select>
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
            />
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
        <FormItem label="РЭ Пролиферативная активность">
          <Input
            size="large"
            placeholder="Введите РЭ"
            suffix="%"
            value={values.ighPayload.ER}
            name="ighPayload.ER"
            onChange={handleChange}
          />
        </FormItem>
        <FormItem label="РП Пролиферативная активность">
          <Input
            size="large"
            placeholder="Введите РП"
            suffix="%"
            name="ighPayload.PR"
            value={values.ighPayload.PR}
            onChange={handleChange}
          />
        </FormItem>
        <FormItem label="HER2-neu">
          <Input
            size="large"
            placeholder="Введите HER2-neu"
            value={values.ighPayload.HERneu ?? ""}
            name="ighPayload.HERneu"
            onChange={handleChange}
          />
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
          >
            {Object.values(ISH).map((elem) => (
              <Select.Option key={elem} value={elem}>
                {analysisTranslates.ish[elem]}
              </Select.Option>
            ))}
          </Select>
        </FormItem>
        <FormItem label="Ki67">
          <Input
            size="large"
            placeholder="Введите Ki67"
            suffix="%"
            value={values.ighPayload.Ki67 ?? ""}
            name="ighPayload.Ki67"
            onChange={handleChange}
          />
        </FormItem>
        <FormItem label="Иммунногистотип">
          <Select
            size="large"
            placeholder="Выберите"
            value={values.ighPayload.Immunohistotype}
            onChange={(value) =>
              setFieldValue("ighPayload.Immunohistotype", value)
            }
          >
            {Object.values(Immunohistotype).map((elem) => (
              <Select.Option key={elem} value={elem}>
                {analysisTranslates.immunohistotype[elem]}
              </Select.Option>
            ))}
          </Select>
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

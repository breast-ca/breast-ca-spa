import { FC } from "react";
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

export const BiopsyFillForm: FC<Props> = () => {
  const { values, setFieldValue, handleChange } = useFormik({
    initialValues: {
      isPostOperational: true,
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
        <Select placeholder="Выберите" size="large">
          {Object.values(TumorHistotype).map((elem) => (
            <Select.Option key={elem} value={elem}>
              {elem}
            </Select.Option>
          ))}
        </Select>
      </FormItem>
      {values.isPostOperational && (
        <GystologyWrapper>
          <FormItem label="Расстояние до ближайшего края резекции">
            <Input size="large" placeholder="Введите расстояние" suffix="см" />
          </FormItem>
          <FormItem label="Размеры опухоли">
            <TumorSizeWrapper>
              <TumorSizeField>
                <Input
                  name="tumorSize.sizeX"
                  // value={values.tumorSize.sizeX ?? ""}
                  type="number"
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
                  name="tumorSize.sizeY"
                  // value={values.tumorSize.sizeY ?? ""}
                  type="number"
                  onChange={handleChange}
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
                  name="tumorSize.sizeZ"
                  // value={values.tumorSize.sizeZ ?? ""}
                  type="number"
                  onChange={handleChange}
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
            <Checkbox>Есть раковые клетки</Checkbox>
          </FormItem>
          <FormItem label="Наличие внутрипротокового компонента">
            <Checkbox>Есть внутрипротоковый компонент</Checkbox>
          </FormItem>
          <FormItem label="Степень дифференцировки опухоли">
            <Select size="large" placeholder="Выберите">
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
                <Select placeholder="T:" size="large" />
              </TumorSizeField>
              <TumorSizeField style={{ width: "100%" }}>
                <Select
                  placeholder="N:"
                  size="large"
                  style={{ width: "100%" }}
                />
              </TumorSizeField>
              <TumorSizeField style={{ width: "100%" }}>
                <Select
                  placeholder="M:"
                  size="large"
                  style={{ width: "100%" }}
                />
              </TumorSizeField>
            </TumorSizeWrapper>
          </FormItem>
          <FormItem label="Наличие лимфоваскулярной инвазии">
            <Checkbox>Есть лимфоваскулярная инвазия</Checkbox>
          </FormItem>
          <FormItem label="Cтепень патоморфологического ответа опухоли">
            <Input placeholder="Введите степень" size="large" />
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
          <Input size="large" placeholder="Введите РЭ" suffix="%" />
        </FormItem>
        <FormItem label="РП Пролиферативная активность">
          <Input size="large" placeholder="Введите РП" suffix="%" />
        </FormItem>
        <FormItem label="HER2-neu">
          <Input size="large" placeholder="Введите HER2-neu" />
        </FormItem>
        <FormItem label="HER2-neu factor">
          <Checkbox>Положительный</Checkbox>
        </FormItem>
        <FormItem label="ISH Цитогенетический анализ">
          <Select size="large" placeholder="Укажите ISH">
            {Object.values(ISH).map((elem) => (
              <Select.Option key={elem} value={elem}>
                {elem}
              </Select.Option>
            ))}
          </Select>
        </FormItem>
        <FormItem label="Ki67">
          <Input size="large" placeholder="Введите Ki67" suffix="%" />
        </FormItem>
        <FormItem label="Иммунногистотип">
          <Select size="large" placeholder="Выберите">
            {Object.values(Immunohistotype).map((elem) => (
              <Select.Option key={elem} value={elem}>
                {elem}
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

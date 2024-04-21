import { FC, useEffect } from "react";
import { Wrapper } from "./AnalysisSearchForm.styled";
import { Props } from "./AnalysisSearchForm.types";
import { useUnit } from "effector-react";
import { analysisListService } from "../../analysisListService.model";
import { useFormik } from "formik";
import { useDebounce } from "@/hooks/useDebounce";
import { Input, Select, Space } from "antd";
import { AnalysisStatus } from "@/api/shared";
import { AnalysisStatusSimpleBadge } from "@/components/shared/AnalysisStatus/AnalysisStatus";
import { Segmented } from "@/components/Segmented";

const { outputs, inputs } = analysisListService;

export const AnalysisSearchForm: FC<Props> = () => {
  const { searchState, setSearchForm } = useUnit({
    searchState: outputs.$searchForm,
    setSearchForm: inputs.setSearchForm,
  });

  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: searchState,
    enableReinitialize: true,
    onSubmit: (values) => void setSearchForm(values),
  });

  const debouncedFormState = useDebounce(values, 500);

  useEffect(() => void handleSubmit(), [debouncedFormState, handleSubmit]);

  return (
    <Wrapper>
      <Segmented
        block
        options={[
          { label: "Ожидают", value: "awaiting" },
          { label: "История", value: "history" },
        ]}
      />
      <Space.Compact style={{ width: "100%" }}>
        <Input
          size="large"
          variant="filled"
          placeholder="Фамилия"
          value={values.lastName}
          name="lastName"
          onChange={handleChange}
        />
        <Input
          size="large"
          variant="filled"
          placeholder="Имя"
          value={values.firstName}
          name="firstName"
          onChange={handleChange}
        />
        <Input
          size="large"
          variant="filled"
          placeholder="Отчество"
          value={values.middleName}
          name="middleName"
          onChange={handleChange}
        />
      </Space.Compact>
      <Select
        size="large"
        variant="filled"
        placeholder="Статус"
        allowClear
        value={values.status}
        onChange={(value) => setFieldValue("status", value)}
        // disabled
      >
        {Object.values(AnalysisStatus).map((status) => (
          <Select.Option key={status} value={status}>
            <AnalysisStatusSimpleBadge status={status} />
          </Select.Option>
        ))}
      </Select>
    </Wrapper>
  );
};

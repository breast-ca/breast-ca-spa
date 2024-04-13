import { FC, useEffect } from "react";
import { Wrapper } from "./SearchForm.styled";
import { Props } from "./SearchForm.types";
import { Input, Select, Space } from "antd";
import { Status } from "@/api/shared";
import { StatusItem } from "@/services/patients/addPatient/AddPatientModal/AddPatientModal";
import { useUnit } from "effector-react";
import { patientsListService } from "../../patientsListService.model";
import { useFormik } from "formik";
import { useDebounce } from "@/hooks/useDebounce";

const { inputs, outputs } = patientsListService;

export const SearchForm: FC<Props> = () => {
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
      <Input
        size="large"
        variant="filled"
        placeholder="Снилс"
        value={values.individualInsurance}
        name="individualInsurance"
        onChange={handleChange}
      />
      <Select
        size="large"
        variant="filled"
        placeholder="Статус"
        allowClear
        value={values.status}
        onChange={(value) => setFieldValue("status", value)}
      >
        {Object.values(Status).map((status) => (
          <Select.Option key={status} value={status}>
            <StatusItem status={status} />
          </Select.Option>
        ))}
      </Select>
    </Wrapper>
  );
};

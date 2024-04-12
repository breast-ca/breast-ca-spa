import { FC } from "react";
import { Wrapper } from "./SearchForm.styled";
import { Props } from "./SearchForm.types";
import { Input, Select, Space } from "antd";
import { Status } from "@/api/shared";
import { StatusItem } from "@/services/patients/addPatient/AddPatientModal/AddPatientModal";

export const SearchForm: FC<Props> = () => {
  return (
    <Wrapper>
      <Space.Compact style={{ width: "100%" }}>
        <Input size="large" placeholder="Фамилия" />
        <Input size="large" placeholder="Имя" />
        <Input size="large" placeholder="Отчество" />
      </Space.Compact>
      <Select size="large" placeholder="Статус">
        {Object.values(Status).map((status) => (
          <Select.Option key={status} value={status}>
            <StatusItem status={status} />
          </Select.Option>
        ))}
      </Select>
      <Input size="large" placeholder="Снилс" />
    </Wrapper>
  );
};

import { FC, useEffect, useMemo, useState } from "react";
import {
  FactAddressTitle,
  Footer,
  Grid,
  PatinetStatusCircle,
  PatinetStatusWrapper,
  SementedWrapper,
  Wrapper,
} from "./AddPatientModal.styled";
import { Props } from "./AddPatientModal.types";
import {
  Checkbox,
  DatePicker,
  Divider,
  Input,
  Modal,
  Select,
  Space,
} from "antd";
import { Button } from "@/components/Button";
import { FormItem } from "@/components/FormItem";
import { useFormik } from "formik";
import dayjs from "dayjs";
import { validationSchema } from "./AddPatientModal.constants";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Status } from "@/api/shared";
import { StatusTranslates } from "@/constants/enums";
import { EditAddressForm } from "@/components/shared/EditAddressForm";
import { compareAddresses } from "./AddPatientModal.utils";
import { Segmented } from "@/components/Segmented";

export const AddPatientModal: FC<Props> = ({
  isOpen,
  handleClose,
  handleCreatePatinet,
  edit,
  payload,
  editPatient,
}) => {
  const [isFactAddressSame, setFactAddressSame] = useState(true);
  const [segment, setSegment] = useState<"info" | "address">("info");

  useEffect(() => {
    setSegment("info");
  }, [isOpen, setSegment]);

  useEffect(() => {
    if (!payload) return;

    if (!payload.factAddress || !payload.jureAddress) return;

    const isSame = compareAddresses(payload.factAddress, payload.jureAddress);

    setFactAddressSame(isSame);
  }, [payload, setFactAddressSame]);

  const initialValues = useMemo(() => {
    const addressTemp = {
      city: "",
      street: "",
      houseNumber: "",
      corpus: "",
      apartementNumber: "",
      district: "",
    };

    if (!payload) {
      return {
        name: "",
        surname: "",
        middleName: "",
        individualInsurance: "",
        medicalInsurance: "",
        passportSeries: "",
        passportNumber: "",
        insuranceOrganization: "",
        phoneNumber: "",
        birthDate: null as null | dayjs.Dayjs,
        factAddress: addressTemp,
        jureAddress: addressTemp,
      };
    }

    return {
      name: payload.name,
      surname: payload.surname,
      middleName: payload.middleName,
      individualInsurance: payload.individualInsurance,
      medicalInsurance: payload.medicalInsurance,
      passportSeries: String(payload.passport).slice(0, 4),
      passportNumber: String(payload.passport).slice(4).replace(" ", ""),
      insuranceOrganization: payload.insuranceOrganization,
      phoneNumber: payload.phoneNumber || "",
      birthDate: dayjs(new Date(payload.birthDate)),
      status: payload.status,
      factAddress: payload.factAddress || addressTemp,
      jureAddress: payload.jureAddress || addressTemp,
    };
  }, [payload]);

  const {
    values,
    handleChange,
    setFieldValue,
    errors,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      if (!values.birthDate) return;

      const { passportNumber, passportSeries, birthDate, ...preparedValues } =
        values;

      const data = {
        ...Object.entries(preparedValues).reduce(
          (acc, [key, value]) => ({ ...acc, [key]: String(value) }),
          {} as typeof preparedValues
        ),
        passport: `${passportSeries} ${passportNumber}`,
        birthDate: birthDate.toISOString(),
        jureAddress: values.jureAddress,
        factAddress: isFactAddressSame
          ? values.jureAddress
          : values.factAddress,
      };

      if (edit && payload) {
        editPatient({ ...data, id: payload?.id });
      } else {
        handleCreatePatinet(data);
      }

      return void 0;
    },
    enableReinitialize: true,
  });

  useEffect(() => {
    if (isOpen) return;

    resetForm();
  }, [isOpen, resetForm]);

  useEffect(() => {
    const errorsList = Object.values(errors).filter(Boolean);

    if (!errorsList.length) return;

    setSegment("info");
  }, [errors]);

  const baseForm = (
    <>
      <Grid temp="1fr 1fr 1fr">
        <FormItem label="Фамилия">
          <Input
            size="large"
            value={values.surname}
            name="surname"
            onChange={handleChange}
            placeholder="Введите фамилию"
            status={errors.surname ? "error" : void 0}
          />
          {errors.surname && <ErrorMessage>{errors.surname}</ErrorMessage>}
        </FormItem>
        <FormItem label="Имя">
          <Input
            size="large"
            value={values.name}
            name="name"
            onChange={handleChange}
            placeholder="Введите имя"
            status={errors.name ? "error" : void 0}
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </FormItem>
        <FormItem label="Отчество">
          <Input
            size="large"
            value={values.middleName}
            name="middleName"
            onChange={handleChange}
            placeholder="Введите отчество"
            status={errors.middleName ? "error" : void 0}
          />
          {errors.middleName && (
            <ErrorMessage>{errors.middleName}</ErrorMessage>
          )}
        </FormItem>
      </Grid>
      <Grid temp={edit ? "1fr 1fr 1fr" : "1fr 1fr"}>
        <FormItem label="Дата рождения">
          <DatePicker
            size="large"
            value={values.birthDate}
            onChange={(date) => setFieldValue("birthDate", date)}
            format="DD.MM.YYYY"
            placeholder="Введите дату рождения"
            disabledDate={(date) => date.isAfter(new Date())}
            status={errors.birthDate ? "error" : void 0}
          />
          {errors.birthDate && (
            <ErrorMessage>
              {typeof errors.birthDate === "string" ? errors.birthDate : null}
            </ErrorMessage>
          )}
        </FormItem>
        <FormItem label="Номер телефона">
          <Input
            size="large"
            placeholder="Введите номер"
            value={values.phoneNumber}
            name="phoneNumber"
            onChange={handleChange}
            status={errors.phoneNumber ? "error" : void 0}
          />
          {errors.phoneNumber && (
            <ErrorMessage>{errors.phoneNumber}</ErrorMessage>
          )}
        </FormItem>
        {edit && (
          <FormItem label="Статус">
            <Select
              size="large"
              value={values.status}
              onChange={(status) => status && setFieldValue("status", status)}
            >
              {Object.values(Status).map((status) => (
                <Select.Option key={status} value={status}>
                  <PatinetStatusWrapper>
                    <PatinetStatusCircle status={status} />
                    {StatusTranslates[status]}
                  </PatinetStatusWrapper>
                </Select.Option>
              ))}
            </Select>
          </FormItem>
        )}
      </Grid>
      <Grid temp="1fr 1fr">
        <FormItem label="Паспорт">
          <Space.Compact style={{ width: "100%" }}>
            <Input
              size="large"
              placeholder="Серия"
              value={values.passportSeries}
              name="passportSeries"
              onChange={handleChange}
              type="number"
              status={errors.passportSeries ? "error" : void 0}
            />
            <Input
              size="large"
              placeholder="Номер"
              value={values.passportNumber}
              name="passportNumber"
              onChange={handleChange}
              type="number"
              status={errors.passportNumber ? "error" : void 0}
            />
          </Space.Compact>
        </FormItem>
        <FormItem label="СНИЛС">
          <Input
            size="large"
            placeholder="Введите номер СНИЛС"
            type="number"
            value={values.individualInsurance}
            name="individualInsurance"
            onChange={handleChange}
            status={errors.individualInsurance ? "error" : void 0}
          />
          {errors.individualInsurance && (
            <ErrorMessage>{errors.individualInsurance}</ErrorMessage>
          )}
        </FormItem>
      </Grid>
      <Grid temp="1fr 1fr">
        <FormItem label="Номер cтрахового полиса">
          <Input
            size="large"
            value={values.medicalInsurance}
            name="medicalInsurance"
            onChange={handleChange}
            placeholder="Введите номер полиса"
            type="number"
            status={errors.medicalInsurance ? "error" : void 0}
          />
          {errors.medicalInsurance && (
            <ErrorMessage>{errors.medicalInsurance}</ErrorMessage>
          )}
        </FormItem>
        <FormItem label="Страховая организация">
          <Input
            size="large"
            value={values.insuranceOrganization}
            name="insuranceOrganization"
            onChange={handleChange}
            placeholder="Введите название"
            status={errors.insuranceOrganization ? "error" : void 0}
          />
          {errors.insuranceOrganization && (
            <ErrorMessage>{errors.insuranceOrganization}</ErrorMessage>
          )}
        </FormItem>
      </Grid>
    </>
  );

  const addressesForm = (
    <>
      <Divider
        orientation="left"
        style={{
          marginBottom: 0,
          paddingBottom: 0,
          width: "calc(100% + 48px)",
          transform: "translateX(-24px)",
        }}
      >
        Адрес регистрации
      </Divider>
      <EditAddressForm
        temp="1fr 1fr 1fr"
        address={values.jureAddress}
        showApartment
        onChange={(field, value) =>
          setFieldValue(`jureAddress.${field}`, value)
        }
      />
      <Divider
        orientation="left"
        style={{
          marginBottom: 0,
          paddingBottom: 0,
          width: "calc(100% + 48px)",
          transform: "translateX(-24px)",
        }}
      >
        <FactAddressTitle>
          Адрес проживания{" "}
          <Checkbox
            checked={isFactAddressSame}
            onChange={(e) => setFactAddressSame(e.target.checked)}
          >
            Совпадает с регистрацией
          </Checkbox>
        </FactAddressTitle>
      </Divider>
      {!isFactAddressSame && (
        <EditAddressForm
          temp="1fr 1fr 1fr"
          address={values.factAddress}
          showApartment
          onChange={(field, value) =>
            setFieldValue(`factAddress.${field}`, value)
          }
        />
      )}
    </>
  );

  return (
    <Modal
      open={isOpen}
      onCancel={handleClose}
      title={edit ? "Редактировать пациента" : "Создать пациента"}
      centered
      width={800}
      maskClosable={false}
      footer={
        <Footer>
          <Button size="middle" type="ghost" onClick={handleClose}>
            Отмена
          </Button>
          <Button
            size="middle"
            type="primary"
            onClick={
              segment === "address" ? handleSubmit : () => setSegment("address")
            }
          >
            {segment === "address" ? "Сохранить" : "Далее"}
          </Button>
        </Footer>
      }
    >
      <Wrapper>
        <SementedWrapper>
          <Segmented
            width={"100% important"}
            value={segment}
            onChange={(value) => setSegment(value as "info" | "address")}
            options={[
              { label: "Информация", value: "info" },
              { label: "Адрес", value: "address" },
            ]}
            block
          />
        </SementedWrapper>
        {segment === "info" && baseForm}
        {segment === "address" && addressesForm}
      </Wrapper>
    </Modal>
  );
};

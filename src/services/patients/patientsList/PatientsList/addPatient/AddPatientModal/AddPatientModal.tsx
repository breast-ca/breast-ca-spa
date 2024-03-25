import { FC } from "react";
import { Footer, Grid, Wrapper } from "./AddPatientModal.styled";
import { Props } from "./AddPatientModal.types";
import { DatePicker, Input, Modal, Space } from "antd";
import { Button } from "@/components/Button";
import { FormItem } from "@/components/FormItem";
import { useFormik } from "formik";
import { Dayjs } from "dayjs";
import { validationSchema } from "./AddPatientModal.constants";
import { ErrorMessage } from "@/components/ErrorMessage";

export const AddPatientModal: FC<Props> = ({ isOpen, handleClose }) => {
  const { values, handleChange, setFieldValue, errors, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        surname: "",
        middleName: "",
        individualInsurance: "",
        medicalInsurance: "",
        passportSeries: "",
        passportNumber: "",
        insuranceOrganization: "",
        phoneNumber: "",
        birthDate: null as null | Dayjs,
      },
      validationSchema,
      validateOnChange: false,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <Modal
      open={isOpen}
      onCancel={handleClose}
      title="Создать пациента"
      centered
      width={800}
      maskClosable={false}
      footer={
        <Footer>
          <Button type="ghost" onClick={handleClose} size="small">
            Отмена
          </Button>
          <Button type="primary" size="small" onClick={handleSubmit}>
            Сохранить
          </Button>
        </Footer>
      }
    >
      <Wrapper>
        <Grid temp="1fr 1fr 1fr">
          <FormItem label="Фамилия">
            <Input
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
        <Grid temp="1fr 1fr">
          <FormItem label="Дата рождения">
            <DatePicker
              value={values.birthDate}
              onChange={(date) => setFieldValue("birthDate", date)}
              format="DD.MM.YYYY"
              placeholder="Введите дату рождения"
              disabledDate={(date) => date.isAfter(new Date())}
              status={errors.birthDate ? "error" : void 0}
            />
            {errors.birthDate && (
              <ErrorMessage>{errors.birthDate}</ErrorMessage>
            )}
          </FormItem>
          <FormItem label="Номер телефона">
            <Input
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
        </Grid>
        <Grid temp="1fr 1fr">
          <FormItem label="Паспорт">
            <Space.Compact style={{ width: "100%" }}>
              <Input
                placeholder="Серия"
                value={values.passportSeries}
                name="passportSeries"
                onChange={handleChange}
                type="number"
                status={errors.passportSeries ? "error" : void 0}
              />
              <Input
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
      </Wrapper>
    </Modal>
  );
};

import { FC } from "react";
import { Footer, Grid, Wrapper } from "./AddPatientModal.styled";
import { Props } from "./AddPatientModal.types";
import { DatePicker, Input, Modal, Space } from "antd";
import { Button } from "@/components/Button";
import { FormItem } from "@/components/FormItem";

export const AddPatientModal: FC<Props> = ({ isOpen, handleClose }) => {
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
          <Button type="primary" size="small" disabled>
            Сохранить
          </Button>
        </Footer>
      }
    >
      <Wrapper>
        <Grid temp="1fr 1fr 1fr">
          <FormItem label="Фамилия">
            <Input placeholder="Введите фамилию" />
          </FormItem>
          <FormItem label="Имя">
            <Input placeholder="Введите имя" />
          </FormItem>
          <FormItem label="Отчество">
            <Input placeholder="Введите отчество" />
          </FormItem>
        </Grid>
        <Grid temp="1fr 1fr">
          <FormItem label="Дата рождения">
            <DatePicker
              format="DD.MM.YYYY"
              placeholder="Введите дату рождения"
              disabledDate={(date) => date.isAfter(new Date())}
            />
          </FormItem>
          <FormItem label="Номер телефона">
            <Input placeholder="Введите номер" />
          </FormItem>
        </Grid>
        <Grid temp="1fr 2fr">
          <FormItem label="Паспорт">
            <Space.Compact>
              <Input placeholder="Введите серию" />
              <Input placeholder="Введите номер" />
            </Space.Compact>
          </FormItem>
          <Grid temp="1fr 1fr">
            <FormItem label="Номер cтрахового полиса">
              <Input placeholder="Введите номер полиса" />
            </FormItem>
            <FormItem label="СНИЛС">
              <Input placeholder="Введите номер СНИЛС" />
            </FormItem>
          </Grid>
        </Grid>
      </Wrapper>
    </Modal>
  );
};

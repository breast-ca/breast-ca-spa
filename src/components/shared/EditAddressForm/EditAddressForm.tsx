import { FC } from "react";
import { Wrapper } from "./EditAddressForm.styled";
import { Props } from "./EditAddressForm.types";
import { FormItem } from "@/components/FormItem";
import { Input } from "antd";

export const EditAddressForm: FC<Props> = ({
  address,
  showApartment,
  onChange,
  temp,
}) => {
  return (
    <Wrapper temp={temp}>
      <FormItem label="Город">
        <Input
          value={address.city}
          placeholder="Город"
          onChange={(e) => onChange("city", e.target.value)}
        />
      </FormItem>
      <FormItem label="Район">
        <Input
          value={address.district}
          placeholder="Район"
          onChange={(e) => onChange("district", e.target.value)}
        />
      </FormItem>
      <FormItem label="Улица">
        <Input
          value={address.street}
          placeholder="Улица"
          onChange={(e) => onChange("street", e.target.value)}
        />
      </FormItem>
      <FormItem label="Номер дома">
        <Input
          value={address.houseNumber}
          placeholder="Номер дома"
          onChange={(e) => onChange("houseNumber", e.target.value)}
        />
      </FormItem>
      <FormItem label="Корпус">
        <Input
          value={address.corpus}
          placeholder="Корпус"
          onChange={(e) => onChange("corpus", e.target.value)}
        />
      </FormItem>
      {showApartment && (
        <FormItem label="Номер квартиры">
          <Input
            value={address.apartementNumber}
            placeholder="Номер квартиры"
            onChange={(e) => onChange("apartementNumber", e.target.value)}
          />
        </FormItem>
      )}
    </Wrapper>
  );
};

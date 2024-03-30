import { EditAddressDto } from "@/api/shared";

export type Props = {
  address: EditAddressDto;
  showApartment?: boolean;
  onChange: (field: string, value: string) => void;
};

import { AddressResponseDto } from "@/api/shared";

export function getAddressString(address: AddressResponseDto) {
  return `${address.city}, ${address.street} ${address.houseNumber}${
    address.corpus || ""
  }${address.apartementNumber ? `, кв ${address.apartementNumber}` : ""}`;
}

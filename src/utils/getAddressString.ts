import { AddressResponseDto } from "@/api/shared";

export function getAddressString(address: AddressResponseDto) {
  const city = address.city ? `${address.city}` : "";
  const district = address.district ? `р-н ${address.district}` : "";
  const street = address.street ? `ул. ${address.street}` : "";
  const houseNumber = address.houseNumber ? `д. ${address.houseNumber}` : "";
  const corpus = address.corpus || "";
  const apartementNumber = address.apartementNumber
    ? `кв ${address.apartementNumber}`
    : "";

  return [city, district, street, houseNumber, corpus, apartementNumber]
    .filter(Boolean)
    .join(", ");
}

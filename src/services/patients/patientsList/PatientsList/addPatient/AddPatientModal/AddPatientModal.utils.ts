import { AddressResponseDto } from "@/api/shared";
import { omit } from "lodash";

export function compareAddresses(
  address1: AddressResponseDto,
  address2: AddressResponseDto
): boolean {
  return (
    JSON.stringify(omit(address1, "id")) ===
    JSON.stringify(omit(address2, "id"))
  );
}

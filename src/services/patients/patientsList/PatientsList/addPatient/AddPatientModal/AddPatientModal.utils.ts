import { AddressResponseDto } from "@/api/shared";

export function compareAddresses(
  address1: AddressResponseDto,
  address2: AddressResponseDto
): boolean {
  return JSON.stringify(address1) === JSON.stringify(address2);
}

import { UserResponseDto } from "@/api/shared";

export type GetRoutesProps = {
  isAuth: boolean;
  user: UserResponseDto | null;
};

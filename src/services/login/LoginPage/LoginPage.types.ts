import { LoginDto } from "@/api/shared";

export type Props = {
  handleLogin: (payload: LoginDto) => void;
  isLoading: boolean;
};

import { LoginResponseDto } from "@/api/shared";
import { createDomain, forward } from "effector";
import { persist } from "effector-storage/local";

const domain = createDomain("authService");

const tokenReceived = domain.createEvent<LoginResponseDto>();
const tokenErased = domain.createEvent();

const signOut = domain.createEvent();

const $accessToken = domain
  .createStore<string | null>(null)
  .on(tokenReceived, (_, { accessToken }) => accessToken)
  .reset(tokenErased);

const $refreshToken = domain
  .createStore<string | null>(null)
  .on(tokenReceived, (_, { refreshToken }) => refreshToken)
  .reset(tokenErased);

persist({
  store: $accessToken,
  key: "accessToken",
  sync: true,
});

persist({
  store: $refreshToken,
  key: "refreshToken",
  sync: true,
});

forward({
  from: signOut,
  to: tokenErased,
});

const $isAuth = $accessToken.map(Boolean);

signOut.watch(() => setTimeout(() => window.location.reload(), 100));

export const authService = {
  inputs: { tokenReceived, signOut },
  outputs: { $accessToken, $refreshToken, $isAuth },
};

import { createDomain, forward } from "effector";
import { persist } from "effector-storage/local";
import { SignInResponseDto } from "@/api/shared";

const domain = createDomain("authService");

const tokenReceived = domain.createEvent<SignInResponseDto>();
const tokenErased = domain.createEvent();

const signOut = domain.createEvent();

const $accessToken = domain
  .createStore<string | null>(null)
  .on(tokenReceived, (_, { access }) => access)
  .reset(tokenErased);

const $refreshToken = domain
  .createStore<string | null>(null)
  .on(tokenReceived, (_, { refresh }) => refresh)
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

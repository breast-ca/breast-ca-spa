import { PushTherapyPayload } from "../createTherapyService.types";

export type CreateProps = {
  handlePushState: (payload: PushTherapyPayload) => void;
};

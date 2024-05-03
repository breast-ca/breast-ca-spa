import { PushTherapyPayload } from "../createTherapyService.types";

export type Props = {
  handlePushState: (payload: PushTherapyPayload) => void;
};

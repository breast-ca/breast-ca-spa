import { useParams } from "react-router-dom";
import { therapyProfileService } from "./therapyProfileService.model";
import { useUnit } from "effector-react";
import { therapyQuery } from "./therapyProfileService.api";
import { TherapyProfile } from "./TherapyProfile";
import { therapyTranslatesQuery } from "../therapyTranslates/therapyTranslatesService.api";

const {
  gates: { TherapyGate },
} = therapyProfileService;

export const TherapyProfileContainer = () => {
  const { id } = useParams<{ id: string }>();

  const { therapy, isLoading, therapyTranslates } = useUnit({
    therapy: therapyQuery.$data,
    isLoading: therapyQuery.$pending,
    therapyTranslates: therapyTranslatesQuery.$data,
  });

  return (
    <>
      {id && <TherapyGate id={Number(id)} />}
      {therapyTranslates && (
        <TherapyProfile
          therapy={therapy}
          isLoading={isLoading}
          therapyTranslates={therapyTranslates}
        />
      )}
    </>
  );
};

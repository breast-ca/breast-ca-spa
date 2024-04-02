import { PatientResponseDto } from "@/api/shared";
import { useUnit } from "effector-react";
import { mainLayoutService } from ".";
import { useEffect } from "react";

export function usePatientInfoPanel(patient?: PatientResponseDto | null) {
  const { set, reset } = useUnit({
    set: mainLayoutService.inputs.setPatientInfo,
    reset: mainLayoutService.inputs.resetPatientInfo,
  });

  useEffect(() => {
    if (patient) {
      set(patient);
    } else {
      reset();
    }

    return reset;
  }, [set, reset, patient]);
}

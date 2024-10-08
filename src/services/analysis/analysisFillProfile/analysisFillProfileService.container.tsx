import { useParams } from "react-router-dom";
import { analysisFillProfileService } from "./analysisFillProfileService.model";
import { AnalysisFillProfile } from "./AnalysisFillProfile/AnalysisFillProfile";
import { useUnit } from "effector-react";
import { analysisProfileQuery } from "./analysisFillProfileService.api";
import { WithLoader } from "@/components/WithLoader";
import { Empty } from "antd";
import { usePatientInfoPanel } from "@/services/mainLayout/mainLayoutService.hooks";
import { AnalysisTranslatesQuery } from "../analysisService.api";
import { analysisService } from "../analysisService.model";
import { diseaseEnumsTranslationsQuery } from "@/services/patients/patientProfile/PatientsProfile/diseasesList/diseasesListService.api";
import { startAnalysisConsillium } from "@/services/diseaseProfile/DiseaseProfilePage/diseaseAnalysisList/diseaseAnalysisListService.api";

const {
  gates: { AnalysisProfileGate },
} = analysisFillProfileService;

const {
  gates: { AnalysisTranslatesGate },
} = analysisService;

export const AnalysisFillProfileContainer = () => {
  const { id } = useParams<{ id: string }>();

  const {
    analysis,
    isLoading,
    analysisTranslates,
    diseaseTranslates,
    handleSaveAnalysisFill,
    handleCreateConsillium,
  } = useUnit({
    analysis: analysisProfileQuery.$data,
    isLoading: analysisProfileQuery.$pending,
    analysisTranslates: AnalysisTranslatesQuery.$data,
    diseaseTranslates: diseaseEnumsTranslationsQuery.$data,
    handleSaveAnalysisFill:
      analysisFillProfileService.inputs.handleSaveAnalysisFill,
    handleCreateConsillium: startAnalysisConsillium.start,
  });

  usePatientInfoPanel(analysis?.disease.patient);

  const handleStartConsillium = () => {
    handleCreateConsillium(Number(id));
  };

  return (
    <>
      <AnalysisProfileGate id={Number(id)} />
      <AnalysisTranslatesGate />
      <WithLoader isLoading={isLoading}>
        {!analysis && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
        {analysis && analysisTranslates && diseaseTranslates && (
          <AnalysisFillProfile
            analysis={analysis}
            analysisTranslates={analysisTranslates}
            diseaseTranslates={diseaseTranslates}
            handleSaveAnalysisFill={handleSaveAnalysisFill}
            handleStartConsillium={handleStartConsillium}
          />
        )}
      </WithLoader>
    </>
  );
};

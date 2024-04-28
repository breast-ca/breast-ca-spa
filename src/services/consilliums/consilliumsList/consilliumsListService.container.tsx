import { useUnit } from "effector-react";
import { consilliumsListService } from "./consilliumsListService.model";
import { consilliumsListQuery } from "./consilliumsListService.api";
import { WithLoader } from "@/components/WithLoader";
import { Empty } from "antd";
import { ConsilliumListItem } from "../diseaseConsilliumsList/DiseaseConsilliumsList/ConsilliumListItem";
import { AnalysisTranslatesQuery } from "@/services/analysis/analysisService.api";
import { analysisService } from "@/services/analysis/analysisService.model";
import { ConsilliumsWrapper, Wrapper } from "./consilliumsListService.styled";
import { PageHeader } from "@/components/PageHeader";
import { Segmented } from "@/components/Segmented";
import { ConsilliumsListType } from "./consilliumsListService.types";
import { useNavigate } from "react-router-dom";
import { userQuery } from "@/services/user/userService.api";
import { RoleType } from "@/api/shared";

const {
  inputs,
  outputs,
  gates: { ConsilliumsGate },
} = consilliumsListService;

const {
  gates: { AnalysisTranslatesGate },
} = analysisService;

export const ConsilliumsListContainer = () => {
  const {
    consilliumsList,
    isLoading,
    analysisTranslates,
    segment,
    setSegment,
    user,
  } = useUnit({
    consilliumsList: consilliumsListQuery.$data,
    isLoading: consilliumsListQuery.$pending,
    analysisTranslates: AnalysisTranslatesQuery.$data,
    segment: outputs.$consilliumsViewType,
    setSegment: inputs.setConsilliumsViewType,
    user: userQuery.$data,
  });

  const navigate = useNavigate();

  return (
    <>
      <ConsilliumsGate />
      <AnalysisTranslatesGate />
      <Wrapper>
        <PageHeader title="Консилиумы" />
        {user?.roles.includes(RoleType.HeadPhysician) && (
          <Segmented
            value={segment}
            onChange={(value) => setSegment(value as ConsilliumsListType)}
            options={[
              {
                label: "Вы участник",
                value: ConsilliumsListType.Member,
              },
              {
                label: "Не распределеные",
                value: ConsilliumsListType.Distribution,
              },
            ]}
          />
        )}
        <WithLoader isLoading={isLoading}>
          {!consilliumsList?.length && (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          )}
          {analysisTranslates && (
            <ConsilliumsWrapper>
              {consilliumsList?.map((elem) => (
                <ConsilliumListItem
                  handleClick={() =>
                    navigate(
                      `/disease/${elem.analysis.disease.id}/consiliums/${elem.id}`
                    )
                  }
                  consillium={elem}
                  analysisTranslates={analysisTranslates}
                />
              ))}
            </ConsilliumsWrapper>
          )}
        </WithLoader>
      </Wrapper>
    </>
  );
};

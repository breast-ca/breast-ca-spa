import { FC } from "react";
import {
  CreateDiseasesItem,
  DiseaseSkeleton,
  DiseaseItem,
  Wrapper,
  DiseaseTitle,
  DiseaseCode,
  Description,
  InfoPanel,
  InfoPanelItem,
} from "./DiseasesList.styled";
import { Props } from "./DiseasesList.types";
import { ClipboardPlus } from "react-bootstrap-icons";
import { getDisesasInfos } from "./DiseasesList.utils";
import { useNavigate } from "react-router-dom";

export const DiseasesList: FC<Props> = ({
  handleCreateDisease,
  isLoading,
  diseasesList,
  diseaseEnums,
}) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      {isLoading && (
        <>
          <DiseaseSkeleton active />
          <DiseaseSkeleton active />
        </>
      )}
      {!isLoading &&
        diseasesList.map((disease) => {
          const infos = getDisesasInfos(disease, diseaseEnums);

          return (
            <DiseaseItem
              key={disease.id}
              disease={disease}
              onClick={() => navigate(`/disease/${disease.id}/common`)}
            >
              <InfoPanel>
                {infos.map((text) => (
                  <InfoPanelItem key={text}>{text}</InfoPanelItem>
                ))}
              </InfoPanel>
              <DiseaseTitle>
                <DiseaseCode>{diseaseEnums.ICDCodes[disease.ICD]}</DiseaseCode>
                <Description>{disease.description}</Description>
              </DiseaseTitle>
            </DiseaseItem>
          );
        })}
      <CreateDiseasesItem onClick={handleCreateDisease}>
        <ClipboardPlus />
        Паспорт заболевания
      </CreateDiseasesItem>
    </Wrapper>
  );
};

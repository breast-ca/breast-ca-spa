import { FC } from "react";
import { Wrapper } from "./AnalysisListPage.styled";
import { Props } from "./AnalysisListPage.types";
import { PageHeader } from "@/components/PageHeader";
import { WithLoader } from "@/components/WithLoader";
import { Table } from "@/components/Table";
import dayjs from "dayjs";
import { AnalysisStatus } from "@/components/shared/AnalysisStatus";

export const AnalysisListPage: FC<Props> = ({
  analysisList,
  isLoading,
  analysisTranslates,
}) => {
  return (
    <Wrapper>
      <PageHeader title="Анализы" />
      <WithLoader isLoading={isLoading}>
        <Table
          columns={[
            {
              label: "Название",
              size: "1fr",
              render: (analysis) => (
                <strong>
                  {analysisTranslates.analysis[analysis.analysisType]}
                </strong>
              ),
            },
            {
              label: "Статус",
              size: "1fr",
              render: (analysis) => (
                <AnalysisStatus type={analysis.analysisStatus} />
              ),
            },
            {
              label: "Дата создания",
              size: "1fr",
              render: (analysis) =>
                dayjs(analysis.creationTime).format("DD.MM.YYYY (HH:hh)"),
            },
          ]}
          elements={analysisList}
        />
      </WithLoader>
    </Wrapper>
  );
};

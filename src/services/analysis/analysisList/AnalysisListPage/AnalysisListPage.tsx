import { FC } from "react";
import { Wrapper } from "./AnalysisListPage.styled";
import { Props } from "./AnalysisListPage.types";
import { PageHeader } from "@/components/PageHeader";
import { WithLoader } from "@/components/WithLoader";
import { Table } from "@/components/Table";
import dayjs from "dayjs";
import { AnalysisStatusBadge } from "@/components/shared/AnalysisStatus";
import { AnalysisSearchForm } from "./AnalysisSearchForm";

export const AnalysisListPage: FC<Props> = ({
  analysisPagedList,
  isLoading,
  analysisTranslates,
}) => {
  const analysisList = analysisPagedList?.items || [];

  return (
    <Wrapper>
      <PageHeader title="Анализы" />
      <AnalysisSearchForm />
      <WithLoader isLoading={isLoading}>
        <Table
          link={(item) => `/analysis/fill/${item.id}`}
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
              label: "ФИО пациента",
              size: "1.5fr",
              render: ({ patient: { name, surname, middleName } }): string =>
                `${name} ${surname} ${middleName || ""}`,
            },
            {
              label: "Статус",
              size: "0.6fr",
              render: (analysis) => (
                <AnalysisStatusBadge status={analysis.analysisStatus} />
              ),
            },
            {
              label: "Дата создания",
              size: "0.6fr",
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

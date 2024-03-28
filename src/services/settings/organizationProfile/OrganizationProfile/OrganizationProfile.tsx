import { FC, useState } from "react";
import { InfoWrapper, Wrapper } from "./OrganizationProfile.styled";
import { Props } from "./OrganizationProfile.types";
import { PageHeader } from "@/components/PageHeader";
import { ContextMenuButton } from "@/components/ContextMenuButton";
import { Pen, PlusCircle } from "react-bootstrap-icons";
import { WithLoader } from "@/components/WithLoader";
import { Skeleton } from "antd";
import { getAddressString } from "@/utils/getAddressString";
import { Segmented } from "@/components/Segmented";
import { CommonInfo } from "@/components/CommonInfo";

export const OrganizationProfile: FC<Props> = ({
  organization,
  isLoading,
  isAdmin,
}) => {
  const [segment, setSegment] = useState<"info" | "members">("info");

  return (
    <Wrapper>
      <PageHeader title={isLoading ? <Skeleton.Input /> : organization?.name}>
        {isAdmin && (
          <ContextMenuButton
            menuButtons={[
              {
                title: "Редактировать",
                icon: <Pen />,
              },
              {
                title: "Создать сотрудника",
                icon: <PlusCircle />,
              },
            ]}
            size="small"
          />
        )}
      </PageHeader>
      <WithLoader isLoading={isLoading}>
        {organization && (
          <>
            <Segmented
              value={segment}
              onChange={(segment) => setSegment(segment as "info" | "members")}
              options={[
                { label: "Информация", value: "info" },
                { label: "Сотрудники", value: "members" },
              ]}
            />

            {segment === "info" && (
              <InfoWrapper>
                <CommonInfo
                  items={[
                    {
                      key: "Название",
                      value: organization.name,
                    },
                    {
                      key: "Адрес",
                      value: getAddressString(organization.address),
                    },
                  ]}
                />
              </InfoWrapper>
            )}
          </>
        )}
      </WithLoader>
    </Wrapper>
  );
};

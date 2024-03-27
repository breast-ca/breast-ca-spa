import { FC } from "react";
import { Wrapper } from "./OrganizationProfile.styled";
import { Props } from "./OrganizationProfile.types";
import { PageHeader } from "@/components/PageHeader";
import { ContextMenuButton } from "@/components/ContextMenuButton";
import { Pen, PlusCircle } from "react-bootstrap-icons";
import { WithLoader } from "@/components/WithLoader";
import { Skeleton } from "antd";
import { getAddressString } from "@/utils/getAddressString";

export const OrganizationProfile: FC<Props> = ({ organization, isLoading }) => {
  return (
    <Wrapper>
      <PageHeader title={isLoading ? <Skeleton.Input /> : organization?.name}>
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
      </PageHeader>
      <WithLoader isLoading={isLoading}>
        {organization && <>{getAddressString(organization.address)}</>}
      </WithLoader>
    </Wrapper>
  );
};

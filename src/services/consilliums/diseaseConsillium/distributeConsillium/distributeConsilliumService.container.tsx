import { useUnit } from "effector-react";
import { distributeConsilliumService } from "./distributeConsilliumService.model";
import { Modal } from "@/components/Modal";
import { FormItem } from "@/components/FormItem";
import { Select } from "antd";
import { FC, useEffect, useState } from "react";
import { Wrapper } from "./distributeConsilliumService.styled";
import { usersListQuery } from "@/services/settings/organizationProfile/organizationProfileService.api";

const { inputs, outputs } = distributeConsilliumService;

export const DistributeConsilliumContainer: FC<{ id: number }> = () => {
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  const { isOpen, handleClose, usersList, getUsersList } = useUnit({
    isOpen: outputs.$isOpen,
    handleClose: inputs.handleClose,
    usersList: usersListQuery.$data,
    getUsersList: usersListQuery.start,
  });

  useEffect(() => {
    getUsersList();
  }, [getUsersList]);

  return (
    <>
      <Modal
        title="Назначить участников"
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <Wrapper>
          <FormItem label="Участники">
            <Select
              size="large"
              placeholder="Выберите"
              mode="multiple"
              value={selectedUsers}
              onChange={(value: number[]) => setSelectedUsers(value)}
            >
              {usersList?.map((user) => (
                <Select.Option key={user.id}>
                  {user.lastName} {user.firstName} {user.middleName}
                </Select.Option>
              ))}
            </Select>
          </FormItem>
          <FormItem label="Ответственный">
            <Select size="large" placeholder="Выберите"></Select>
          </FormItem>
        </Wrapper>
      </Modal>
    </>
  );
};

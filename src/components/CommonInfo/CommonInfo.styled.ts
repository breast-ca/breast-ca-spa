import { Skeleton } from "antd";
import styled, { css } from "styled-components";
import { Card } from "../Card";

const standart = css`
  &:last-child {
    padding-bottom: 0;
  }
`;

const card = css`
  padding-right: 16px;
`;

export const Wrapper = styled.div<{ card?: boolean }>`
  display: grid;
  grid-template-columns: 0.75fr 1fr;
  border-bottom: 1px solid #eeebe9;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  grid-gap: 15px;
  padding: 15px 0;

  &:last-child {
    border-bottom: none;
  }

  ${(props) => (props.card ? card : standart)}
`;

export const KeyWrapper = styled.div`
  color: rgba(39, 47, 90, 0.7);
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const ValueWrapper = styled.div`
  color: rgba(39, 47, 90, 0.9);
  font-weight: 500;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SkeletonLoader = styled(Skeleton.Input)`
  .ant-skeleton-input {
    width: 150px;
    border-radius: 4px;
    max-height: 16px;
  }
`;

export const CardWrapper = styled(Card)`
  padding: 0 0 0 16px;
`;

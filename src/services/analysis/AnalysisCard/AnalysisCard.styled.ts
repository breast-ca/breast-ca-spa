import { Card } from "@/components/Card";
import styled from "styled-components";

export const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 800px;
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: 18px;
  color: #00000098;
`;

export const CreatedDate = styled.div`
  color: #00000051;
  font-weight: 600;
  line-height: 20px;
  line-height: 0;
`;

export const CreatedDateTitle = styled.div`
  color: #00000051;
  font-weight: 500;
  font-size: 12px;
  text-align: right;
  line-height: 0;
  padding-bottom: 18px;
`;

export const OpenChevron = styled.div<{ isOpen: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00000007;
  color: #292929;
  transition: 0.2s;
  cursor: pointer;
  ${({ isOpen }) => isOpen && `transform: rotate(180deg);`}
`;

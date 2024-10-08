import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { SortButton } from "../shared/SortButton";

const stickyWrapperCss = css`
  max-height: 64vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div<{ floating: boolean; isSticky?: boolean }>`
  width: 100%;
  overflow-x: auto;
  ${({ isSticky }) => (isSticky ? stickyWrapperCss : "")}
`;

const stickyHeaderCss = css`
  position: sticky;
  top: 0px;
  z-index: 10;
`;

export const HeaderWrapper = styled.div<{ isSticky?: boolean }>`
  ${({ isSticky }) => (isSticky ? stickyHeaderCss : "")}
`;

export const Header = styled.div<{
  temp: string;
  css?: string;
}>`
  width: 100%;
  min-height: 50px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: ${({ temp }) => temp};
  font-weight: 400;
  font-size: 14px;
  align-items: center;

  background: #ffeeee;
  border-radius: 8px;

  ${({ css }) => css || ""}
`;

const RowStyle = css<{ temp: string; css?: string }>`
  width: 100%;
  height: 50px;
  display: grid;
  grid-gap: 16px;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  font-weight: 400;
  font-size: 16px;
  color: #272f5a;
`;

export const Row = styled.div<{ temp: string; css?: string }>`
  ${RowStyle}
  grid-template-columns: ${({ temp }) => temp};
  ${({ css }) => css || ""}
`;

export const RowLink = styled(Link)<{ temp: string; css?: string }>`
  ${RowStyle}
  grid-template-columns: ${({ temp }) => temp};
  ${({ css }) => css || ""}
  transition: 0.2s;

  &:hover {
    background-color: #ffffffff;
  }
`;

export const PaginationWrapper = styled.div`
  margin: 16px;
`;

export const TableElement = styled.div<{ css?: string }>`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-left: 16px;
  height: 100%;
  display: flex;
  align-items: center;
  ${({ css }) => css || ""}
`;

export const SortButtonSC = styled(SortButton)`
  margin-left: 4px;
`;

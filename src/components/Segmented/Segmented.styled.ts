import styled from "styled-components";
import { Segmented as SegmentedAntd } from "antd";

export const Segmented = styled(SegmentedAntd)`
  width: ${({ block }) => (block ? "100%" : "min-content !important")};
  padding: 4px !important;
  border-radius: 12px !important;
  background-color: #0000000a !important;

  .ant-segmented-group {
    .ant-segmented-item {
      .ant-segmented-item-label {
        line-height: 34px !important;
        padding: 0 24px !important;
        font-weight: 600;
      }
    }
  }
`;

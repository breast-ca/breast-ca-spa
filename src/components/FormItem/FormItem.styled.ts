import { Form } from "antd";
import styled from "styled-components";

export const FormItem = styled(Form.Item)`
  margin-bottom: 0;
  width: 100%;

  .ant-form-item-row {
    display: block;

    .ant-form-item-label {
      padding: 0 0 0px;

      label {
        font-size: 14px !important;
        color: #00000077;
        font-weight: 500;
      }
    }
  }
`;

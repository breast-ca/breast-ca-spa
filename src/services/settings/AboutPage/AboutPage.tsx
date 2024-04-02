import { FC } from "react";
import { Wrapper } from "./AboutPage.styled";
import { Props } from "./AboutPage.types";
import { PageHeader } from "@/components/PageHeader";

export const AboutPage: FC<Props> = () => {
  return (
    <Wrapper>
      <PageHeader title="О программе" />
      <div
        style={{
          lineHeight: "28px",
          marginTop: "8px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <span style={{ fontFamily: "monospace" }}>
            BreastCa [0.0.1] :{" "}
            <span style={{ color: "red", fontFamily: "monospace" }}>
              {" "}
              Alpha
            </span>
          </span>{" "}
        </div>
        <strong>ООО "А-Тим Тек" 2024</strong>
      </div>
    </Wrapper>
  );
};

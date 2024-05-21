import { FC } from "react";
import { Wrapper } from "./AboutPage.styled";
import { Props } from "./AboutPage.types";
import { PageHeader } from "@/components/PageHeader";
import { CommonInfo } from "@/components/CommonInfo";
import dayjs from "dayjs";
import { Button } from "@/components/Button";

export const AboutPage: FC<Props> = () => {
  return (
    <Wrapper>
      <PageHeader title="О программе" />
      <CommonInfo
        items={[
          {
            key: "Сайт",
            value: (
              <a href="http://breastca.ru.tilda.ws/" target="_blank">
                <Button size="small">Перейти на сайт</Button>
              </a>
            ),
          },
          {
            key: "Компания",
            value: `ООО "А-Тим Тек" ${dayjs().format("YYYY")}`,
          },
          {
            key: "Версия",
            value: (
              <div>
                <span style={{ fontFamily: "monospace" }}>
                  BreastCa [1.0.0-
                  <span style={{ color: "#0d00ff", fontFamily: "monospace" }}>
                    beta
                  </span>
                  ]
                </span>{" "}
              </div>
            ),
          },
          {
            key: "Разработано",
            value: `Facade Enterprise Solutions`,
          },
        ]}
      />
    </Wrapper>
  );
};

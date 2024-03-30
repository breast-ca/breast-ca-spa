import { BrowserRouter } from "react-router-dom";
import { Router } from "../Router";
import { ConfigProvider } from "antd";
import ruRu from "antd/es/locale/ru_RU";
import dayjs from "dayjs";
import ru from "dayjs/locale/ru";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekYear from "dayjs/plugin/weekYear";

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);

dayjs.locale(ru);

export const App = () => {
  return (
    <BrowserRouter>
      <ConfigProvider
        locale={ruRu}
        theme={{
          token: {
            colorPrimary: "#ff6b6b",
            borderRadius: 6,
            borderRadiusSM: 8,
          },
        }}
      >
        <Router />
      </ConfigProvider>
    </BrowserRouter>
  );
};

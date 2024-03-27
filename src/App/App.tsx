import { BrowserRouter } from "react-router-dom";
import { Router } from "../Router";
import { ConfigProvider } from "antd";
import ruRu from "antd/es/locale/ru_RU";
import dayjs from "dayjs";
import ru from "dayjs/locale/ru";

dayjs.locale(ru);

export const App = () => {
  return (
    <BrowserRouter>
      <ConfigProvider
        locale={ruRu}
        theme={{
          token: {
            // Seed Token
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

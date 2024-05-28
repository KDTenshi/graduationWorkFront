import { FC } from "react";
import st from "./Map.module.css";

const Map: FC = () => {
  return (
    <div className={st.Map}>
      <h2>Мы на карте</h2>
      <div className={st.Wrap}>
        <iframe src="https://yandex.ru/map-widget/v1/?ll=49.621697%2C58.564650&mode=search&oid=239009030720&ol=biz&z=16.65"></iframe>
      </div>
    </div>
  );
};

export default Map;

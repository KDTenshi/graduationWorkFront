import { FC } from "react";
import st from "../Footer.module.css";

const Info: FC = () => {
  return (
    <div className={st.Info}>
      <p>ООО &quot;АЛЬФА-ГРУПП&quot;</p>
      <p>610 035</p>
      <p>г. Киров, ул Потребкооперации, 17а</p>
      <p>Офис 202</p>
      <p>ОГРН: 1204300001982</p>
    </div>
  );
};

export default Info;

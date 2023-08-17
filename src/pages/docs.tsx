import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
const DocsPage = () => {
  const a = dayjs();
  console.log(a.utc(true).format());
  console.log(a.format());
  return (
    <div>
      <p>This is umi dos.</p>
      <div>需求一</div>
      <div>需求二</div>
      <div>需求三</div>
    </div>
  );
};

export default DocsPage;

import { HeadRcm } from "../../components/HeadRcm/HeadRcm";

export default function recommendation() {
  const block = {
    cltn: "Моя коллекция",
    info: "i",
  };

  return (
    <main>
      <HeadRcm>{block}</HeadRcm>
    </main>
  );
}

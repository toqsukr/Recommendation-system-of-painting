import { HeadRcm } from "../../components/HeadRcm/HeadRcm";

export default function recommendation() {
  const block = {
    value: ["Моя коллекция", "i"],
  };

  return (
    <main>
      <HeadRcm>{block}</HeadRcm>
    </main>
  );
}

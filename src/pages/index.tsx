import Headers from "components/Headers";
import { type NextPage } from "next";
import Link from "next/link";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <div className="w-screen flex justify-center mt-8">
        <Headers />
      </div>
    </>
  );
};

export default Home;

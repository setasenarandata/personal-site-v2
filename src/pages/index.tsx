import Experience from "components/Experience";
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

      <div className="md:px-24 px-12 py-12 md:py-24 lg:px-48">
        <p className="text-[#1A1A1A] text-3xl md:text-5xl lg:text-6xl font-semibold leading-relaxed">Setasena Randata is a Software Engineer living and working in Jakarta.</p>
        <p className="mt-12 text-[#1A1A1A] text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">Currently Android Developer at Bangkit by Google, GoTo & Traveloka. Still an undergraduate student of computer science at University of Indonesia.</p>
      </div>

      <div className="md:px-24 px-12 lg:px-48">
        <Experience />

      </div>


    </>
  );
};

export default Home;

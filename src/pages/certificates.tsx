import Certificates from "components/Certificates";
import Footer from "components/Footer";
import Headers from "components/Headers";
import { type NextPage } from "next";

const Google: NextPage = () => {
  return (
    <>
      <div className="w-screen flex justify-center mt-8">
        <Headers />
      </div>

      <div className="md:px-24 px-12 pt-12 md:pt-24 pb-12 lg:px-48">
        <p className="text-[#1A1A1A] text-3xl md:text-5xl lg:text-6xl font-semibold leading-relaxed">Credentials of Setasena Randata</p>
        <p className="text-[#1A1A1A] text-2xl md:text-4xl lg:text-5xl leading-relaxed italic">A Testament to Excellence.</p>
        <p className="mt-12 text-[#1A1A1A] text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">Exploring Setasena Randata's Diverse Range of Achievements and Certifications</p>
      </div>

      <div className="md:px-24 px-12 lg:px-48 pb-48">
        <Certificates />
      </div>

      <Footer />
    </>
  );
};

export default Google;

import Experience from "components/Experience";
import Footer from "components/Footer";
import Headers from "components/Headers";
import { type NextPage } from "next";
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineMail, AiOutlineFilePdf } from 'react-icons/ai';

const actions = [
  {
    id: 'action-1',
    title: 'Github',
    icon: <AiFillGithub size={24}/>,
    link: 'https://github.com/setasenarandata',
  },
  {
    id: 'action-2',
    title: 'LinkedIn',
    icon: <AiFillLinkedin size={24}/>,
    link: 'https://www.linkedin.com/in/setasenarr/',
  },
  {
    id: 'action-3',
    title: 'Instagram',
    icon: <AiOutlineInstagram size={24}/>,
    link: 'https://www.instagram.com/setasena93/',
  },
  {
    id: 'action-4',
    title: 'Email',
    icon: <AiOutlineMail size={24}/>,
    link: 'mailto:setasena93@gmail.com',
  },
  {
    id: 'action-5',
    title: 'Resume',
    icon: <AiOutlineFilePdf size={24} />,
    link: 'https://drive.google.com/file/d/14WU3t8CUC8r8ROpHWb16EyHcbSOmTZY0/view?usp=sharing',
  },

]

const Home: NextPage = () => {
  return (
    <>
      <div className="w-screen flex justify-center mt-8">
        <Headers />
      </div>

      <div className="md:px-24 px-12 pt-12 md:pt-24 pb-12 lg:px-48">
        <p className="text-[#1A1A1A] text-3xl md:text-5xl lg:text-6xl font-semibold leading-relaxed">Setasena Randata is a Software Engineer living and working in Jakarta.</p>
        <p className="mt-12 text-[#1A1A1A] text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">Currently Android Developer at <span className="underline"><a href="https://grow.google/intl/id_id/bangkit">Bangkit by Google, GoTo & Traveloka.</a></span> Still an undergraduate student of computer science at <span className="underline"><a href="https://ui.ac.id">University of Indonesia.</a></span></p>

        <div className="flex align-center mt-4 mb-8">
          {actions.map((item) => (
            <div className="w-12 hover:text-gray-600">
              <a href={item.link} key={item.id}>
                {item.icon}
              </a>
            </div>
          ))}

        </div>
      </div>

      <div className="md:px-24 px-12 lg:px-48 pb-48">
        <Experience />
      </div>

      <Footer />
    </>
  );
};

export default Home;

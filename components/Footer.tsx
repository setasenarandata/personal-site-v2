import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineMail, AiOutlineFilePdf } from "react-icons/ai"

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

export default function Footer() {
    return (
        <footer className="">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    {actions.map((item) => (
                        <a key={item.id} href={item.link} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">{item.title}</span>
                            {item.icon}
                        </a>
                    ))}
                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 text-gray-500">
                        &copy; 2023 Setasena Randata Ramadanie. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

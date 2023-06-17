import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { BuildingOffice2Icon, CubeIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { api } from '~/utils/api'
import exp from 'constants'
import Loading from './Loading'


enum ExperienceEnum {
    Work = "My Work",
    Project = "My Project",
    Organization = "My Organization",
}
const resources = [
    { name: 'Work', value: ExperienceEnum.Work, icon: BuildingOffice2Icon },
    { name: 'Project', value: ExperienceEnum.Project, icon: CubeIcon },
    { name: 'Organization', value: ExperienceEnum.Organization, icon: UserGroupIcon },
]

export default function Experience() {
    const [experience, setExperience] = useState<ExperienceEnum>(ExperienceEnum.Work)
    const { data, isLoading: loading } = api.experience.getAll.useQuery()
    const [dataExperience, setDataExperience] = useState(data)

    useEffect(() => {
        if (experience === ExperienceEnum.Work) {
            setDataExperience(data?.filter((item) => item.type === "WORK"))
        } else if (experience === ExperienceEnum.Project) {
            setDataExperience(data?.filter((item) => item.type === "PROJECT"))
        } else if (experience === ExperienceEnum.Organization) {
            setDataExperience(data?.filter((item) => item.type === "ORGANIZATION"))
        }
    }, [experience])

    useEffect(() => {
        console.log("loading trpc")
        setDataExperience(data?.filter((item) => item.type === "WORK"))
        console.log(dataExperience?.length)
    }, [loading])

    return (
        <>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#1A1A1A] px-3 py-2 text-sm font-semibold text-[#F6F6F6] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-zinc-800">
                        {experience}
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {resources.map((item) => (
                                <Menu.Item>
                                    <div onClick={() => setExperience(item.value)} key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                        <div className="mt-1 flex flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon className="h-4 w-4 text-gray-600 group-hover:text-slate-600" aria-hidden="true" />
                                        </div>
                                        <div className='mt-1 flex flex-none items-center justify-center'>
                                            <p className="font-semibold text-sm text-gray-900">
                                                {item.name}
                                            </p>
                                        </div>
                                    </div>
                                </Menu.Item>
                            ))}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>

            {loading ? <Loading /> :
                <>
                    <ul
                        role="list"
                        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                    >
                        {dataExperience?.map((data) => (
                            <li key={data.id}>
                                <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={data.thumbnail} alt="" />
                                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{data.title}</h3>
                                <p className="text-base leading-7 text-gray-600">{data.position}</p>
                                {/* <ul role="list" className="mt-6 flex gap-x-6">
                                    <li>
                                        <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Twitter</span>
                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">LinkedIn</span>
                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                 clipRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                </ul> */}
                            </li>
                        ))}
                    </ul>

                </>
            }

        </>
    )
}

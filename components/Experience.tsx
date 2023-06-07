import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { BuildingOffice2Icon, CubeIcon, UserGroupIcon } from '@heroicons/react/24/outline'


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

            <p className='text-black text-lg'>{experience}</p>
        </>
    )
}

import { Fragment, useState } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { BookmarkSquareIcon, BuildingOffice2Icon, CalendarDaysIcon, CubeIcon, LifebuoyIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

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
const recentPosts = [
    { id: 1, title: 'Boost your conversion rate', href: '#', date: 'Mar 5, 2023', datetime: '2023-03-05' },
    {
        id: 2,
        title: 'How to use search engine optimization to drive traffic to your site',
        href: '#',
        date: 'Feb 25, 2023',
        datetime: '2023-02-25',
    },
    { id: 3, title: 'Improve your customer experience', href: '#', date: 'Feb 21, 2023', datetime: '2023-02-21' },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}


export default function Experience() {
    const [experience, setExperience] = useState<ExperienceEnum>(ExperienceEnum.Work)
    return (
        <>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
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
                                            <p className="font-semibold text-gray-900">
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

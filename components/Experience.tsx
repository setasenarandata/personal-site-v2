import { Fragment, useEffect, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { BuildingOffice2Icon, CubeIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { api } from '~/utils/api'
import exp from 'constants'
import Loading from './Loading'
import Details from './Details'


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
    const [open, setOpen] = useState(true)

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
                            </li>
                        ))}
                    </ul>

                </>
            }

            {/* Modal */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg px-4 pb-4 pt-5 text-left transition-all sm:my-8 sm:w-full sm:p-6 bg-transparent">
                                    <Details />
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

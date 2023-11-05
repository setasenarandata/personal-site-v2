import { Fragment, useEffect, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { BuildingOffice2Icon, CubeIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { api } from '~/utils/api'
import Loading from './Loading'
import Details from './Details'

const tabs = [
    { name: 'Applied', href: '#', current: false },
    { name: 'Phone Screening', href: '#', current: false },
    { name: 'Interview', href: '#', current: true },
    { name: 'Offer', href: '#', current: false },
    { name: 'Hired', href: '#', current: false },
]

export enum ExperienceEnum {
    Work = "My Work",
    Project = "My Project",
    Organization = "My Organization",
}
const resources = [
    { name: 'Work', value: ExperienceEnum.Work, icon: BuildingOffice2Icon, current: false },
    { name: 'Organization', value: ExperienceEnum.Organization, icon: UserGroupIcon, current: false },
    { name: 'Project', value: ExperienceEnum.Project, icon: CubeIcon, current: false }
]

interface MyProps {
    type: ExperienceEnum
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Experience(props: MyProps) {
    const [experience, setExperience] = useState<ExperienceEnum>(props.type)
    const { data, isLoading: loading } = api.experience.getAll.useQuery()
    const [dataExperience, setDataExperience] = useState(data)
    const [open, setOpen] = useState(false)

    const [expId, setExpId] = useState("")

    const formatDate = (date: Date): string => {
        return date.toLocaleString('default', { month: 'short' });
    };

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
        setDataExperience(data?.filter((item) => item.type === "WORK"))
        console.log(dataExperience?.length)
    }, [loading])

    return (
        <>
            <div className="mt-4">
                <div className="block w-full">
                    <nav className="-mb-px flex sm:space-x-8 justify-around sm:justify-start">
                        {resources.map((tab) => (
                            <button
                                key={tab.name}
                                className={classNames(
                                    experience == tab.value
                                        ? 'border-indigo-500 text-indigo-600'
                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                    'whitespace-nowrap border-b-2 px-1 pb-2 text-sm font-medium flex'
                                )}
                                onClick={() => setExperience(tab.value)}
                                aria-current={tab.current ? 'page' : undefined}
                            >
                                <tab.icon className={classNames(
                                    experience == tab.value
                                        ? 'text-indigo-500'
                                        : 'text-gray-600 group-hover:text-slate-600',
                                    "h-4 w-4 mr-2 hidden sm:inline-flex"
                                    )} aria-hidden="true" /> {tab.name}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {loading ? <Loading /> :
                <>
                    <ul
                        role="list"
                        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                    >
                        {dataExperience?.map((data) => (
                            <div onClick={() => {
                                setOpen(true)
                                setExpId(data.id)
                            }}>
                                <li key={data.id}>
                                    <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={data.thumbnail} alt="" />
                                    {data.isCurrent ?
                                        <span className="mt-4 inline-flex items-center rounded-full bg-green-400/10 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-400/20">
                                            {formatDate(data.startAt)}, {data.startAt.getFullYear()} - Present
                                        </span>
                                        :

                                        <span className="mt-4 inline-flex items-center rounded-full bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-500 ring-1 ring-inset ring-gray-400/20">
                                            {formatDate(data.startAt)} - {formatDate(data.endAt)}, {data.endAt.getFullYear()}
                                        </span>
                                    }
                                    <h3 className="mt-2 text-lg font-semibold leading-8 tracking-tight text-gray-900">{data.title}</h3>
                                    <p className="text-base leading-7 text-gray-600">{data.position}</p>
                                </li>
                            </div>
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
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left transition-all sm:my-8 sm:w-full bg-transparent sm:mx-32 mx-4">
                                    <Details id={expId} />
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}



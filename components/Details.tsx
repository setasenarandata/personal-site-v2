import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { Experience } from '@prisma/client'
import { api } from '~/utils/api'
import Loading from './Loading'
import Image from 'next/image'

const benefits = [
    'Competitive salaries',
    'Flexible work hours',
    '30 days of paid vacation',
    'Annual team retreats',
    'Benefits for you and your family',
    'A great work environment',
]

interface MyProps {
    id: string
}

export default function Details(props: MyProps) {
    const { data, isLoading: loading } = api.experience.getOne.useQuery({ id: props.id })
    return (
        <>
            {loading ? <Loading /> :
                <>
                    <div className="flex bg-gray-900 bg-opacity-95 max-w-2xl mx-auto flex-col sm:rounded-3xl lg:mx-0 lg:max-w-none lg:flex-row xl:gap-x-20">
                        <div className="flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                            <Image width={480} height={360} src={data!!.thumbnail} alt={`${data?.title}.png`} className="flex-none rounded-2xl object-cover shadow-xl" aria-hidden="true" />
                            {/* <img
                                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                                src={data?.thumbnail}
                                alt=""
                            /> */}
                            <div className="w-full flex-auto">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{data?.title}</h2>
                                <p className="mt-6 text-lg leading-8 text-gray-300">
                                    {data?.description}
                                </p>
                                <ul
                                    role="list"
                                    className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
                                >
                                    {data?.stacks.map((item) => (
                                        <a href={item.link}>
                                            <li key={item.id} className="flex gap-x-3">
                                                <Image width={32} height={32} src={item.logo} alt={`${item.name}.png`} className=" flex-none" aria-hidden="true" />
                                                {item.name}
                                            </li>
                                        </a>
                                    ))}
                                </ul>
                                <div className="mt-10 flex">
                                    <a href="#" className="text-sm font-semibold leading-6 text-indigo-400">
                                        See our job postings <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                            style={{
                                clipPath:
                                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                            }}
                        />
                    </div>
                </>
            }
        </>

    )
}

const certificates = [
  {
    title: 'Intermediate Android',
    publisher: 'Google Developers',
    year: 'June, 2023 - June, 2026',
    imageUrl:
    'https://media.licdn.com/dms/image/C4D0BAQFxnZq00TYORA/company-logo_100_100/0/1651946370425?e=1697673600&v=beta&t=tKEsqos841JUDowEmkAUSXvistNMnYkY78fPsT083ro',
    href: 'https://www.dicoding.com/certificates/0LZ094NY3Z65',
    lastSeen: null,
  },
  {
    title: 'Android Jetpack Compose',
    publisher: 'Google Developers',
    year: 'May, 2023 - May, 2026',
    imageUrl:
    'https://media.licdn.com/dms/image/C4D0BAQFxnZq00TYORA/company-logo_100_100/0/1651946370425?e=1697673600&v=beta&t=tKEsqos841JUDowEmkAUSXvistNMnYkY78fPsT083ro',
    href: 'https://www.dicoding.com/certificates/QLZ9QV87EZ5D',
    lastSeen: null,
  },
  {
    title: 'UX Design & Research',
    publisher: 'Dicoding Indonesia',
    year: 'May, 2023 - May, 2026',
    imageUrl:
    'https://media.licdn.com/dms/image/C560BAQHOIi63tC8k8w/company-logo_100_100/0/1660182933061?e=1697673600&v=beta&t=1myZuqVwg0ezCP29_55KEBXc3ckc3yuAWP_ivNl51mY',
    href: 'https://www.dicoding.com/certificates/QLZ9Q7K49Z5D',
    lastSeen: null,
  },
  {
    title: 'SOLID Programming Principles',
    publisher: 'Dicoding Indonesia',
    year: 'May, 2023 - May, 2026',
    imageUrl:
    'https://media.licdn.com/dms/image/C560BAQHOIi63tC8k8w/company-logo_100_100/0/1660182933061?e=1697673600&v=beta&t=1myZuqVwg0ezCP29_55KEBXc3ckc3yuAWP_ivNl51mY',
    href: 'https://www.dicoding.com/certificates/RVZKOODE4PD5',
    lastSeen: null,
  },
  {
    title: 'Fundamental Android',
    publisher: 'Google Developers',
    year: 'Apr, 2023 - Apr, 2026',
    imageUrl:
    'https://media.licdn.com/dms/image/C4D0BAQFxnZq00TYORA/company-logo_100_100/0/1651946370425?e=1697673600&v=beta&t=tKEsqos841JUDowEmkAUSXvistNMnYkY78fPsT083ro',
    href: 'https://www.dicoding.com/certificates/MEPJV55GJP3V',
    lastSeen: null,
  },
  {
    title: 'Beginner Android',
    publisher: 'Google Developers',
    year: 'Mar, 2023 - Mar, 2026',
    imageUrl:
    'https://media.licdn.com/dms/image/C4D0BAQFxnZq00TYORA/company-logo_100_100/0/1651946370425?e=1697673600&v=beta&t=tKEsqos841JUDowEmkAUSXvistNMnYkY78fPsT083ro',
    href: 'https://www.dicoding.com/certificates/MEPJKDKO6X3V',
    lastSeen: null,
  },
  {
    title: 'Kotlin Basic Programming',
    publisher: 'Google Developers',
    year: 'Feb, 2023 - Feb, 2026',
    imageUrl:
    'https://media.licdn.com/dms/image/C4D0BAQFxnZq00TYORA/company-logo_100_100/0/1651946370425?e=1697673600&v=beta&t=tKEsqos841JUDowEmkAUSXvistNMnYkY78fPsT083ro',
    href: 'https://www.dicoding.com/certificates/81P28D32QPOY',
    lastSeen: null,
  },
  {
    title: 'Kotlin Basic Programming',
    publisher: 'Google Developers',
    year: 'Feb, 2023 - Feb, 2026',
    imageUrl:
    'https://media.licdn.com/dms/image/C4D0BAQFxnZq00TYORA/company-logo_100_100/0/1651946370425?e=1697673600&v=beta&t=tKEsqos841JUDowEmkAUSXvistNMnYkY78fPsT083ro',
    href: 'https://www.dicoding.com/certificates/81P28D32QPOY',
    lastSeen: null,
  },
  {
    title: 'Programming Logic 101',
    publisher: 'Dicoding Indonesia',
    year: 'Feb, 2023 - Feb, 2026',
    imageUrl:
    'https://media.licdn.com/dms/image/C560BAQHOIi63tC8k8w/company-logo_100_100/0/1660182933061?e=1697673600&v=beta&t=1myZuqVwg0ezCP29_55KEBXc3ckc3yuAWP_ivNl51mY',
    href: 'https://www.dicoding.com/certificates/1RXY6QM3MZVM',
    lastSeen: null,
  },
  {
    title: 'Python 101',
    publisher: 'University of Michigan',
    year: 'Oct, 2020',
    imageUrl:
    'https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_100_100/0/1608039227697?e=1697673600&v=beta&t=1dIpWX9CogcDz-k08HK8HjGwcjJeTroyd_TuPaf--_g',
    href: 'https://www.coursera.org/account/accomplishments/certificate/VQ7A9L9VWFMN',
    lastSeen: null,
  },
]

export default function Certificates() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {certificates.map((element) => (
        <li key={element.title} className="flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={element.imageUrl} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                <a href={element.href} className="hover:underline">
                  {element.title} ({element.publisher})
                </a>
              </p>
              <p className="mt-1 flex text-xs leading-5 text-gray-500">
                <a href={element.href} target='_blank' className="truncate hover:underline">
                  View certificate
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{element.year}</p>
              {element.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen <time dateTime={element.year}>{element.lastSeen}</time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Valid</p>
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

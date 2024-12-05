import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import RootPage from '@/app/layout';
import { ViewLog } from '@/app/components/log/viewLog';
import { ClickLog } from '@/app/components/log/ClickLog';
// user@nextmail.com 123456
export default function Page() {
  return (
    <RootPage>
      <ViewLog module="Home" target="dashboard">
        <main className="flex min-h-screen flex-col p-6">
          <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
            <Link href="/dashboard/invoices">
              <AcmeLogo />
            </Link>
          </div>
          <a
            href="https://www.allapp.com/app/myfitnesspal-19837"
            target="_self"
          >
            View &gt;
          </a>
          <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
            <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
              <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
              <p
                className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}
              >
                <strong>Welcome to Acme.</strong> This is the example for the{' '}
                <a href="https://nextjs.org/learn/" className="text-blue-500">
                  Next.js Learn Course
                </a>
                , brought to you by Vercel.
              </p>
              <ClickLog module="List" target="/dashboard">
                <Link
                  href="/login"
                  className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                >
                  <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
                </Link>
              </ClickLog>
            </div>
            <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
              {/* Add Hero Images Here */}
              <Image
                src="/hero-desktop.png"
                width={1000}
                height={760}
                className="hidden md:block"
                alt="Screenshots of the dashboard project showing desktop version"
              />
              <Image
                src="/hero-mobile.png"
                width={560}
                height={620}
                className="block md:hidden"
                alt="Screenshot of the dashboard project showing mobile version"
              />
            </div>
          </div>
        </main>
      </ViewLog>
    </RootPage>
  );
}

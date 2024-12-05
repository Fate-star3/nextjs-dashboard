import clsx from 'clsx'
import LayoutMain from '@/app/layout/LayoutMain'
import Link from 'next/link'
const ErrorPage = ({ statusCode }: { statusCode?: number | string }) => {
  return (
    <LayoutMain className="mt-16 flex flex-col items-center justify-center text-center sm:my-auto sm:pt-24 lg:pb-4">
      {/* 内部内容 */}
      <div className="mt-[7.5rem] flex flex-col items-start justify-center lg:mx-0">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="font-hn-medium text-#28 font-Pm text-[7.17rem] leading-[4.5rem] tracking-[2px] lg:mr-[3.17rem]">
            {statusCode === 404 || statusCode === 500 ? statusCode : 'Oops!'}
          </div>
          {/* 线 */}
          <div className="mr-[3.17rem] h-[2.55rem] w-[.01rem] border-0 border-solid border-[#979797] lg:h-[5.17rem] lg:border-l-[.08rem]"></div>
          <p className="w-[calc(100%-2rem)] text-center text-[2rem] leading-[2.75rem] lg:w-[55.67rem]">
            Sorry, the page you are looking for is not available. Please try
            again or contact support for assistance.
          </p>
        </div>
        <Link legacyBehavior href={'/'} passHref>
          <div
            className={clsx(
              'mx-auto mt-[6.5rem] flex h-[5.17rem] w-full bg-main lg:w-[24.17rem]',
              'cursor-pointer items-center justify-center rounded-[.33rem] text-[2rem] text-white'
            )}
          >
            BACK HOME
          </div>
        </Link>
      </div>
    </LayoutMain>
  )
}

export default ErrorPage

/* --- Global Modules --- */
import Link from 'next/link'

/* --- Local Modules --- */
import { APPLICATION_EMOJI, APPLICATION_NAME, APPLICATION_TAGLINE } from '@constants/config'
import { Spacer } from '@components'

/**
 * @name SiteFooter
 * @param {Object} props
 */
export const SiteFooter = (props) => {
  return (
    <footer
      className='bg-yellow-900 py-16 lg:px-10 z-10'
      style={{
        backgroundColor: '#d3ac63'
      }}
    >
      <div className='max-w-screen-xl m-auto text-gray-800 flex flex-wrap items-centers justify-left'>
        <div className='p-5 pr-10 text-black w-1/2 w-full  md:w-3/12'>
          <h3 className='font-semibold text-xl uppercases text-black text-shadow-md'>
            {/* {APPLICATION_EMOJI} */}
            {APPLICATION_NAME}
          </h3>
          <p className='font-normal text-xs opacity-60'>{APPLICATION_TAGLINE}</p>
        </div>
        <div className='p-5 w-1/2 w-full  md:w-3/12'>
          <div className='text-xs uppercase text-black font-bold mb-6'>Resources</div>
          <a
            target='_blank'
            href='https://pooltogether.com/'
            className='my-3 flex text-black hover:text-white text-sm font-medium duration-200'
          >
            HoneyPool
          </a>
          {/* <a
            target='_blank'
            href='https://app.pooltogether.com/'
            className='my-3 flex text-black hover:text-white text-sm font-medium duration-200'
          >
            Application
          </a> */}
          <a
            target='_blank'
            href='https://gov.pooltogether.com/'
            className='my-3 flex text-black hover:text-white text-sm font-medium duration-200'
          >
            Governance
          </a>
          {/* <Link href="/article/getting-started">
            <a className="my-3 flex text-black hover:text-white text-sm font-medium duration-200">
              Getting Started with Pods
            </a>
          </Link> */}
        </div>
        <div className='p-5 w-1/2 w-full md:w-3/12'>
          <div className='text-xs uppercase text-black font-bold mb-6'>Application</div>

          <Link href='/'>
            <a className='my-3 flex text-black hover:text-white text-sm font-medium duration-200'>
              Deposit
            </a>
          </Link>
          <Link href='/manage'>
            <a className='my-3 flex text-black hover:text-white text-sm font-medium duration-200'>
              Manage
            </a>
          </Link>
          <Link href='/prize-history'>
            <a className='my-3 flex text-black hover:text-white text-sm font-medium duration-200'>
              Prize History
            </a>
          </Link>
          <Link href='/admin'>
            <a className='my-3 flex text-black hover:text-white text-sm font-medium duration-200'>
              Administation
            </a>
          </Link>
        </div>
        <div className='p-5 w-1/2 md:w-3/12'>
          <div className='text-xs uppercase text-black font-bold mb-6'>Community</div>
          <a
            target='_blank'
            href='https://twitter.com/PoolTogether_'
            className='my-3 flex text-black hover:text-white text-sm font-medium duration-200'
          >
            <img className='inline-block mr-2' src='/social/twitter-black.png' width={22} />
            <span className='inline-block'>Twitter</span>
          </a>
          <a
            target='_blank'
            href='https://discord.gg/hxPhPDW'
            className='my-3 flex text-black hover:text-white text-sm font-medium duration-200'
          >
            <img className='inline-block mr-2' src='/social/discord-black.png' width={22} />
            <span className='inline-block'>Discord</span>
          </a>
          <a
            target='_blank'
            href='https://github.com/pooltogether'
            className='my-3 flex text-black hover:text-white text-sm font-medium duration-200'
          >
            <img className='inline-block mr-2' src='/social/github-black.png' width={22} />
            <span className='inline-block'>Github</span>
          </a>
          <a
            target='_blank'
            href='https://medium.com/pooltogether'
            className='my-3 flex text-black hover:text-white text-sm font-medium duration-200'
          >
            <img className='inline-block mr-2' src='/social/medium-black.png' width={22} />
            <span className='inline-block'>Medium</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
export default SiteFooter

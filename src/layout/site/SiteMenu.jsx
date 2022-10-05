import Link from 'next/link'

/**
 * @name SiteMenu
 */
export const SiteMenu = () => {
  return (
    <div className='flex gap-x-4 my-3 text-right'>
      <Link href='/'>
        <a className='text-sm text-yellow-600 hover:text-white duration-200 mr-2'>Deposit</a>
      </Link>
      <Link href={`/manage?tab=0`}>
        <a className='text-sm text-yellow-600 hover:text-white duration-200 mr-2'>Manage</a>
      </Link>
      <Link href='/prize-history'>
        <a className='text-sm text-yellow-600 hover:text-white duration-200'>Prize History</a>
      </Link>
    </div>
  )
}

export default SiteMenu

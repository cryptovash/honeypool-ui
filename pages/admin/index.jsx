import { FormPodClaimPodPool, FormPodBatchMultiple } from '@components/forms/pod'
import { Spacer } from '../../src/components'

/**
 * @name PageDeposit
 * @param {Object} props
 */
export const PageDeposit = (props) => {
  return (
    <div className='py-20'>
      <div className='text-center text-center mb-10'>
        <h2 className='text-4xl lg:text-6xl text-yellow-600 font-semibold text-shadow-md'>Admin</h2>
        <p className='text-1xl text-yellow-600'>Hive Administrator Actions</p>
      </div>

      <div className='max-w-screen-md mx-auto'>
        <div className=''>
          <h4 className='text-5xl text-white'>Hive Batch</h4>
          <FormPodBatchMultiple />
        </div>
        <Spacer className='my-10' />
        <div className=''>
          <h4 className='text-5xl text-white'>Claim Hive Pool</h4>
          <div className='text-white'>
            <FormPodClaimPodPool />
          </div>
        </div>
      </div>
    </div>
  )
}
export default PageDeposit

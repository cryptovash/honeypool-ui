/* --- Global Modules --- */
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

/* --- Local Modules --- */
import { Spacer } from '@src/components'
import { FormPodDepositToMultiple, FormPodWithdrawToMultiple } from '@components/forms/pod'

/**
 * @name PageDeposit
 * @param {Object} props
 */
export const PageDeposit = (props) => {
  return (
    <>
      <div className='max-w-screen-xl mx-auto py-20'>
        <div className='text-center mb-10'>
          <h2 className='font-bold text-4xl text-yellow-600'>Manage Honey</h2>
          <Spacer className='my-20' />
        </div>
        <div className='max-w-screen-sm mx-auto'>
          <ManageTabs />
        </div>
      </div>
      <style global jsx>{`
        div .react-tabs__tab {
          color: #000000;
          cursor: pointer;
          background: #fe9f00;
          border: 1px solid transparent;
          border-radius: 4px;
          padding: 8px 0;
          margin: 2px 10px;
          text-align: center;
        }

        div .react-tabs__tab--selected {
          color: #fe9f00;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid #fe9f00;
          border-radius: 4px;
        }
      `}</style>
    </>
  )
}

export default PageDeposit

const ManageTabs = (props) => {
  const router = useRouter()
  const { tab, token } = router.query
  const [tabIndex, setTabIndex] = useState(Number(tab))

  useEffect(() => {
    if (tab) {
      setTabIndex(Number(tab))
    } else {
      setTabIndex(0)
    }
  }, [tab])

  if (process.browser) {
    return (
      <>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className='grid grid-cols-2'>
            <Tab>
              <ManageTab>
                <div className=''>Deposit</div>
              </ManageTab>
            </Tab>
            <Tab>Withdraw</Tab>
            {/* <Tab>Claim</Tab> */}
          </TabList>
          <Spacer className='my-20' />
          <div className='text-left text-white'>
            <TabPanel>
              <FormPodDepositToMultiple defaultToken={token} />
            </TabPanel>
            <TabPanel>
              <FormPodWithdrawToMultiple defaultToken={token} />
            </TabPanel>
          </div>
        </Tabs>
      </>
    )
  }
  return null
}

const ManageTab = ({ children, ...props }) => {
  return <div>{children}</div>
}

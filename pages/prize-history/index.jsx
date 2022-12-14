/* --- Global Modules --- */
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

/* --- Local Modules --- */
import { Spacer } from '@src/components'
import { PrizeHistoryTable } from '@components'

/**
 * @name PageDeposit
 * @param {Object} props
 */
export const PageDeposit = (props) => {
  return (
    <div className='py-20'>
      <div className='text-center text-center mb-10'>
        <h2 className='font-semibold text-4xl lg:text-6xl text-yellow-600'>Prize history</h2>
        <p className='text-1xl text-white'>
          The logged history for all prizes won by pods. Check if your pod has won here.
        </p>
      </div>
      <div className='max-w-screen-xl mx-auto'>
        <ManageTabs />
      </div>
    </div>
  )
}

export default PageDeposit

const ManageTabs = (props) => {
  const router = useRouter()
  const { tab } = router.query
  const [tabIndex, setTabIndex] = useState(Number(tab))

  useEffect(() => {
    if (tab) {
      setTabIndex(Number(tab))
    }
    setTabIndex(0)
  }, [tab])

  if (process.browser) {
    return (
      <>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className='flex justify-center'>
            <Tab>DAI</Tab>
            <Tab>USDC</Tab>
          </TabList>
          <Spacer className='my-10' />
          <div className='text-left text-white'>
            <TabPanel>
              <TableHeader symbol='DAI' image='/tokens/token-dai.png' />
              <PrizeHistoryTable
                first={40}
                orderDirection='asc'
                underlyingCollateralSymbol='DAI'
                decimals={18}
                podAddress='0xaD104c86c0f9A05ed445F858CdE948fE7E0Bbac6'
                symbolColor=''
              />
            </TabPanel>
            <TabPanel>
              <TableHeader symbol='USDC' image='/tokens/token-usdc.png' />
              <PrizeHistoryTable
                first={40}
                orderDirection='desc'
                underlyingCollateralSymbol='USDC'
                decimals={6}
                podAddress='0x4C8A84387A2ad7a85113e913fb650Def886DCc04'
                symbolColor=''
              />
            </TabPanel>
          </div>
        </Tabs>
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
            width: 120px;
          }

          div .react-tabs__tab--selected {
            color: #fe9f00;
            background: rgba(0, 19, 19, 0.4);
            border: 1px solid #fe9f00;
            border-radius: 4px;
          }
        `}</style>
      </>
    )
  }
  return null
}

const TableHeader = ({ symbol, image }) => {
  return (
    <div
      className='flex flex-col lg:flex-row bg-white bg-opacity-10 justify-center items-center text-center py-7 rounded-t-xl'
      style={{ backgroundColor: '#ffa2002f' }}
    >
      <img src={image} width={48} /> <Spacer className='mx-2' />
      <h5 className='font-bold text-2xl lg:text-4xl'>{symbol} pool</h5>
    </div>
  )
}

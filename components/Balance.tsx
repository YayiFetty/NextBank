"use client"

import AmountCounter from './AmountCounter'
import DoughnutChart from './DoughnutChart'

const Balance = ( {accounts = [], totalBanks, totalCurrentBalance}:TotalBalanceBoxProps) => {
  return (
    <section className=' total-balance'>
        <div>
            <DoughnutChart accounts={accounts}/>
        </div>
        <div className='flex w-full flex-col gap-6'>
            <div className='flex w-full justify-between'>
                
                <p className='total-balance-label'>Total Banks: <span> {totalBanks}</span></p>
                
            
                 <button className=' text-sm font-bold text-bankGradient'> + Add Banks</button>
            
            </div>

              <div className='flex flex-col gap-2'>
                <p className='total-balance-label'>Total Current Balance</p>
                <div className='total-balance-amount gap-2'>
                   <AmountCounter amount={totalCurrentBalance}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Balance
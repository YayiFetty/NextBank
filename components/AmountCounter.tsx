import React from 'react'
import CountUp from 'react-countup'

const AmountCounter = ({amount}:{amount:number}) => {
  return (
    <div>
        <CountUp
          start={0}
          end={amount}
          duration={2.75}
          separator=","
          decimals={2}
          decimal="."
          prefix="$"
          suffix=" USD"/>
    </div>
  )
}

export default AmountCounter
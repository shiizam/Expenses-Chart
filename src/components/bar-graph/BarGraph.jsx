import { useState } from 'react'

import './bar-graph.css'

const BarGraph = ({id, title, amount, today}) => {
  const daysInWeek = [{'1': 'mon'}, {'2': 'tue'}, {'3': 'wed'}, {4: 'thu'}, {'5': 'fri'}, {'6': 'sat'}, {'7': 'sun'}]
  const [hoverAmount, setHoverAmount] = useState(false) 

  const barStyle = {
    background: 'hsl(10, 79%, 65%)', // Orange Color
    'borderRadius': '3px',
    height: `${amount/6}rem`}

    const hoverBarStyle = {
      background: 'hsl(10 100% 76% / 1)', // Light Orange Color
      'borderRadius': '3px',
      height: `${amount/6}rem`
    } 

    const currentDayStyle = {
      background: 'hsl(186, 34%, 60%)', // Blue Color
      'borderRadius': '3px',
      height: `${amount/6}rem`
    }

    const hoverCurrentDayStyle = {
      background: 'hsl(187,49%,80%)', // Blue Color
      'borderRadius': '3px',
      height: `${amount/6}rem`
    }

    const handleStyle = () => {
      if (today === title && hoverAmount) {
        return hoverCurrentDayStyle
      } else if (today === title) {
        return currentDayStyle
      } else if (hoverAmount) {
        return hoverBarStyle
      } else{
        return barStyle
      }
    }
    

  return (
    <div className='align' onMouseEnter={() => setHoverAmount(true)} onMouseLeave={() => setHoverAmount(false)}>
      {hoverAmount && <span className="hover-amount">${amount}</span>}
      
      <div className='bar' style={handleStyle()}>
        <span id={id}></span>
      </div>

      <div className="days">
        <span className="bar-title">{title}</span>
      </div>
    </div>
  )
}

export default BarGraph
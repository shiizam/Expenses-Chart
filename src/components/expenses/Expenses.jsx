import './expenses.css'
import data from '../../data.json'
import BarGraph from '../bar-graph/BarGraph'

export const Expenses = () => {

  // Get current day of the week to change bar graph styling
  const currentDate = new Date() + '';
  const today = currentDate.split(' ')[0].toLowerCase();
  

  return (
    <section className='container'>
      <h1 id='graph-title'>Spending - Last 7 days</h1>
      <div className="graph">
        
        <div className='graph-container'>
        {
          data.map((item, index) => {
            return (
              <BarGraph
                key={index}
                id={index}
                title={item.day}
                amount={item.amount}
                today={today}
              />
            )
          })
        }
        </div>
      </div>
      <div className="footer">
        <div className='month-balance'>
          <p id='month-total'>Total this Month</p>
          <h2>$478.33</h2>
        </div>
        <div className="difference-month">
          <h3>+2.4%</h3>
          <p>from last month</p>
        </div>
      </div>

    </section>
  )
}

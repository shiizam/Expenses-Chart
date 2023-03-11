

import './balance.css'
import logo from '../../assets/logo.svg'

const Balance = () => {
  return (

    <section className="balance-card">
      <div className="bal-header">
        <p id='title'>My balance</p>
        <h1 id="current-balance">$921.48</h1>
      </div>
      <img src={logo} alt="logo" />
    </section>

  )
}

export default Balance
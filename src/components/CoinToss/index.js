import {Component} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImg: HEADS_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickToChangeToss = () => {
    const {headsCount, tailsCount} = this.state

    const toss = Math.floor(Math.random() * 2)

    let tossImg = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImg = HEADS_IMG_URL
      latestHeadsCount += 1
    } else {
      tossImg = TAILS_IMG_URL
      latestTailsCount += 1
    }

    this.setState({
      tossResultImg: tossImg,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  getTotalToss = () => {
    const {headsCount, tailsCount} = this.state

    const totalCount = headsCount + tailsCount

    return totalCount
  }

  render() {
    const {tossResultImg, headsCount, tailsCount} = this.state
    const totalCount = this.getTotalToss()

    return (
      <div className="coin-app-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={tossResultImg} alt="toss result" className="toss-img" />
          <button
            type="button"
            className="toss-button"
            onClick={this.onClickToChangeToss}
          >
            Toss Coin
          </button>
          <div className="counting-toss-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

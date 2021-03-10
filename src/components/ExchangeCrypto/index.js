import React, { Component } from 'react'
import axios from 'axios'
import numberFormat from '../../utilities/numberFormat'
import './style.css'

class ExchangeCrypto extends Component {
    constructor(props) {
        super(props)

        this.state = {
            crypto: []
        }
    }

    componentDidMount() {
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD,INR')
        .then(res => {
            const crypto = res.data
            console.log('crypto ', crypto)
            this.setState({ crypto: crypto })
        })
    }

    render() {
        return (
            <div className='crypto-app'>
                {
                    Object.keys(this.state.crypto).map((key) => (
                        <div key={key} id='crypto-container'>
                            <span className='left'>{key}</span>
                            <span className='right'>{numberFormat(this.state.crypto[key].USD, 'USD')}</span>
                            <span className='right'>In INR {numberFormat(this.state.crypto[key].INR)}</span>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default ExchangeCrypto

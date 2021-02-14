import React from 'react';
import MarketItem from '../MarketItem';

class Market extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    render() {
        return (
            <div>
                <h1>Lab 4 - Add Market Item</h1>
                <button onClick={() => {
                    const items = this.state.items;
                    items.push(MarketItem);
                    this.setState({ items: items });
                }
            }>Add Market Item</button>
                <div>{
                    this.state.items.map(function (count, key) {
                        return <MarketItem count={key}>{count}</MarketItem>
                    })
                }</div>
            </div>
        )
    }
}

export default Market;
import React from 'react'
import logo from '../../logo.jpg'

export default function Header(props) {
    return (
        <nav className={'fl w-100 bg-navy near-white h3 pa3 bb'}>
            <div className="flex f4 baskerville center-m">
                <div className="mr2">Home</div>
                <div className="mr2">Battle</div>
                <div className="mr2">Top</div>
            </div>
        </nav>
    )
}

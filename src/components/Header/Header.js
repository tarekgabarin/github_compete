import React from 'react'
import logo from '../../logo.jpg'
import {NavLink} from "react-router-dom";

export default function Header(props) {

    return (
        <nav className={'fl w-100 bg-navy near-white h3 pa3 bb'}>
            <div className="flex f4 baskerville center-m">
                <NavLink style={{ textDecoration: 'none' }} exact  to={'/'} activeClassName={'fw6'} className="mr2 near-white">Popular</NavLink>
                <NavLink style={{ textDecoration: 'none' }} exact  to={'/battle/select-player'} activeClassName={'fw6'}  className="mr2 near-white">Battle</NavLink>
            </div>
        </nav>
    )
}

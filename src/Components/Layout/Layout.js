import React from 'react'
import TopNav from './TopNav'

export default function Layout(props) {

    return (
        <div>
            <TopNav/>
            {props.children}
        </div>
    )
}

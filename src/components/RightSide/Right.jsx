import React from 'react'
import Styles from './_right.module.css'
import Nav from './navbar/Nav';
import Rbody from './right-body/Rbody';
import Foot from './right-body/footer/Foot';

const Right = () => {
    return <aside className={Styles.Right_side_aside}>
        <Nav />
        <Rbody />
        <Foot />
    </aside>;
}

export default Right

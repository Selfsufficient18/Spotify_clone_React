import React from 'react'
import Styles from './_main.module.css'
import Left from './../LeftSide/Left';
import Right from './../RightSide/Right';
import Grade from './../gradientpart/Grade';

const Main = () => {
  return (
    <section class={Styles.Main_container}>
      <Left />
      <Right />
      <Grade />
    </section>
  )
}

export default Main

import React, { useContext, useState } from 'react'
import Styles from './__nav.module.css'
import { GlobalContext } from '../../../GlobalContext/GlobalContext';

const Nav = () => {
  let { state, handleMode } = useContext(GlobalContext);

  if (state) {
    document.body.setAttribute("mode", "lite");
  } else {
    document.body.setAttribute("mode", "dark");
  }

  return (
    <section className={Styles.Right_nav_block}>
      <aside className={Styles.Right_nav_left}>
        <article>
          <i class="fa-solid fa-angle-left"></i>
        </article>
        <article>
          <i class="fa-solid fa-angle-right"></i>
        </article>
      </aside>
      {/* <aside className='mode' onClick={handleMode}>
        Mode
      </aside> */}
      <aside className={Styles.Right_nav_right}>
        <article>Sign up</article>
        <article>Log in</article>
      </aside>
    </section>
  );
}

export default Nav

import React from 'react'
import Styles from './__left.module.css'

const Left = () => {
  return (
    <aside className={Styles.Left_side_aside}>
      <article className={Styles.Left_top}>
        <p className={Styles.Left_Home}>
          <i class="fa-solid fa-house"></i> <p className='Homeei'>Home</p>
        </p>
        <p className={Styles.Left_Search}>
          <i class="fa-solid fa-magnifying-glass"></i> <p>Search</p>
        </p>
      </article>
      <article className={Styles.Left_bottom}>
        <p className={Styles.Left_bottom_top}>
          <p>
            <i class="fa-solid fa-bars"></i>
          </p>
          <p>Your library</p>
          <p>
            <i class="fa-solid fa-plus"></i>
          </p>
        </p>

        <aside className={Styles.Left_bottom_first}>
          <article className={Styles.Left_bottom_inner}>
            <aside className={Styles.Left_inner_content1}>
              <p>Create your first playlist</p>
              <p>It's easy, we'll help you</p>
              <button>Create playlist</button>
            </aside>
            <aside className={Styles.Left_inner_content2}>
              <p>Let's find some podcasts to follow</p>
              <p>We'll keep you updated on new episodes</p>
              <button>Browse podcasts</button>
            </aside>
          </article>
        </aside>

        <aside className={Styles.Left_bottom_second}>
          <p className={Styles.Left_Legal}>
            <a href="#">Legal</a>
            <a href="#">Privacy Center</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>
            <a href="#">About Ads</a>
            <a href="#">Accessibility</a>
            <a href="#">Cookies</a>
          </p>
          <button>
            <i class="fa-solid fa-globe"></i> English
          </button>
        </aside>
      </article>
    </aside>
  );
}

export default Left

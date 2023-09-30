import React, { Component } from 'react'
import Styles from './footer.module.css'

export default class Foot extends Component {
  render() {
    return (
      <>
        <footer>
          <article className={Styles.foot_left}>
            <aside className={Styles.foot_inside1}>
              <h2>Company</h2>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">For the record</a>
                </li>
              </ul>
            </aside>
            <aside className={Styles.foot_inside2}>
              <h2>Communities</h2>
              <ul>
                <li>
                  <a href="#">For Artists</a>
                </li>
                <li>
                  <a href="#">Developers</a>
                </li>
                <li>
                  <a href="#">Advertising</a>
                </li>
                <li>
                  <a href="#">Investors</a>
                </li>
                <li>
                  <a href="#">Vendors</a>
                </li>
                <li>
                  <a href="#">Spotify for Work</a>
                </li>
              </ul>
            </aside>
            <aside className={Styles.foot_inside3}>
              <h2>Useful links</h2>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Free Mobile App</a>
              </li>
            </aside>
          </article>
          <article className={Styles.foot_right}>
            <button>
              <i class="fa-brands fa-instagram"></i>
            </button>
            <button>
              <i class="fa-brands fa-twitter"></i>
            </button>
            <button>
              <i class="fa-brands fa-facebook"></i>
            </button>
          </article>
            </footer>
            <div className={Styles.kelage}>
                <button className={Styles.c}>
                    c
                </button>
                <p>2023 spotify AB</p>
            </div>
      </>
    );
  }
}

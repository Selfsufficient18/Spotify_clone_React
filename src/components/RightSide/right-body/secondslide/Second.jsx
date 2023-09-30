import React, { Component } from 'react'
import JSON from './data2.json'
import Styles from './second.module.css'

export default class Second extends Component {
  state = { JSON };
  render() {
    return (
      <>
        <main className={Styles.Right_main_block}>
          <aside className={Styles.Right_show_all}>
            <a href="#">Spotify Playlists</a>
            <a href="#">Show all</a>
          </aside>
          <section className={Styles.Right_cards_block}>
            {this.state.JSON.map(data => {
              let { description, image, title } = data;
              return (
                <article className={Styles.Right_cards}>
                  <aside className={Styles.adru_mele}>
                    <button>
                      <i class="fa-solid fa-play"></i>
                    </button>
                  </aside>
                  <main className={Styles.other}>
                    <aside className={Styles.card_inner1}>
                      <img src={image} alt="" />
                    </aside>
                    <aside className={Styles.card_inner2}>
                      <p>{title}</p>
                    </aside>
                    <aside className={Styles.card_inner3}>
                      <p>{description}</p>
                    </aside>
                  </main>
                </article>
              );
            })}
          </section>
        </main>
      </>
    );
  }
}


import React, { Component } from 'react'
import Styles from './grade.module.css'

export default class Grade extends Component {
  render() {
    return (
      <section className={Styles.grade_part}>
         <article className={Styles.grade1}>
                <aside>PREVIEW OF SPOTIFY</aside>
                <aside>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</aside>
         </article>
         <article className={Styles.grade2}>
                <button>
                    Sign up free
                </button>
         </article>
      </section>
    )
  }
}

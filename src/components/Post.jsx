import React from 'react'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/102186472?v=4" alt="foto-perfil" />
          <div className={styles.authorinfo}>
            <strong>Cristiano Pereira da Silva</strong>
            <span>FullStack Dev</span>
          </div>
        </div>



        <time title='11 de Outubro de 2022' dateTime='2022-10-11 08:13:38' >Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala Galera</p>
        <p>Acabei de subir um projeto bem legal, um projeto que aprendi durante o curso de Ignite na Rocketseat</p>
        <p> <a href="">jane.design/doctorcare</a> </p>{" "}
        <p>
          <a href="">#novoprojeto</a>{" "}
          <a href="">#javascript </a>{" "}
          <a href="">#react</a>
        </p>
      </div>
    </article>
  )
}

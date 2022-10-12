import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/102186472?v=4',
      name: "Cristiano Pereira da Silva",
      role: "Fullstack DEV"
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera' },
      { type: 'paragraph', content: "Acabei de subir um projeto bem legal, um projeto que aprendi durante o curso de Ignite na Rocketseat" },
      { type: 'link', content: "jane.design / doctorcare" },
    ],
    publishedAt: new Date("2022-10-12 09:36:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      name: "Diego Fernandes",
      role: "Aprendiz do Cristiano"
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera' },
      { type: 'paragraph', content: "Acabei de subir um projeto bem legal, um projeto que aprendi durante o curso de Ignite na Rocketseat" },
      { type: 'link', content: "jane.design / doctorcare" },
    ],
    publishedAt: new Date("2022-10-13 12:25:00"),
  },
]

// iteração é repetir algo, estrutura de repetição

export default function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
              )
          })}
        </main>
      </div>
    </div>
  )
}

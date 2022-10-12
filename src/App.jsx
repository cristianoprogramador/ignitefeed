import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"


import styles from './App.module.css'

import './global.css'

export default function App() {
  return (
    <div>
    <Header />
      
      <div className={styles.wrapper}>
          <Sidebar />
        <main>
          <Post
          author="Cristiano"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, omnis!"
          />
          <Post
          author="Fernando"
          content="Lorem ipsum dolor, sis!"
          />
        </main>
      </div>
    </div>
  )
}

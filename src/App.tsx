import { useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import styles from './App.module.css'

import './global.css'
import TaskList from './components/TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className={styles.content}>
        <Search />
        <TaskList />
      </div>
    </>
  )
}

export default App

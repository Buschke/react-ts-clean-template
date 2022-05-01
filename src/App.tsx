import { FC } from 'react'
import './App.scss'

const App: FC<{ title: string }> = (props) => {
  return (
    <div className='App p-5 m-5 border-double hover:border-dotted'>App {props.title}</div>
  )
}

export default App
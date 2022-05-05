import { FC } from 'react'
import './App.scss'
import FirstComponent from './components/FirstComponent'

const App: FC<{ title: string }> = ({title}) => {
  return (
    <div className='App p-5 m-5 border-double hover:border-dotted'>
      App {title}
      <FirstComponent title={title}/>  
    </div>
  )
}

export default App
import { FC, useState } from 'react'
import './App.scss'
import { FirstComponent } from './components/FirstComponent'

const App: FC<{ title: string }> = ({title}) => {
  const [ testMe, setTestMe ] = useState<string>('Test')

  return (
    <div className='App p-5 m-5 border-double hover:border-dotted'>
      App d {title}
      <FirstComponent title={title}/>  
      <button type='button' data-testid='button' onClick={() => setTestMe(testMe => 'Tested')}>{testMe}</button>
    </div>
  )
}

export default App
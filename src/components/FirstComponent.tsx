import { FC } from 'react'
//import './FirstComponent.scss'

interface FirstComponentProps {
  title: string
}

const FirstComponent: FC<FirstComponentProps> = ({title}) => {
  return (
    <div className='FirstComponent'>FirstComponent {title}</div>
  )
}

export default FirstComponent
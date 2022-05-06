import { FC } from 'react'
//import './FirstComponent.scss'

interface FirstComponentProps {
  title: string
}

export const FirstComponent: FC<FirstComponentProps> = ({title}) => {
  return (
    <div className='FirstComponent'>FirstComponent {title}</div>
  )
}
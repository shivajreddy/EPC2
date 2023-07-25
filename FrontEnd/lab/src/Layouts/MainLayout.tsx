import { FC, ReactNode } from 'react'
import ThemeWrapper from '../theme/ThemeWrapper'
import SideBar from './SideBar'

interface Props {
  children: ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {

  return (
    <ThemeWrapper>
      <SideBar />
      {children}
    </ThemeWrapper>
  )
}

export default MainLayout
import { GoHome } from 'react-icons/go'
import { FaRegCircle } from 'react-icons/fa'
import { TbBulb, TbStatusChange } from 'react-icons/tb'
import { RiTodoLine } from 'react-icons/ri'
import { ReactNode } from 'react';


interface ISideBarLink {
  name: string,
  link: string,
  icon: ReactNode,
  isExpanded: boolean,
}
type ISideBarLinks = ISideBarLink[];

const SideBarItems: ISideBarLinks = [
  {
    name: "Home",
    link: "link2",
    icon: <GoHome size={"1.5em"} />,
    isExpanded: true
  },
  {
    name: "EPC 2.0",
    link: "link1",
    icon: <FaRegCircle size={"22px"} />,
    isExpanded: true
  },
  {
    name: "PipeLine",
    link: "link2",
    icon: <TbStatusChange size={"1.5em"} />,
    isExpanded: true
  },
  {
    name: "Tasks",
    link: "link2",
    icon: <RiTodoLine size={"1.5em"} />,
    isExpanded: true
  },
  {
    name: "Updates",
    link: "link2",
    icon: <TbBulb size={"1.6em"} />,
    isExpanded: true
  },
]

export default SideBarItems
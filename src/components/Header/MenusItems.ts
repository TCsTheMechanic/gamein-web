import { AiOutlineTeam } from 'react-icons/ai'
import { BiTrophy } from 'react-icons/bi'
import { VscCalendar } from 'react-icons/vsc'
import { CgScreen } from 'react-icons/cg'
import { FcAbout } from 'react-icons/fc'

export const MenusItems = [
  {
    id: 0,
    icon: AiOutlineTeam,
    label: 'TEAMS',
    src: '/teams'
  },
  {
    id: 1,
    icon: BiTrophy,
    label: 'CHAMPIONCHIPS',
    src: '/championchips'
  },
  {
    id: 2,
    icon: VscCalendar,
    label: 'CALENDAR',
    src: '/calendar'
  },
  {
    id: 3,
    icon: CgScreen,
    label: 'WATCH',
    src: '/watch'
  },
  {
    id: 4,
    icon: FcAbout,
    label: 'ABOUT US',
    src: '/about'
  }
]
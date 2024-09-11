import { useAppSelector } from '@/store/hooks'
import { Button } from './ui/button'
import { Bell} from 'lucide-react'
import { selectunreadnotificationsCount } from '@/store/notificatonsSlice'

const Notificationsbutton = () => {
  const count = useAppSelector(
    selectunreadnotificationsCount
  )
  return (
    <Button variant="outline"className='outline' size="icon">
    <Bell className="h-4 w-4" />
    <span className='absolute top-0 right-0'>{count}</span>
  </Button>
  )
}

export default Notificationsbutton
import { Circle } from "lucide-react"
import { Button } from "./ui/button"
import { notificationsItem } from "@/types"
import { useSelector } from "react-redux"
import { markasread, selectNotifications } from "@/store/notificatonsSlice"
import { useAppDispatch } from "@/store/hooks"

const Notifications = () => {

  const Notifications:notificationsItem[]= useSelector(selectNotifications);
  const dispatch = useAppDispatch();
  return (
    <ul className='flex flex-col gap-4 px-10 my-10'>
      {
        Notifications.map((Notificationsitem)=>{
          return <li key={Notificationsitem.id} className="flex border rounded-md border-white px-3 py-2 flex justify-between items-center">
            <div className="flex flex-col">
              <h2>{Notificationsitem.text}</h2>
            </div>
           
            <Button variant="ghost" onClick={()=>{
              dispatch(markasread(Notificationsitem.id))
            }} className={Notificationsitem.read ? 'visible':'invisible'} size="icon"> 
            <Circle/>
            </Button>
         </li>
        })
      }
        </ul>
)
}

export default Notifications
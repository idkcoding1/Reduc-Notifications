import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { notificationsItem } from '@/types'

// Define a type for the slice state
interface NotificationsState {
  notificationsList: notificationsItem[]
}

// Define the initial state using that type
const initialState: NotificationsState = {
  notificationsList: [{
    text:'Notification 1',
    id:'abc123',
    read:false
    },
    {
     text:'Notification 2',
     id:'abc32',
     read:false
     },
   {
       text:'Notification 3',
       id:'ab223',
       read:false
   },
   {
     text:'Notification 4',    
     id:'abc11223',
     read:true
 },{
       text:'Notification 5',
       id:'abc12123',
       read:true
     }],
}

export const notificationsSlice = createSlice({
  name: 'notifications',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
    markasread: (state, action: PayloadAction<string>) =>{
      state.notificationsList.forEach((item)=>{
        const targetid = action.payload;
        if(item.id === targetid){
            item.read = true;
        }
      });
    },
  },
});

export const { markasread} = notificationsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectNotifications = (state: RootState) => state.notifications.notificationsList   

//Fetching notifications from export function above tis code(configure store )  

export const selectunreadnotificationsCount = (state : RootState) =>{
  const unreaditems =  state.notifications.notificationsList.filter((item)=>{
    return item.read;
  });
  return unreaditems.length;

}
export default notificationsSlice.reducer
"use client"

import React ,{useState} from 'react'
import { IoSearch } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import { DatePickerWithRange } from '../../shadcn/DatePicker';
import {Button} from '@/redux/feature/Api.Slice'
import { Selector } from '../../shadcn/Selector';
import { useSelector,useDispatch} from "react-redux"
import { usePathname } from 'next/navigation';
import { toast } from "sonner"
export default function LandingPageForm(props:any) {
    const [loading,setloading] = useState(false)
    const dispatch = useDispatch()
    const router = useRouter()
    const currentPath = usePathname() 
    const {destination,dateTo,dateFrom,clicked} = useSelector((state:any)=>state.formData)
    // console.log(destination,dateTo,dateFrom,clicked)
    const submitHandler = (e:any)=>{  
        e.preventDefault()
        if(!destination  || !dateTo || !dateFrom){
          toast("Both Fields are required")
          
            return
        }
        if (currentPath === '/trip-planner') {
          setloading(true);
          setTimeout(() => {
              dispatch(Button(true));
          }, 2000);
          
      } else {
          dispatch(Button(true));
          setloading(true);
          if (currentPath === '/') {
              router.push('/trip-planner');
          }
      }
    }
    

  return (
    <div className={`w-full ${props.position ? props.position : "absolute" } -bottom-40  sm:-bottom-16 lg:-bottom-10 flex items-center justify-center `}>
    <div className=' bg-white  shadow-lg  overflow-x-hidden rounded-lg  py-5 w-11/12 lg:w-7/12 '>
      <form onSubmit={submitHandler}  className='flex sm:flex-row items-baseline flex-col justify-center gap-y-4  flex-wrap '>

      <div className="relative ">
        <Selector/>

</div>
  
      <div className="relative ">

<DatePickerWithRange />
</div>

<div className="relative ">
<button type='submit' className="flex flex-row ml-4
gap-x-1
sm:ml-0 capitalize items-center bg-[#43B97F] p-2 text-white rounded-lg  justify-center">
<IoSearch  size={23}/>
 
{loading ? "Planning...."
:'Plan your trip'
}
</button>

        </div>

</form>

    </div>
</div>
  )
}

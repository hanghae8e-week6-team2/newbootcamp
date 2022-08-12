//detail 페이지 탭기능 component
import { useEffect } from "react";
import { useState } from "react";
import "../../App.css"
import ReplyContent from './replyContent'
import ReviewContent from './reviewContent';

function TabContent({탭}) {
        let [fade,setFade] = useState('')
        useEffect(()=>{     
            setTimeout(()=>{setFade('end')},100)      
            
            return()=>{
                //useEffect 가 실행되기전에 실행하는구간
                // 탭 state가 변할때 end 땠다가 부착
                setFade('')
            }
        },[탭])
        //탭 state가 변경될때마다  useEffect안의 코드 실행해줌
    return(

        <div  className={`start ${fade}`}>
      {[<ReviewContent/>,
        <ReplyContent/>][탭]}  
    </div>
    ) 
}

export default TabContent;
import {useMyAPI} from "../hooks/useMyApi";
import React, {useState} from "react";
import {Button} from "antd";

export function CallBackPage() {


    const onInitialized = ()=> {
        console.log(`Default OnInitialized Callback` )
    }

    const {updateCallback} = useMyAPI(onInitialized)


    const [clickTimes, setClickTimes] = useState(0)

  /*
   *This method changes the callback whenever its called
   *For demo purpose, I am using a counter to show the last set and called callback
   */
    const updateOnInitializedCallback = () => {
        const clicks = clickTimes + 1
        setClickTimes(clicks)
        const newCallback = () => {
            console.log(`Callback Changed Number:  ${clicks}`)
        }
        updateCallback(newCallback)
    }


    return (<>

        <div>

            <Button type='primary' onClick={updateOnInitializedCallback}>Change CallBack</Button>
        </div>


    </>)
}
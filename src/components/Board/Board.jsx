import styles from './Board.module.css'
import { useRef } from 'react'
import Circles from '../Circles/Circles'
import { Const } from '../Const/Const'
import Draggable from 'react-draggable'


export default function Board(){
    const circleInfoObj = Const.district
    const nodeRef = useRef(null)

    const onStart = (e) => {
        e.target.style.opacity = "0.5"
    }
    const onStop = (e) => {
        e.target.style.opacity = "1"
    }

    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.dragZone}>
                        <ul>
                            {circleInfoObj.map((ele) => <Draggable onStart={onStart} onStop={onStop} nodeRef={nodeRef} key={ele.districtName}><li className= {ele.districtName} ref={nodeRef} ><Circles color={ele.color} /></li></Draggable>)}
                        </ul>
                </div>

            </div>
        </>
    )
}
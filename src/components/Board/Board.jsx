import styles from './Board.module.css'
import { useRef } from 'react'
import Circles from '../Circles/Circles'
import { Const } from '../Const/Const'
import Draggable from 'react-draggable'


export default function Board(){
    const nodeRef = useRef(null)

    const onStart = (e) => {
        e.target.style.opacity = "0.5"
    }
    const onStop = (e) => {
        e.target.style.opacity = "1"
    }
    const onDrag = (e) => {
        console.log('on Drag');
    }

    return(
        <>
             <div className={styles.wrapper}>
                <div className={styles.dragZone}>
                        <ul className={styles.district_01}>
                            {Const.district_01.map((ele) => <Draggable nodeRef={nodeRef} positionOffset={{x:18, y:10}} onStart={onStart} onStop={onStop} key={ele.districtName}><li ref={nodeRef} className= {ele.districtName}><Circles color={ele.color} /></li></Draggable>)}
                        </ul>
                </div>
            </div>
            
        </>
    )
}
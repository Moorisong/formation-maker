import styles from './Board.module.css'
import { useState, useEffect } from 'react'
import Circles from '../Circles/Circles'
import { Const } from '../Const/Const'

export default function Board(){
    const circleInfoObj = Const.circles
    return(
        <>
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <ul>
                    {circleInfoObj.map((ele) => <li className= {ele.className} key={ele.className+ele.color}><Circles color={ele.color} /></li>)}
                </ul>
                

            </div>

        </div>
        </>
    )
}
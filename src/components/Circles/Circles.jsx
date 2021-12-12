import styles from './Circles.module.css'
import { Fab } from '@mui/material'

export default function Circles({color, opacity}){
    const colorName = color
    return(
        <>
            <Fab size="small" aria-label="add" color="primary">
                <div className={styles.circle}></div>
            </Fab>
        </>
    )
}
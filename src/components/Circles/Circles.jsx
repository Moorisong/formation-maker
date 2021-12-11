import styles from './Circles.module.css'

export default function Circles({color, opacity}){
    const colorName = color
    return(
        <>
            <div className={styles.circle} style={{backgroundColor:colorName}}></div>
        </>
    )
}
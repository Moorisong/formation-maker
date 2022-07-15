import styles from './Board.module.css'
import { useRef, useState } from 'react'
import Circles from '../Circles/Circles'
import { Const } from '../Const/Const'
import Draggable from 'react-draggable'
import Arrows from '../Arrows/Arrows'
import AddModal from '../Modal/AddModal'
import Register from '../Register/Register'

export default function Board() {
  const nodeRef = useRef(null)
  const [readyToModal, setReadyToModal] = useState(false)
  const [addModal, setAddModal] = useState(false)

  const onStart = e => {
    e.target.style.opacity = '0.5'
    e.target.style.width = '4rem'
    e.target.style.height = '4rem'
  }
  const onStop = e => {
    e.target.style.opacity = '1'
  }

  const circleClick = e => {
    setReadyToModal(true)
    if (readyToModal) {
      console.log('1111', readyToModal, '222', addModal)
      setAddModal(true)
    }
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.dragZone}>
          <ul className={styles.district_01}>
            {Const.circles.map(ele => (
              <Draggable
                nodeRef={nodeRef}
                positionOffset={{ x: 450, y: 10 }}
                grid={[10, 10]}
                onStart={onStart}
                onStop={onStop}
                key={ele.districtName}>
                <li
                  ref={nodeRef}
                  className={ele.districtName}
                  onClick={circleClick}>
                  <Circles color={ele.color} />
                  {readyToModal && addModal && <AddModal />}
                </li>
              </Draggable>
            ))}
          </ul>

          <ul className={styles.district_01}>
            {Const.arrows.map(ele => (
              <Draggable
                nodeRef={nodeRef}
                positionOffset={{ x: 490, y: 10 }}
                grid={[10, 10]}
                onStart={onStart}
                onStop={onStop}
                key={ele.name}>
                <li ref={nodeRef} className={ele.districtName}>
                  <Arrows color={ele.color} />
                </li>
              </Draggable>
            ))}
          </ul>
        </div>
      </div>
      <Register />
    </>
  )
}

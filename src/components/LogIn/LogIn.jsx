import styles from './LogIn.module.css'
import { useRef } from 'react'

export default function LogIn() {
  const input_id = useRef(null);
  const input_pw = useRef(null);
  const input_age = useRef(null);
  const input_sex = useRef(null);
  const input_nickName = useRef(null);
  const input_club = useRef(null);

  function submitLogIn(){
    const id = input_id.current.value;
    const pw = input_pw.current.value;
    const age = input_age.current.value;
    const sex = input_sex.current.value;
    const nickName = input_nickName.current.value;
    const club = input_club.current.value;


    fetch('http://localhost:3001/logIn', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          id: id,
          pw: pw,
          age: age,
          sex: sex,
          nickName: nickName,
          club: club,
        })
  })
}

  return (
    <>
      <div>
        <input type="text" placeholder="ID 입력" ref={input_id} />
        <input type="text" placeholder="PW 입력" ref={input_pw} />
        <input type="text" placeholder="나이 입력" ref={input_age} />
        <input type="text" placeholder="성별 입력" ref={input_sex} />
        <input type="text" placeholder="닉네임 입력" ref={input_nickName} />
        <input type="text" placeholder="클럽 입력" ref={input_club} />


        <button className={styles.logInBtn}onClick={submitLogIn} >조회</button>

      </div>
    </>
  )
}

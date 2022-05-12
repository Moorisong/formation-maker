import { useEffect, useState } from 'react'

export default function Intro() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/')
      .then(res => res.json())
      .then(d => setData(d))
  }, [])
  console.log('%cIntro.jsx line:11 data', 'color: #007acc;', data)
  return (
    <>
      <div>서버 연결 : {data.result}</div>
    </>
  )
}

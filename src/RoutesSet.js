import { Route, Routes } from "react-router-dom"

import Intro from './pages/Intro'
import FormationBoard from './pages/FormationBoard'

  export default function RoutesSet() {
    
    return (
      <Routes>
        <Route path="/*" element={<Intro />} />
        <Route path="/FormationBoard" element={<FormationBoard />} />
      </Routes>
    )
  }

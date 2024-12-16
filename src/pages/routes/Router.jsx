import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from "../home/Home";
// import Profile1 from '../../components/profiles/Profile1';
import Sliding from '../../components/slider/Sliding';
import TeamSwiper from '../../components/slider/TeamSwiper';
/**
 * The Routes component defines the routing structure of the application.
 * It uses react-router-dom to navigate between different pages.
 * Currently, it only includes a single Route that renders the Home component
 * when the path is the root ("/").
 */

const Router= () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/test" element={<Sliding />} />
        <Route path='/swiper' element={<TeamSwiper/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router

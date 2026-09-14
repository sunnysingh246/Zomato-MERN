import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ChooseRegister from '../pages/auth/ChooseRegister'
import FoodPartnerLogin from '../pages/auth/FoodPartnerLogin'
import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister'
import UserLogin from '../pages/auth/UserLogin'
import UserRegister from '../pages/auth/UserRegister'
import '../styles/theme.css'
import '../styles/auth-shared.css'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<ChooseRegister />} />
                <Route path='/user/register' element={<UserRegister />} />
                <Route path='/user/login' element={<UserLogin />} />
                <Route path='/food-partner/register' element={<FoodPartnerRegister />} />
                <Route path='/food-partner/login' element={<FoodPartnerLogin />} />
            </Routes>
        </Router>
    )
}
 
export default AppRoutes

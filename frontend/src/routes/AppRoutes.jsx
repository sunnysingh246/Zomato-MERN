import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AuthPage from '../pages/AuthPage'
import '../styles/theme.css'
import '../styles/auth.css'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/user/register' element={<AuthPage role="user" mode="register" />} />
                <Route path='/user/login' element={<AuthPage role="user" mode="login" />} />
                <Route path='/food-partner/register' element={<AuthPage role="food-partner" mode="register" />} />
                <Route path='/food-partner/login' element={<AuthPage role="food-partner" mode="login" />} />
            </Routes>
        </Router>
    )
}
 
export default AppRoutes

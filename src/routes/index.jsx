import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import SplashScreen from '../pages/SplashScreen';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}

export default AppRoutes;       
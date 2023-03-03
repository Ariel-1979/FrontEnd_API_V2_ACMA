import Horses from '@/pages/horses/Horses';
import VeterinaryReport from '@/pages/horses/pages/VeterinaryReport/VeterinaryReport';
import Users from '@/pages/users/Users';
import Horse from '@Horse/Horse';
import HorsePhotos from '@Horse/HorsePhotos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import AdminLayout from '../layouts/adminLayout';

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/dashboard' element={<AdminLayout />}>
					<Route path='equinos' element={<Horses />} />
					<Route path='equinos/ficha' element={<Horse />} />
					<Route path='equinos/fotos' element={<HorsePhotos />} />
					<Route path='equinos/informes' element={<VeterinaryReport />} />

					<Route path='usuarios' element={<Users />} />
					<Route path='*' element={<Dashboard />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;

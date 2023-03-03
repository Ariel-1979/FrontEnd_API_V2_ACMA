import Dashboard from './components/Dashboard';
import AppRoutes from './routes/AppRoutes';
import './styles/index.css';

const App = () => {
	return (
		<>
			<AppRoutes>
				<Dashboard />
			</AppRoutes>
		</>
	);
};

export default App;

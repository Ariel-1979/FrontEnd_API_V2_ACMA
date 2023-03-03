import Dashboard from '../../components/dashboard';

const AdminLayout = () => {
	/* 	const { auth, loading } = useAuth();
	if (loading) {
		return <Loading />;
	}
	if (!auth) {
		return <Navigate to='/' />;
	} */
	return <Dashboard />;
};
export default AdminLayout;

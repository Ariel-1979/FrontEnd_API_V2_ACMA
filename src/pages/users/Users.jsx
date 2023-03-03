import IconsNavigate from '@Components/iconsNavigate';
import TitlePage from '@Components/titlePage/TitlePage';
import { useEffect, useState } from 'react';
import Table from './components/Table';
import style from './Users.module.css';

const Users = () => {
	const [users, setUsers] = useState([]);

	const tableHead = ['Apellido', 'Nombre', 'Email', 'Rol', 'Opciones'];

	const dataFile = e => {
		console.log(e.target.id);
	};

	console.log(users.length, 'Usuarios');

	useEffect(() => {
		fetch('http://localhost:3001/api_v2/usuarios').then(res => {
			if (res.ok) {
				res.json().then(data => {
					setUsers(data);
				});
			}
		});
	}, []);
	return (
		<div className={style.wrapper}>
			<TitlePage>Listado de Usuarios</TitlePage>
			<IconsNavigate />
			<Table tableHead={tableHead} data={users} dataFile={dataFile} />
		</div>
	);
};

export default Users;

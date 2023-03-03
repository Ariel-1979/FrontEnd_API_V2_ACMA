import Pagination from '@/components/pagination/index';
import SearchBar from '@/components/searchBar/SearchBar';
import IconsNavigate from '@Components/iconsNavigate';
import TitlePage from '@Components/titlePage/TitlePage';
import { useEffect } from 'react';
import Table from './components/Table';
import style from './Horses.module.css';

const Horses = () => {
	const tableHead = [
		'Ingreso',
		'Nombre',
		'Raza',
		'H. Clínica',
		'Alojamiento',
		'Estado',
		'Ver Ficha'
	];
	const data = [
		{
			id: 1,
			ingreso: '10/02/2023',
			nombre: 'Caballo',
			raza: 'SPC',
			historia_clinica: '2222',
			alojamiento: 'Baradero',
			estado: 'Alta',
			opciones: '👍'
		},
		{
			id: 2,
			ingreso: '10/02/2023',
			nombre: 'Caballo',
			raza: 'SPC',
			historia_clinica: '2222',
			alojamiento: 'Baradero',
			estado: 'Alta',
			opciones: '👍'
		}
	];
	const dataFile = e => {
		console.log(e.target.id);
	};

	useEffect(() => {}, []);
	return (
		<div className={style.wrapper}>
			<TitlePage>Listado de Equinos</TitlePage>
			<IconsNavigate />
			<div>
				<SearchBar />
				<Table tableHead={tableHead} data={data} dataFile={dataFile} />
			</div>
			<Pagination />
		</div>
	);
};

export default Horses;

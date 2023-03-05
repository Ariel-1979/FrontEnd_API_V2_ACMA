import Pagination from '@/components/pagination/index';
import IconsNavigate from '@Components/iconsNavigate';
import TitlePage from '@Components/titlePage/TitlePage';
import { useEffect, useState } from 'react';
import Table from './components/Table';
import TableHorsesFiltered from './components/TableHorseFiltered';
import { HorsesContext } from './context/HorsesContext';
import style from './Horses.module.css';

const Horses = () => {
	const [horses, setHorses] = useState([]);
	const [horsesFiltered, setHorsesFiltered] = useState([]);

	const dataFile = id => {
		console.log(id);
	};

	const searchHorses = ev =>
		setHorsesFiltered(filterHorsesByName(ev.target.value, horses));

	const alphabeticalOrder = checked => {
		if (!checked) return setHorsesFiltered([...horses]);
		setHorsesFiltered(filterByAlphabeticalOrder(horsesFiltered));
	};

	useEffect(() => {
		fetch('http://localhost:3001/api_v2/equinos/status', {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({ status: 'En Tratamiento' })
		}).then(res => {
			if (res.ok) {
				res.json().then(data => {
					setHorses(data);
					setHorsesFiltered(data);
				});
			}
		});
	}, []);

	return (
		<div className={style.wrapper}>
			<HorsesContext.Provider value={{ horses }}>
				<TitlePage>Listado de Equinos</TitlePage>
				<IconsNavigate />
				<TableHorsesFiltered
					searchHorses={searchHorses}
					alphabeticalOrder={alphabeticalOrder}
				/>
				<Table
					tableHead={tableHead}
					data={horsesFiltered}
					dataFile={dataFile}
				/>
				<Pagination />
			</HorsesContext.Provider>
		</div>
	);
};

const tableHead = [
	'Ingreso',
	'Nombre',
	'Raza',
	'H. Clínica',
	'Alojamiento',
	'Estado',
	'Ver Ficha'
];

const filterHorsesByName = (search, horses) => {
	if (!search) return [...horses];
	const filter = search.toLowerCase();
	return horses.filter(horse => {
		return (
			horse.nombre.toLowerCase().startsWith(filter) ||
			horse.historia_clinica.startsWith(filter)
		);
	});
};

const filterByAlphabeticalOrder = horsesFiltered => {
	const horsesCopy = [...horsesFiltered];
	const horsesOrdered = horsesCopy.sort((a, b) => {
		if (a.nombre < b.nombre) return -1;
		if (a.nombre > b.nombre) return 1;
		return 0;
	});
	return horsesOrdered;
};
export default Horses;

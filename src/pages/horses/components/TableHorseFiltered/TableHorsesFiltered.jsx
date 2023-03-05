import SearchBar from '@/components/searchBar ';
import SwitchLabel from '@/components/switchLabel ';
import { useContext } from 'react';
import { HorsesContext } from '../../context/HorsesContext';
import styles from './styles/TableHorsesFiltered.module.css';

const TableHorsesFiltered = ({ searchHorses, alphabeticalOrder }) => {
	const { horses } = useContext(HorsesContext);
	console.log(horses, 'HORSES');

	return (
		<div className={styles.wrapper}>
			<SearchBar searchHorses={searchHorses} />
			<SwitchLabel
				labelText={'Órden Alfabético'}
				alphabeticalOrder={alphabeticalOrder}
			/>
		</div>
	);
};

export default TableHorsesFiltered;

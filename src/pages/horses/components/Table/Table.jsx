import TableHeader from '../TableHeader';
import TableHorse from '../TableHorse';
import style from './Table.module.css';

const Table = ({ tableHead, data, dataFile }) => {
	return (
		<div className={style.wrapper}>
			<TableHeader tableHead={tableHead} />
			<TableHorse data={data} dataFile={dataFile} />
		</div>
	);
};

export default Table;

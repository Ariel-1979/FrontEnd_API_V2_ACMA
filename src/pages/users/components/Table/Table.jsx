import TableUsers from '../TableUsers';
import style from './Table.module.css';

const Table = ({ tableHead, data, dataFile }) => {
	return (
		<div className={style.wrapper}>
			<div className={style.table_title}>
				{tableHead.map((item, index) => (
					<span className={style.table_head} key={index}>
						{item}
					</span>
				))}
			</div>
			<TableUsers data={data} dataFile={dataFile} />
		</div>
	);
};

export default Table;

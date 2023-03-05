import style from './styles/TableHeader.module.css';

const TableHeader = ({ tableHead }) => {
	return (
		<div className={style.table_title}>
			{tableHead.map((item, index) => (
				<span className={style.table_head} key={index}>
					{item}
				</span>
			))}
		</div>
	);
};

export default TableHeader;

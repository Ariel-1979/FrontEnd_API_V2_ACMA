import EditIcon from '@mui/icons-material/Edit';
import style from './TableHorse.module.css';

const TableHorse = ({ data, dataFile }) => {
	const dataColor =
		data.estado === 'ALTA' ? style.data_active : style.data_inactive;
	return (
		<div>
			{data.map(item => (
				<div className={style.table_data} key={item.id_caballo}>
					<span className={style.data}>{reverseDate(item.ingreso)}</span>
					<span className={style.data}>{item.nombre}</span>
					<span className={style.data}>{item.raza}</span>
					<span className={style.data}>{item.historia_clinica}</span>
					<span className={style.data}>{item.lugar}</span>
					<span className={dataColor}>{item.diario}</span>
					<span
						className={style.data}
						onClick={() => dataFile(item.id_caballo)}
						id={item.id_caballo}
					>
						<EditIcon />
					</span>
				</div>
			))}
		</div>
	);
};

const reverseDate = date => date.split('-').reverse().join('/');

export default TableHorse;

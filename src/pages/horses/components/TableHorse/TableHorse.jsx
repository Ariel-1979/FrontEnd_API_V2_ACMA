import EditIcon from '@mui/icons-material/Edit';
import style from './TableHorse.module.css';

const TableHorse = ({ data, dataFile }) => {
	const dataColor =
		data.estado === 'ALTA' ? style.data_active : style.data_inactive;

	return (
		<div>
			{data.map(item => (
				<div className={style.table_data} key={item.id}>
					<span className={style.data}>{item.ingreso}</span>
					<span className={style.data}>{item.nombre}</span>
					<span className={style.data}>{item.raza}</span>
					<span className={style.data}>{item.historia_clinica}</span>
					<span className={style.data}>{item.alojamiento}</span>
					<span className={dataColor}>{item.estado}</span>
					<span className={style.data}>
						<EditIcon onClick={dataFile} id={item.id} />
					</span>
				</div>
			))}
		</div>
	);
};

export default TableHorse;

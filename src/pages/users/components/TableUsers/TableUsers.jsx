import EditIcon from '@mui/icons-material/Edit';
import style from './TableUsers.module.css';

const TableUsers = ({ data, dataFile }) => {
	return (
		<div>
			{data.map(item => (
				<div className={style.table_data} key={item.id_usuario}>
					<span className={style.data}>{item.nombre}</span>
					<span className={style.data}>{item.apellido}</span>
					<span className={style.data}>{item.email}</span>
					{item.rol === 'Administrador' ? (
						<span className={style.data_active}>{item.rol}</span>
					) : (
						<span className={style.data_inactive}>{item.rol}</span>
					)}
					<span className={style.data}>
						<EditIcon onClick={dataFile} id={item.id} />
					</span>
				</div>
			))}
		</div>
	);
};

export default TableUsers;

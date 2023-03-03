import { TextField } from '@mui/material';
import style from './DataFieldHorse.module.css';

const DataFieldHorse = () => {
	return (
		<div className={style.fileHorse_data}>
			<TextField
				label='Ingresó'
				id='outlined-size-small'
				defaultValue='Caballo'
				size='small'
				color='primary'
			/>
			<TextField
				label='Nombre'
				id='outlined-size-small'
				defaultValue='Small'
				size='small'
			/>
			<TextField
				label='Chip RFID'
				id='outlined-size-small'
				defaultValue='Small'
				size='small'
			/>
			<TextField
				label='Peso'
				id='outlined-size-small'
				defaultValue='Small'
				size='small'
			/>
			<TextField
				label='Raza'
				id='outlined-size-small'
				defaultValue='Small'
				size='small'
			/>
			<TextField
				label='Pelaje'
				id='outlined-size-small'
				defaultValue='Small'
				size='small'
			/>
			<TextField
				label='Edad'
				id='outlined-size-small'
				defaultValue='Small'
				size='small'
			/>
			<TextField
				label='Sexo'
				id='outlined-size-small'
				defaultValue='Small'
				size='small'
			/>
			<TextField
				label='Nro. de Orden'
				id='outlined-size-small'
				defaultValue='Small'
				size='small'
			/>
			<TextField
				label='Marcas / Señas'
				id='outlined-size-small'
				defaultValue='Small'
				size='small'
			/>
			<TextField
				label='Tamaño'
				id='outlined-size-small'
				defaultValue='Small'
				size='small'
			/>
			<TextField
				label='Lugar de Alojamiento'
				id='outlined-size-small'
				defaultValue='Small'
				size='small'
			/>
		</div>
	);
};

export default DataFieldHorse;

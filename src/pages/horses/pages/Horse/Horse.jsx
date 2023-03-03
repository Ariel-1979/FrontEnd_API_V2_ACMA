import IconsNavigate from '@/components/iconsNavigate';
import TitlePage from '@/components/titlePage';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import DataFieldHorse from './components/dataFieldHorse';
import ImgFieldHorse from './components/imgFieldHorse';
import style from './Horse.module.css';

const Horse = () => {
	return (
		<div className={style.wrapper}>
			<TitlePage>Ficha Veterinaria</TitlePage>
			<IconsNavigate />
			<div className={style.fileHorse}>
				<ImgFieldHorse />
				<DataFieldHorse />
			</div>
			<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
				<Button variant='contained' color='primary'>
					Guardar Cambios
				</Button>
			</Box>
		</div>
	);
};

export default Horse;

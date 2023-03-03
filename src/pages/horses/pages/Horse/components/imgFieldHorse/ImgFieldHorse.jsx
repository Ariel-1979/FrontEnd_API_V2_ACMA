import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import style from './ImgFieldHorse.module.css';

export default function ImageFieldHorse() {
	return (
		<div className={style.wrapper}>
			<Card
				sx={{
					maxWidth: 400
				}}
			>
				<CardMedia
					height={300}
					component='img'
					image='/images/Caballo.jpeg'
					alt='Foto del caballo'
				/>
			</Card>
		</div>
	);
}

import IconsNavigate from '@/components/iconsNavigate';
import TitlePage from '@/components/titlePage';
import ImageFieldHorse from '@Horse/Horse/components/imgFieldHorse';
import styles from './HorsePhotos.module.css';

const HorsePhotos = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<TitlePage>Fotografias</TitlePage>
				<IconsNavigate />
				<div style={{ textAlign: 'center' }}>
					<h2>Menu para Cargar Foto</h2>
				</div>

				<div className={styles.photo_container}>
					<ImageFieldHorse />
					<ImageFieldHorse />
					<ImageFieldHorse />
					<ImageFieldHorse />
				</div>
			</div>
		</>
	);
};

export default HorsePhotos;

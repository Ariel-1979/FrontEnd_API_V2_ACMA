import IconsNavigate from '@/components/iconsNavigate';
import TitlePage from '@/components/titlePage';
import TinyEditor from './components/TinyEditor/TinyEditor';
import styles from './VeterinaryReport.module.css';

const VeterinaryReport = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<TitlePage>Informe Vetrinario</TitlePage>
				<IconsNavigate />
				<div className={styles.editor}>
					<TinyEditor />
				</div>
			</div>
		</>
	);
};

export default VeterinaryReport;

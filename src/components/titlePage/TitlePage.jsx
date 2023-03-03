import style from './TitlePage.module.css';

const TitlePage = ({ children }) => <h1 className={style.title}>{children}</h1>;

export default TitlePage;

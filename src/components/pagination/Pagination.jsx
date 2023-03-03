import { Pagination } from '@mui/material';
import style from './Pagination.module.css';

export default function TablePagination() {
	/* const [page, setPage] = React.useState(2);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	}; */

	return (
		<div className={style.wrapper}>
			{/* 	<TablePagination
				component='div'
				count={100}
				page={page}
				onPageChange={handleChangePage}
				rowsPerPage={rowsPerPage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/> */}
			<div className={style.pagination}>
				<Pagination count={10} color='primary' />
			</div>
		</div>
	);
}

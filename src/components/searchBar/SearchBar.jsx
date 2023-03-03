import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import style from './SearchBar.module.css';

export default function SearchBar() {
	return (
		<div className={style.wrapper}>
			<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
				<SearchIcon
					fontSize='small'
					color='primary'
					sx={{ mr: 0.5, my: 0.5 }}
				/>
				<TextField
					id='searchBar'
					label='Buscar...'
					variant='standard'
					color='primary'
					size='small'
				/>
			</Box>
		</div>
	);
}

import { Avatar } from '@mui/material';
import PropTypes from 'prop-types';

const CustomIcon = ({ imagen }) => {
	return (
		<Avatar sx={{ height: '2rem', width: '2rem' }} src={`/icons/${imagen}`} />
	);
};

CustomIcon.propTypes = {
	imagen: PropTypes.string.isRequired
};
export default CustomIcon;

import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';

export default function SwitchLabel({ labelText, alphabeticalOrder }) {
	return (
		<FormGroup>
			<FormControlLabel
				control={<Switch defaultChecked={false} />}
				label={labelText}
				onChange={e => alphabeticalOrder(e.target.checked)}
			/>
		</FormGroup>
	);
}

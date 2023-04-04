import { Box } from '@mui/material';
import styled from '@emotion/styled';

export const CustomButton = styled(Box)(({ theme }) => ({
	backgroundColor: '#FFE93F',
	fontSize: '22px',
	fontWeight: 'bold',
	fill: '#5036CE',
	color: '#5036CE',
	border: 'solid 1px #FFE93F',
	borderRadius: '50px',
	boxShadow: '0px 10px 20px -5px rgba(0, 0, 0, 0.44)',
	transition: 'all 0.2s linear',
	padding: '15px 30px',
	textAlign: 'center',
	cursor: 'pointer',
	display: 'inline-block',

	'&:hover': {
		boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.44)',
		transform: 'translateY(8px)',
	},
}));

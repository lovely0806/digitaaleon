import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { CustomButton } from '../Button/CustomButton';

const CustomCardWrapper = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	backgroundColor: '#FFFFFF',
	borderRadius: '30px',
	height: '100%',
	boxShadow: '0px 10px 25px 0px rgba(0, 0, 0, 0.44)',
	padding: '70px 30px 30px 30px',
	width: '100%',
}));

const Title = styled(Box)(({ theme }) => ({
	color: '#5036CE',
	fontSize: '28px',
	fontWeight: 'bold',
	lineHeight: '1.2em',
	textAlign: 'center',
}));

export const CustomCard = ({ card }) => {
	return (
		<CustomCardWrapper>
			<Title>{card.title}</Title>
			<p>{card.content}</p>
			<CustomButton>{card.button}</CustomButton>
		</CustomCardWrapper>
	);
};

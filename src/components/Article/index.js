import styled from '@emotion/styled';
import { Box, Link } from '@mui/material';
import BlogImage from '../../assets/images/blog.png';

const ArticleContent = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	backgroundColor: '#FFFFFF',
	transition: 'box-shadow 0.3s ease-in-out',
	'&:hover': {
		boxShadow: '0px 0px 20px grey',
	},
}));

const BlogImg = styled('img')(({ theme }) => ({
	position: 'relative',
	maxWidth: '100%',
	height: 'auto',
	marginBottom: '20px',
}));

export const ArticleCard = () => {
	return (
		<ArticleContent>
			<BlogImg src={BlogImage}></BlogImg>
			<Box sx={{ padding: '30px' }}>
				<Box sx={{ color: '#5036CE' }}>
					<Link
						href="https://digitaaleon.nl/en/understanding-a-data-model"
						sx={{
							textDecoration: 'none',
						}}
					>
						<h3>Understanding a data model</h3>
					</Link>
				</Box>
				<p>
					With the advent of self-service business intelligence, an additional need for knowledge
					has emerged: the data model, also known as a star model. If you are working with Power
					Pivot, Power BI or another BI solution, the data is delivered in what is called a star
					model. In this free video course, you will learn to understand a data model so that you
					are prepared for this way of structuring data. A must for people working with Power BI.
				</p>
				<Box
					sx={{
						color: '#5036CE',
						textTransform: 'uppercase',
						fontSize: '12px',
						fontWeight: 'bold',
					}}
				>
					<Link
						href="https://digitaaleon.nl/en/understanding-a-data-model"
						sx={{
							textDecoration: 'none',
						}}
					>
						READ MORE...
					</Link>
				</Box>
			</Box>
		</ArticleContent>
	);
};

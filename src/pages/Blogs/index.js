import { Box, Link, Grid } from '@mui/material';
import styled from '@emotion/styled';
import { ArticleCard } from '../../components/Article';

const ArticleSection = styled(Box)(({ theme }) => ({
	backgroundColor: '#BBF9D6',
	marginTop: '-150px',
	padding: '200px 0px 100px 0px',
}));

const Blogs = () => {
	return (
		<ArticleSection>
			<Box
				sx={{
					margin: '90px auto',
				}}
				width={{ md: '75%' }}
			>
				<Grid container spacing={2}>
					<Grid item md={8}>
						<Box
							sx={{
								color: '#5036CE',
								fontSize: '40px',
								fontFamily: 'Sora, Sans-serif',
								fontWeight: 'bold',
								mb: '20px',
							}}
						>
							Blogs
						</Box>
						<p>
							Want to stay up to date on developments in digitization? Follow our blog – you’ll find
							all our posts below. Have questions about any of the posts? If so, please feel free to{' '}
							<Link href="#">contact</Link> us.
						</p>
					</Grid>
					<Grid item md={4}></Grid>
					<Grid item md={6}>
						<ArticleCard />
					</Grid>
					<Grid item md={6}></Grid>
				</Grid>
			</Box>
		</ArticleSection>
	);
};
export default Blogs;

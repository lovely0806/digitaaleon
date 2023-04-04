import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';
import AboutUsImage from '../../assets/images/about_us.jpg';
import OmgImage from '../../assets/images/omgeving-768x768.png';
import InzetImage from '../../assets/images/digitaaleon-inzet-home.png';

const FirstSection = styled(Box)(({ theme }) => ({
	backgroundColor: '#DEFDFF',
	backgroundImage: `url(${AboutUsImage})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	display: 'flex',
	justifyContent: 'center',
	height: 'auto',
	marginLeft: 'auto',
	marginRight: 'auto',
	marginTop: '-150px',
	marginBottom: '0px',
	zIndex: '0',
	padding: '340px 0px 240px 0px',
}));

const OmgImg = styled('img')(({ theme }) => ({
	maxWidth: '80%',
	height: 'auto',
}));

const InzetImg = styled('img')(({ theme }) => ({
	maxWidth: '100%',
	height: 'auto',
}));

const AboutUs = () => {
	return (
		<Box>
			<FirstSection>
				<Grid container spacing={3} sx={{ width: '75%' }}>
					<Grid item md={6}>
						<Box
							sx={{
								color: '#5036CE',
								fontSize: '50px',
								fontFamily: 'Sora, Sans-serif',
								fontWeight: 'bold',
							}}
						>
							About Digitaaleon
						</Box>
						<Box sx={{ fontSize: '30px', fontWeight: '500', pt: '15px' }}>
							Sustainable and practical IT solutions at your fingertips
						</Box>
						<p>
							No complicated technical stories, just clarity for all. We love that at Digitaaleon.
							After all, it’s important that you not only understand what we do for you, but also
							why. We’re here to help with practical and sustainable automation solutions that fit
							your organisation like a glove not only now, but also in the future.
						</p>
						<p>
							To do so, we draw on the broad IT knowledge and experience we’ve been accumulating
							since 1998 when the foundation was laid for Digitaaleon as it is today. We’re a team
							of nearly 20 employees who use their experience every day to solve your automation
							problems. Whether you’re stuck in Excel hell, desperately need software that does what
							it’s supposed to do without crashing or want to gain insight with an eye toward the
							future, we’re happy to put our experience within IT, from websites and office
							applications to data warehouses, to work for you. With Digitaaleon IT solutions that
							are future-proof, but practical above all else, are within reach.
						</p>
					</Grid>
					<Grid item md={6}></Grid>
				</Grid>
			</FirstSection>
			<Box sx={{ backgroundColor: '#42B270', padding: '0 0 100px 0' }}>
				<Grid
					container
					spacing={2}
					sx={{
						pt: '100px',
						display: 'flex',
						justifyContent: 'center',
						margin: '0 auto',
						zIndex: '100',
					}}
					width={{ md: '75%', xs: '90%' }}
				>
					<Grid
						item
						md={6}
						xs={12}
						sx={{
							alignItems: 'center',
							display: 'flex',
							justifyContent: 'center',
							padding: '0% 4% 0% 7%',
						}}
					>
						<OmgImg src={OmgImage} alt="inzet-home"></OmgImg>
					</Grid>
					<Grid
						item
						md={6}
						xs={12}
						sx={{
							alignItems: 'center',
							display: 'flex',
							justifyContent: 'center',
							flexDirection: 'column',
						}}
					>
						<Box
							sx={{
								color: '#FFFFFF',
								fontFamily: 'Sora, Sans-serif',
								fontSize: '40px',
								fontWeight: 'bold',
								lineHeight: '47px',
							}}
						>
							Practical automation
						</Box>
						<Box sx={{ color: '#FFFFFF' }}>
							<p>
								We always look for practical solutions for your business. By automating repetitive
								tasks so that they can be performed by a computer, your people are free to do what
								they do best. Not only does this provide more value to your company, but employees
								also enjoy their work more. We see IT as a tool that supports your primary
								processes, helping you increase the efficiency of your employees, now and in the
								future.
							</p>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ backgroundColor: '#42B270' }}>
				<Grid
					container
					spacing={2}
					sx={{
						pb: '100px',
						display: 'flex',
						justifyContent: 'center',
						margin: '0 auto',
						zIndex: '100',
					}}
					width={{ md: '75%', xs: '90%' }}
				>
					<Grid
						item
						md={6}
						xs={12}
						sx={{
							alignItems: 'center',
							display: 'flex',
							justifyContent: 'center',
							flexDirection: 'column',
						}}
					>
						<Box
							sx={{
								color: '#FFFFFF',
								fontFamily: 'Sora, Sans-serif',
								fontSize: '40px',
								fontWeight: 'bold',
								lineHeight: '47px',
							}}
						>
							Practical automation
						</Box>
						<Box sx={{ color: '#FFFFFF' }}>
							<p>
								We always look for practical solutions for your business. By automating repetitive
								tasks so that they can be performed by a computer, your people are free to do what
								they do best. Not only does this provide more value to your company, but employees
								also enjoy their work more. We see IT as a tool that supports your primary
								processes, helping you increase the efficiency of your employees, now and in the
								future.
							</p>
						</Box>
					</Grid>

					<Grid
						item
						md={6}
						xs={12}
						sx={{
							alignItems: 'center',
							display: 'flex',
							justifyContent: 'center',
							padding: '0% 4% 0% 7%',
						}}
					>
						<InzetImg src={InzetImage} alt="inzet-home"></InzetImg>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default AboutUs;

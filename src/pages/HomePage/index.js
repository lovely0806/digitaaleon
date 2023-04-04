import { Box, Button, Link } from '@mui/material';
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import jungleImage from '../../assets/images/jungle-BG-e1654115225466.png';
import boomImage from '../../assets/images/boom-breed-scaled.jpg';
import InzetImage from '../../assets/images/digitaaleon-inzet-home.png';
import ReCaptchaImage from '../../assets/images/recaptcha.png';
import { CustomCard } from '../../components/Card/Card';
import { CustomButton } from '../../components/Button/CustomButton';
import { ArticleCard } from '../../components/Article';
// import ParalaxImage from '../../assets/images/jungle-paralax-1024x527.png';

const FirstSection = styled(Box)(({ theme }) => ({
	backgroundColor: '#FFF9D4',
	backgroundImage: `url(${jungleImage})`,
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
	padding: '300px 0px 300px 0px',
}));

const DescriptionSection = styled(Box)(({ theme }) => ({
	alignItems: 'center',
	width: '90%',
}));

const InzetImg = styled('img')(({ theme }) => ({
	maxWidth: '80%',
	height: 'auto',
}));

const FutureSection = styled(Box)(({ theme }) => ({
	backgroundColor: '#FFF9D4',
	backgroundImage: `url(${boomImage})`,
	backgroundPosition: '-125px 20px',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	display: 'flex',
	justifyContent: 'center',
	height: 'auto',
	marginLeft: 'auto',
	marginRight: 'auto',
	marginBottom: '0px',
	zIndex: '0',
	padding: '20px 0px 100px 0px',

	[theme.breakpoints?.down('md')]: {
		backgroundImage: 'unset',
	},
}));

const FormSection = styled(Box)(({ theme }) => ({
	backgroundColor: '#65D893',
	padding: '3em',
}));

const CustomTextFiled = styled(TextField)(({ theme }) => ({
	background: '#FFFFFF',
	borderRadius: '10px',

	'& .MuiInputBase-root': {
		borderRadius: '10px',
	},
}));

const RecaptchaImg = styled('img')(({ theme }) => ({
	backgroundImage: `url(${ReCaptchaImage})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: '44px',
	margin: '8px 13px 0 13px',
	height: '44px',
	width: '44px',
}));

const FormButton = styled(Button)(({ theme }) => ({
	backgroundColor: '#FFE93F',
	fontSize: '20px',
	color: '#5036CE',
	borderRadius: '100px',
	padding: '8px 45px ',
	textTransform: 'none',
	fontWeight: 'bold',
	transition: 'all 0.2s linear',

	'&:hover': {
		transform: 'translateY(5px)',
		backgroundColor: '#FFE93F',
	},
}));

const ArticleSection = styled(Box)(({ theme }) => ({
	backgroundColor: '#65D893',
	padding: '3em',
}));

// const ParalaxImg = styled('img')(({ theme }) => ({
// 	width: '100%',
// 	height: 'auto',
// }));

const HomePage = () => {
	const cards = [
		{
			title: 'Better Processes in the office',
			content:
				'Is your software meeting the needs of your employees? Or do your employees mainly work around the limitations of your current software? Digitaaleon helps you get the most out of your software and makes sure your employees understand what is possible.',
			button: 'More on office automation',
		},
		{
			title: 'Business Intelligence & Analytics',
			content:
				'You can’t determine the direction of your business without data insight. Do you spend too many hours unravelling the right reports and insights every month? Maybe the data is there, but scattered across different systems. With the reports and dashboards developed by Digitaaleon, you’ll have the insight you need in no time.',
			button: 'Get more insight!',
		},
		{
			title: 'Replacing outdated software',
			content:
				'Outdated software is not only inefficient, but often carries security risks that can seriously damage your business. By replacing obsolete software, you can prevent problems and make work more efficient and enjoyable for your employees. Digitaaleon replaces your software with existing applications from reputable vendors when we can, and uses customisation when we can’t.',
			button: 'Discover more',
		},
	];

	return (
		<Box>
			<FirstSection>
				<DescriptionSection>
					<Box
						sx={{
							textAlign: ' center',
							color: '#5036CE',
							fontSize: '50px',
							fontFamily: 'Sora, Sans-serif',
							fontWeight: 'bold',
						}}
					>
						Future-proof with digitisation
					</Box>
					<Box sx={{ textAlign: 'center' }}>
						<p>
							Digitaaleon offers solutions for Business Intelligence (dashboards and reports),{' '}
							<br></br> custom software, low-code and no-code solutions, systems integration and
							process automation.
						</p>
						<p>
							Our goal is to minimise unnecessary manual labour and give you the insight you need as
							quickly as possible.
						</p>
					</Box>
				</DescriptionSection>
			</FirstSection>
			<Box sx={{ backgroundColor: '#42B270', padding: '0 0 100px 0', position: 'relative' }}>
				<Grid
					container
					spacing={2}
					sx={{
						py: '100px',
						display: 'flex',
						justifyContent: 'center',
						margin: '0 auto',
						zIndex: '100',
					}}
					width={{ md: '75%', xs: '90%' }}
				>
					<Grid
						item
						md={5}
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
							Digitaaleon: future-proof with digitisation
						</Box>
						<Box sx={{ color: '#FFFFFF' }}>
							<p>
								The world is changing rapidly. The same is likely true of the demands of your
								customers. Is your business able to change quickly enough to respond to the demands
								of the market? Or do you find that you still spend a lot of time on actions that
								could be done more efficiently? Do you spend a lot of time transferring information
								from one system to another? Then it’s time for Digitaaleon: working together with
								you, we optimise and streamline processes in your office automation. We focus on
								practicality and clarity so you can focus on what’s really important to you: your
								business. Now and in the future.
							</p>
						</Box>
					</Grid>
					<Grid
						item
						md={7}
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
				{/* <Box
					sx={{ position: 'absolute', top: 0, left: 0, width: '100%', mt: '-460px', zIndex: '50' }}
				>
					<ParalaxImg src={ParalaxImage}></ParalaxImg>
				</Box> */}
			</Box>

			<Box sx={{ backgroundColor: '#42B270', padding: '100px 0 100px 0' }}>
				<Box
					sx={{
						color: '#FFFFFF',
						fontFamily: 'Sora, Sans-serif',
						fontSize: '40px',
						fontWeight: 'bold',
						lineHeight: '47px',
						textAlign: 'center',
					}}
				>
					Digitaaleon's services in brief
				</Box>
				<Grid
					container
					spacing={3}
					sx={{
						py: '40px',
						mb: '40px',
						display: 'flex',
						justifyContent: 'center',
						margin: '0 auto',
					}}
					width={{ lg: '75%', md: '95%', xs: '90%' }}
				>
					{cards.map((card) => (
						<Grid item md={4} xs={12}>
							<CustomCard card={card} />
						</Grid>
					))}
				</Grid>
			</Box>
			<FutureSection>
				<Grid
					container
					spacing={2}
					sx={{ py: '100px', display: 'flex', justifyContent: 'center', margin: '0 auto' }}
					width={{ md: '75%', xs: '90%' }}
				>
					<Grid item md={6} xs={12}></Grid>
					<Grid item md={6} xs={12}>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Box
								sx={{
									color: '#5036CE',
									fontSize: '40px',
									fontFamily: 'Sora, Sans-serif',
									fontWeight: 'bold',
								}}
							>
								Digitising with an eye on the future
							</Box>
							<p>
								Working efficiently and being ready for the future require automated processes that
								run like clockwork. There’s no progress without efficient processes, and you need
								progress to keep up with your customers and anticipate their demands. That’s not
								possible if you’re being held back by your operations, whether it be due to a lack
								of insight, outdated software or unoptimised systems that cost you unnecessary time.
								Digitaaleon helps you move forward with specialists who speak your language and take
								care of the technology, so you don’t have to. Wondering what we can do for you to
								help you realise your ambitions?
							</p>
							<CustomButton>Contact us now for more information</CustomButton>
						</Box>
					</Grid>
				</Grid>
			</FutureSection>
			<FormSection>
				<Box
					sx={{
						padding: '50px',
						backgroundColor: '#D0E1EF',
						borderRadius: '50px',
						margin: '0 auto',
					}}
					width={{ md: '75%' }}
				>
					<Box
						sx={{
							color: '#5036CE',
							fontSize: '40px',
							fontFamily: 'Sora, Sans-serif',
							fontWeight: 'bold',
							mb: '20px',
						}}
					>
						Shall we talk further?
					</Box>
					<form
						onSubmit={() => {
							console.log('here');
						}}
					>
						<Grid container spacing={3}>
							<Grid item md={5} xs={12}>
								<CustomTextFiled fullWidth label="Name" placeholder="" required />
							</Grid>
							<Grid item md={7} xs={12}>
								<CustomTextFiled fullWidth label="Email" placeholder="" required />
							</Grid>
							<Grid item md={12} xs={12}>
								<CustomTextFiled fullWidth label="Phone Number" placeholder="" />
							</Grid>
							<Grid item md={12} xs={12}>
								<CustomTextFiled
									fullWidth
									multiline
									rows={3}
									label="What can we help you with?"
									placeholder=""
								/>
							</Grid>
						</Grid>
						<Box sx={{ display: 'flex', pt: '30px' }}>
							<Box
								sx={{
									backgroundColor: '#1a73e8',
									padding: '10px',
									color: 'white',
									fontSize: '13px',
								}}
							>
								<span>
									protected by <strong>reCAPTCHA</strong>
								</span>
								<Box>
									<Link
										href="https://www.google.com/intl/en/policies/privacy/"
										target="blank"
										sx={{ textDecoration: 'none', color: 'white', fontSize: '12px' }}
									>
										Privacy -
									</Link>
									<Link
										href="https://www.google.com/intl/en/policies/terms/"
										target="blank"
										sx={{ textDecoration: 'none', color: 'white', fontSize: '12px', pl: '5px' }}
									>
										Terms{' '}
									</Link>
								</Box>
							</Box>
							<Box
								sx={{
									display: 'inline-block',
									verticalAlign: 'top',
									backgroundColor: '#FFFFFF',
								}}
							>
								<RecaptchaImg />
							</Box>
						</Box>
						<Box sx={{ pt: '35px' }}>
							<FormButton type="submit">Send</FormButton>
						</Box>
					</form>
				</Box>
			</FormSection>
			<ArticleSection>
				<Box
					sx={{
						margin: '0 auto',
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
								Shall we talk further?
							</Box>
							<p>
								Want to stay up to date on developments in digitization? Follow our blog – you’ll
								find all our posts below. Have questions about any of the posts? If so, please feel
								free to <Link href="#">contact</Link> us.
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
		</Box>
	);
};

export default HomePage;

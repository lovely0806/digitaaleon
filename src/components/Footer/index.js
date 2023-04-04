import { Box, Link } from '@mui/material';
import styled from '@emotion/styled';
import FooterLogo from '../../assets/images/logo-digitaaleon-wit.png';
import LinkedinImage from '../../assets/images/linkedin.png';
import YoutubeImage from '../../assets/images/youtube.png';
import FacebookImage from '../../assets/images/facebook.png';

const FooterSection = styled(Box)(({ theme }) => ({
	backgroundColor: '#5036CE',
	color: 'white',
	padding: '15px 0 65px 0',
}));

const FooterLogoImg = styled('img')(({ theme }) => ({
	width: '220px',
	height: 'auto',
}));

const FooterImg = styled('img')(({ theme }) => ({
	width: '50px',
	height: 'auto',
	marginRight: '15px',
}));

const Footer = () => {
	return (
		<FooterSection>
			<Box
				sx={{ display: 'flex', justifyContent: 'space-between', width: '75%', margin: '0 auto' }}
			>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<FooterLogoImg src={FooterLogo}></FooterLogoImg>
					<Box sx={{ display: 'flex', pt: '15px' }}>
						<FooterImg src={LinkedinImage}></FooterImg>
						<FooterImg src={YoutubeImage}></FooterImg>
						<FooterImg src={FacebookImage}></FooterImg>
					</Box>
				</Box>
				<Box>
					<h2>Contact</h2>
					<p>
						Margadantstraat 34 <br />
						1976DN IJmuiden
					</p>
					<p>
						+31 85 00 43 678
						<br />
						info@digitaaleon.nl
					</p>
					<Link
						href="https://digitaaleon.nl/en/?page_id=1942"
						sx={{ color: '#FFFFFF', textDecoration: 'none' }}
					>
						<p>Privacy Statement</p>
					</Link>
					<Link
						href="https://digitaaleon.nl/wp-content/uploads/2023/02/General-terms-and-conditions-Digitaaleon-2.pdf"
						sx={{ color: '#FFFFFF', textDecoration: 'none' }}
						target="blank"
					>
						<p>General Terms and Conditions</p>
					</Link>
				</Box>
			</Box>
		</FooterSection>
	);
};

export default Footer;

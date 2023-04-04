import LogoImage from '../../assets/images/logo-digitaaleon.png';
import { Box, Button, Link } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

const NavWrapper = styled('div')`
	display: flex;
	justify-content: space-around;

	${({ theme }) => theme.breakpoints.down('md')} {
		display: none;
	}
`;

const LogoButton = styled(Button)(({ theme }) => ({
	backgroundColor: '#FFE93F',
	fontSize: '20px',
	color: '#5036CE',
	borderRadius: '100px',
	padding: '8px 45px ',
	textTransform: 'none',
	fontWeight: 'bold',
	transition: 'all 0.2s linear',
	boxShadow: '0px 3px 4px 0px rgba(0,0,0,0.5)',

	[theme.breakpoints.down('md')]: {
		display: 'none',
	},

	'&:hover': {
		backgroundColor: '#FFE93F',
		transform: 'scale(1.1)',
	},
}));

// const NavItem = ({ children, to, component }) => {
// 	return (
// 		<Link
// 			sx={{
// 				color: '#000000',
// 				px: '30px',
// 				fontSize: '20px',
// 				textDecoration: 'none',
// 				fontWeight: 500,
// 				cursor: 'pointer',
// 			}}
// 			to={to}
// 			component={component}
// 		>
// 			{children}
// 		</Link>
// 	);
// };

const NavItem = styled(Link)(({ theme, isActive }) => ({
	color: '#000000',
	textDecoration: 'none',
	padding: '25px 0 15px 0',
	margin: '0 25px',
	fontSize: '20px',
	fontWeight: 500,
	cursor: 'pointer',
	borderBottom: '2px solid transparent',

	'&:hover': {
		borderBottom: '2px solid #000000',
	},

	...(isActive && {
		borderBottom: '2px solid #000000',
	}),
}));

const LogoImg = styled('img')(({ theme }) => ({
	width: '170px',
	height: 'auto',
}));

const Header = () => {
	const { pathname } = useLocation();

	const pages = [
		{
			link: '/',
			title: 'Home',
		},
		{
			link: '/about_us',
			title: 'About us',
		},
		{
			link: '/services',
			title: 'Services',
		},
		{
			link: '/blogs',
			title: 'Blogs',
		},
		{
			link: '/contact',
			title: 'Contact',
		},
	];

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '20px',
				borderRadius: '32px',
			}}
			width={{ md: '90%', xs: '90%' }}
		>
			<LogoImg src={LogoImage} alt="logo" />
			<Box sx={{ display: 'flex', alignItems: 'center', px: '75px' }}>
				<Link
					href="https://calendly.com/sanderkollerie/no-obligation-brainstorming"
					target="blank"
					sx={{ textDecoration: 'none', pr: '35px' }}
				>
					<LogoButton>Meet up?</LogoButton>
				</Link>
				<NavWrapper>
					{pages.map((page) => (
						<NavItem component={RouterLink} to={page.link} isActive={pathname === page.link}>
							{page.title}
						</NavItem>
					))}
				</NavWrapper>
			</Box>
		</Box>
	);
};

export default Header;

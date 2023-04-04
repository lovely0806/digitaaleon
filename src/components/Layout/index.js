import { Box } from '@mui/material';
import Footer from '../Footer';
import Header from '../Header';

const Layout = ({ children }) => {
	return (
		<Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Header />
			</Box>
			{children}
			<Footer />
		</Box>
	);
};

export default Layout;

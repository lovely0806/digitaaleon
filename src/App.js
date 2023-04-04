import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RootRouter from './routes';
import Layout from './components/Layout';
import AppThemeProvider from './provider';

function App() {
	return (
		<Router>
			<AppThemeProvider>
				<Layout>
					<RootRouter />
				</Layout>
			</AppThemeProvider>
		</Router>
	);
}

export default App;

import { SkipNavContent } from '@chakra-ui/skip-nav';
import { Outlet } from '@remix-run/react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';

const Main = () => {
	return (
		<>
			<Header />
			<SkipNavContent flexGrow={1}>
				<Outlet />
			</SkipNavContent>
			<Footer />
		</>
	);
};

export default Main;

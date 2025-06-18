import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { SkipNavContent } from '@chakra-ui/skip-nav';
import { Outlet } from '@remix-run/react';
import { sessionStorage } from "~/services/auth.server";
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import type { User } from "~/services/User.definition";

export const loader: LoaderFunction = async ({ request }) => {
	let session = await sessionStorage.getSession(request.headers.get("cookie"));
	return session.get("user") ?? null;
};

const Main = () => {
	const user = useLoaderData<User>();
	return (
		<>
			<Header user={user} />
			<SkipNavContent flexGrow={1}>
				<Outlet />
			</SkipNavContent>
			<Footer />
		</>
	);
};

export default Main;

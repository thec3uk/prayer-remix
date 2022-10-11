import React from 'react';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './createEmotionCache';
import ClientStyleContext from './context.client';

import { hydrateRoot } from 'react-dom/client';
import { RemixBrowser } from '@remix-run/react';

interface ClientCacheProviderProps {
	children: React.ReactNode;
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
	const [cache, setCache] = React.useState(createEmotionCache());

	function reset() {
		setCache(createEmotionCache());
	}

	return (
		<ClientStyleContext.Provider value={{ reset }}>
			<CacheProvider value={cache}>{children}</CacheProvider>
		</ClientStyleContext.Provider>
	);
}

hydrateRoot(
	document,
	<ClientCacheProvider>
		<RemixBrowser />
	</ClientCacheProvider>
);

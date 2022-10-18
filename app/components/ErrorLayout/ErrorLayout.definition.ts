import type { ThrownResponse } from '@remix-run/react';

export interface IErrorLayoutProps {
	error?: any;
	stack?: string;
	caught?: ThrownResponse;
}

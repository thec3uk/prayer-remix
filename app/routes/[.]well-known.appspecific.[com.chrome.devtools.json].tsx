import type { LoaderFunctionArgs } from '@remix-run/node';
import path from 'path';

export const loader = async ({request}: LoaderFunctionArgs) => {
    const jsonData = {
       workspace: {
           root: path.resolve(),
           uuid: 'c3-pw',
       }
    };
    return Response.json(jsonData);
};
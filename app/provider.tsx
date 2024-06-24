'use client';
import React from "react";
import dynamic from "next/dynamic";
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { store } from '@store/index';
const queryClient = new QueryClient();

function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </Provider>
    );
}
export default dynamic(() => Promise.resolve(Providers), { ssr: false })

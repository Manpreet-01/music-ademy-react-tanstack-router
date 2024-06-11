import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Navbar from '../components/Navbar';
import '../index.css';

export const Route = createRootRoute({
    component: RootLayout,
});


function RootLayout() {
    return (
        <>
            <header className="relative w-full flex items-center justify-center">
                <Navbar />
            </header>

            <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
                <Outlet />
            </main>
            {/* <TanStackRouterDevtools /> */}
        </>
    );
}
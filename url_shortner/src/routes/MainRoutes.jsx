import { Children, lazy } from "react";
import Loadable from "../components/Loadable";
import MainLayout from "../layouts/MainLayout";
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react'


const HomePage = Loadable(lazy(() => import('../pages/home/home')));
const SolutionPage = Loadable(lazy(() => import('../pages/solutions/solutions')));
const AboutPage = Loadable(lazy(() => import('../pages/about/about')));

const MainRoutes = {
    path: '/',
    children: [
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element:(<HomePage />) 
                },
                {
                    path: 'solutions',
                    element:(<SignedIn><SolutionPage /></SignedIn>)
                },
                {
                    path: 'about',
                    element: (<AboutPage />)
                }
            ]
        }
    ]
};

export default MainRoutes;
import { Children, lazy } from "react";
import Loadable from "../components/Loadable";
import MainLayout from "../layouts/MainLayout";
import ClickStats from "../pages/analytics/analytics";

import Signup from "../pages/signup/signupPage";
import SignIn from "../pages/signin/signinPage";


const HomePage = Loadable(lazy(() => import('../pages/home/home')));
const SolutionPage = Loadable(lazy(() => import('../pages/solutions/solutions')));
const AboutPage = Loadable(lazy(() => import('../pages/about/about')));
//const Signup = Loadable(lazy(()=> import('../pages/signup/signupPage')))



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
                    element:(<SolutionPage />)
                },
                {
                    path: 'about',
                    element: (<AboutPage />)
                },
                {
                    path: 'analytics',
                    element: (<ClickStats />)
                },
                {
                    path: 'signup',
                    element: (<Signup/>)
                },
                {
                    path: 'signin',
                    element: (<SignIn/>)
                }
                

            ]
        }
    ]
};

export default MainRoutes;
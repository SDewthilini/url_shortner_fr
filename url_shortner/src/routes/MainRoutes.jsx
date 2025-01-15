import { Children, lazy } from "react";

import Loadable from "../components/Loadable";



const HomePage = Loadable(lazy(()=>import('../pages/home/home')));
const SolutionPage = Loadable(lazy(()=>import('../pages/solutions/solutions')));
const AboutPage = Loadable(lazy(()=>import('../pages/about/about')));






const MainRoutes = [

   
  
        {
            path: '/',
            element: <HomePage/>
        },
        {
            path: '/solutions',
            element: <SolutionPage/>
        },
        {
            path: '/about',
            element: <AboutPage/>
        }
    


    ];


    export default MainRoutes;
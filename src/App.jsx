


import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home/home';
import ThemeRoutes from './routes';



function App() {
  // const {getToken} = useAuth()

  

  // useEffect(() => {
  //   const fetchToken = async () => {
  //     const token = await getToken()
  //     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  //   }

  //   fetchToken()
  // }, [getToken])

  return (
    // <>
    //   <header>
    //   <SignedOut>
    //     <SignInButton />
    //   </SignedOut>

    //   <SignedIn>
    //     <UserButton />
    //   </SignedIn>
    // </header>
    // </>
    <ThemeRoutes/>
    
  )
}

export default App;

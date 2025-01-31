// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import { SignInButton, useAuth, UserButton } from '@clerk/clerk-react'


// function Navbar() {

//     const {isSignedIn} = useAuth()

//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <div className="container">
//                 {/* Logo */}
//                 <Link className="navbar-brand text-orange fw-bold" to="/">
//                     bitly
//                 </Link>

//                 {/* Navbar Toggle */}
//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#navbarNav"
//                     aria-controls="navbarNav"
//                     aria-expanded="false"
//                     aria-label="Toggle navigation"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 {/* Navbar Links */}
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <NavLink
//                                 className="nav-link"
//                                 to="/"
//                             >
//                                 Home
//                             </NavLink>
//                         </li>
//                         <li className="nav-item">
//                             {(isSignedIn)? <NavLink
//                                 className="nav-link"
//                                 to="/solutions"
//                             >
//                                 Solutions
//                             </NavLink> : <></>}
//                         </li>
//                         <li className="nav-item">
//                             <NavLink
//                                 className="nav-link"
//                                 to="/about"
//                             >
//                                 About Us
//                             </NavLink>
//                         </li>
//                     </ul>

//                     {/* Action Buttons */}
//                     <div className="d-flex align-items-center">

//                        { (isSignedIn) ? <UserButton/> : <SignInButton className="btn btn-light text-dark fw-bold"/>}

//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;


import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../shared-theme/ColorModeIconDropdown';
import { NavLink } from 'react-router-dom';

//import Sitemark from './SitemarkIcon';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: (theme.vars || theme).palette.divider,
    backgroundColor: theme.vars
        ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
        : alpha(theme.palette.background.default, 0.4),
    boxShadow: (theme.vars || theme).shadows[1],
    padding: '8px 12px',
}));

export default function AppAppBar() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <AppBar
            position="fixed"
            enableColorOnDark
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                backgroundImage: 'none',
                mt: 'calc(var(--template-frame-height, 0px) + 28px)',
            }}
        >
            <Container maxWidth="lg">
                <StyledToolbar variant="dense" disableGutters>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>

                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button variant="text" color="info" size="small">
                                <NavLink
                                    className="nav-link"
                                    to="/"
                                >
                                    Home
                                </NavLink>

                            </Button>
                            <Button variant="text" color="info" size="small">
                                <NavLink
                                    className="nav-link"
                                    to="/solutions"
                                >
                                    Solutions
                                </NavLink>

                            </Button>
                            <Button variant="text" color="info" size="small">
                                <NavLink
                                    className="nav-link"
                                    to="/analytics"
                                >
                                    Analytics
                                </NavLink>


                            </Button>
                            <Button variant="text" color="info" size="small">
                                <NavLink
                                    className="nav-link"
                                    to="/about"
                                >

                                    About
                                </NavLink>
                            </Button>

                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 1,
                            alignItems: 'center',
                        }}
                    >
                        <Button color="primary" variant="text" size="small">
                            <NavLink
                                className="nav-link"
                                to="/signin"
                            >
                                Sign in
                            </NavLink>

                        </Button>
                        <Button color="primary" variant="contained" size="small">
                            <NavLink
                                className="nav-link"
                                to="/signup"
                            >
                                Sign up
                            </NavLink>

                        </Button>
                        <ColorModeIconDropdown />
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
                        <ColorModeIconDropdown size="medium" />
                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="top"
                            open={open}
                            onClose={toggleDrawer(false)}
                            PaperProps={{
                                sx: {
                                    top: 'var(--template-frame-height, 0px)',
                                },
                            }}
                        >
                            <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </Box>

                                <MenuItem>Home</MenuItem>
                                <MenuItem>Solution</MenuItem>
                                <MenuItem>Analytics</MenuItem>
                                <MenuItem>About</MenuItem>

                                <Divider sx={{ my: 3 }} />
                                <MenuItem>
                                    <Button color="primary" variant="contained" fullWidth>
                                        Sign up
                                    </Button>
                                </MenuItem>
                                <MenuItem>
                                    <Button color="primary" variant="outlined" fullWidth>
                                        Sign in
                                    </Button>
                                </MenuItem>
                            </Box>
                        </Drawer>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}
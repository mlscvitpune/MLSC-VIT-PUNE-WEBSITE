// For components
// import Home from './pages/Home/Home';
// import Team from './pages/Team/Team';
// import Event from './pages/Event/Event';
// import Blog from './pages/Blog/Blog';
// import Projects from './pages/Projects/Projects';
import  { useEffect, useState } from "react";
import React, { Suspense } from 'react';
// For Routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// For Chakra UI
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
// For Navbar
import Navbar from './components/Navbar/Navbar';
// For Footer
import Footer from './components/Footer/Footer';
// import Waves from './utils/waves/Waves';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
// import FloatingButton from './components/FloatingButton/FloatingButton';
import Loading from './components/Loading/Loading';
// import Projectss from './pages/projectss/Projectss';
const Home = React.lazy(() => import('./pages/Home/Home'));
const Team21 = React.lazy(() => import('./pages/Team/Team21'));
const Team22 = React.lazy(() => import('./pages/Team/Team22'));
const Event = React.lazy(() => import('./pages/Event/Event'));
const Blog = React.lazy(() => import('./pages/Blog/Blog'));
const Projects = React.lazy(() => import('./pages/Projects/Projects'));
const RedirectUrl = ({ url }) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return <h5>Redirecting...</h5>;
};
function App() {
  const theme = extendTheme({
    colors: {
      mlsc: {
        100: '#0875CB',
        900: '#263E6A',
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div className="App" style={{ scrollBehavior: 'initial !important' }}>
          <ScrollToTop></ScrollToTop>
          <Suspense fallback={<Loading></Loading>}>
            <Navbar></Navbar>

            <Switch>
              <Route exact path="/" component={Home}></Route>
                <Route exact path="/team21" component={Team21}></Route>
              <Route exact path="/team22" component={Team22}></Route>
              <Route exact path="/event" component={Event}></Route>
              <Route exact path="/blog" component={Blog}></Route>
              <Route exact path="/projects" component={Projects}></Route>
              <Route exact path="/projects" component={Projects}></Route>
              
             <Route exact path="/redirect" component={() => {
    window.location.href = 'https://www.psytech.ai';
    return null;
}}/>
            </Switch>

            <Footer></Footer>
          </Suspense>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;

// For components
// import Home from './pages/Home/Home';
// import Team from './pages/Team/Team';
// import Event from './pages/Event/Event';
// import Blog from './pages/Blog/Blog';
// import Projects from './pages/Projects/Projects';
import React, { Suspense } from 'react';
// For Routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// For Chakra UI
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
// For Navbar
import Navbar from './components/Navbar/Navbar';
// For Footer
import Footer from './components/Footer/Footer';
import Waves from './utils/waves/Waves';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import FloatingButton from './components/FloatingButton/FloatingButton';
import Loading from './components/Loading/Loading';
import Projectss from './pages/projectss/Projectss';
const Home = React.lazy(() => import('./pages/Home/Home'));
const Team = React.lazy(() => import('./pages/Team/Team'));
const Event = React.lazy(() => import('./pages/Event/Event'));
const Blog = React.lazy(() => import('./pages/Blog/Blog'));
const Projects = React.lazy(() => import('./pages/Projects/Projects'));

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
              <Route exact path="/team" component={Team}></Route>
              <Route exact path="/event" component={Event}></Route>
              <Route exact path="/blog" component={Blog}></Route>
              <Route exact path="/projects" component={Projects}></Route>
            </Switch>

            <Footer></Footer>
          </Suspense>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;

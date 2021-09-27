import React from 'react';
import {
  ChakraProvider,
  Flex,
  Container,
  Spacer,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Menu } from './components/Menu';
import { HomePage, MenuPage, OrdersPage } from './pages';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Container>
          <Flex>
            <Menu />
            <Spacer />
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
          <Switch>
            <Route path="/menu" component={MenuPage}></Route>
            <Route path="/orders" component={OrdersPage}></Route>
            <Route path="/" component={HomePage}></Route>
          </Switch>
        </Container>
      </Router>
    </ChakraProvider>
  );
}

export default App;

import {createBrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import Home from "./home/layout.tsx";
import ErrorPage from "./error/Error.tsx";
import Counter from "./home/counter/page.tsx";
import PokemonList from "./home/pokemon-list/page.tsx";
import StompComponent from "./stomp/stompComponent.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/stomp",
    element: <StompComponent></StompComponent>
  },
  {
    path: "/home",
    element: <Home></Home>,
    children: [
      {
        path: "counter",
        element: <Counter></Counter>
      },
      {
        path: "pokemon-list",
        element: <PokemonList></PokemonList>
      }
    ]
  },
]);
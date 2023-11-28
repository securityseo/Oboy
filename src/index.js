import ReactDOM from "react-dom/client";
import './style/global.css'
import App from "./components/App";
import { ChakraProvider } from "@chakra-ui/react";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <ChakraProvider>
    <App/>
   </ChakraProvider>
  </>
);

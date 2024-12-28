import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from './components/Product/Product.jsx';
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import CardCllickDetelis from './components/CardClickDetelis/CardCllickDetelis.jsx';
import Error from './Error/Error.jsx';
import GetStartBtn from './components/Home/GetStartBtn/GetStartBtn.jsx';
import FullStackWebDeveloperWorinkCard from './components/Home/FullStackWebDeveloperWorinkCard/FullStackWebDeveloperWorinkCard.jsx';
import FontendCardClickShowOne from './components/Home/frontendCard/FontendCardClickShowOne/FontendCardClickShowOne.jsx';
import Login from './components/Login/Login.jsx';
import { SingUp } from './SingUp/SingUp.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/Home",
        element: <Home></Home>
      },
      {
        path: "/Home/:GetStartBtn",
        element: <GetStartBtn></GetStartBtn>
      },
      {
        path: "/Home/FontendCardClickShowOne",
        element: <FontendCardClickShowOne></FontendCardClickShowOne>
      },
      {
        path: "/Product",
        loader: ()=> fetch('Product.json'),
        element: <Product></Product>
      },
      {
        path: "/Product/:CardDetlis",
        loader: async ({ params }) => {
          const response = await fetch('/Product.json');
          const products = await response.json();

          // `params.CardDetlis` এর মাধ্যমে নির্দিষ্ট প্রোডাক্ট ফিল্টার করা
          const product = products.find(item => item.id === parseInt(params.CardDetlis));
          if (!product) {
            throw new Error("Product not found"); // যদি প্রোডাক্ট না পাওয়া যায়
          }
          return product;
        },
        element: <CardCllickDetelis />,

      },
      {
        path: "/Contact",
        element: <Contact></Contact>
      },
      {
        path: "/About",
        element: <About></About>
      },
      {
        path: "/Login",
        element:<Login></Login>
      },
      {
        path:"/Login/singUp",
        element:<SingUp></SingUp>
      }


    ]
  },

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

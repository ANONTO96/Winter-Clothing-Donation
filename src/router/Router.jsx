import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../components/Home";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import DonationCampaigns from "../pages/DonationCampaigns";
import HowToHelp from "../pages/HowToHelp";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CampaignDetails from "../pages/CampaignDetails";
import UpdateProfile from "../pages/UpdateProfile";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/donationCampaigns',
                element:<DonationCampaigns></DonationCampaigns>,
                loader: ()=>
                    fetch('/data.json')
            },
            {
                path:'/donationCampaigns/:id',
                element:<CampaignDetails></CampaignDetails>,
                loader: ()=>
                    fetch('/data.json')

            },
            {
                path:'/updateProfile',
                element:<UpdateProfile></UpdateProfile>
            },
            {
                path:'/howToHelp',
                element:<HowToHelp></HowToHelp>
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
])

export default Router;
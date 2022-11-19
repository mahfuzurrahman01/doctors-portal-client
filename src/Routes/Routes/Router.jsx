import AdminRoute from "../../Admin Route/AdminRoute";
import Users from "../../All users/Users";
import DashboardLayout from "../../DashboardLayout/DashboardLayout";
import MyAppointments from "../../MyAppoinments/MyAppointments";
import About from "../../Pages/About/About";
import Appointment from "../../Pages/Appointment/Appointment";
import Contact from "../../Pages/Contact/Contact";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import Signup from "../../Pages/Signup/Signup";
import Private from "../../PrivateRoute/Private";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Private><DashboardLayout></DashboardLayout></Private>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointments></MyAppointments>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><Users></Users></AdminRoute>
            }
        ]
    }
])
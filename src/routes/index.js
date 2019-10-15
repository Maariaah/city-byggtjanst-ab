import Homepage from "../view/Homepage";
import About from "../view/About";
import Gallery from "../view/Gallery";
import Renovations from "../view/Renovations";
import Contact from "../view/Contact";

const routes = [
    {
        name: "Home",
        path: "/",
        exact: true,
        component: Homepage,
        showInFooter: false,
    },
    {
        name: "About",
        path: "/about",
        exact: true,
        component: About,
        showInFooter: true,
    },
    {
        name: "Gallery",
        path: "/gallery",
        exact: true,
        component: Gallery,
        showInFooter: false,
    },
    {
        name: "Renovations",
        path: "/renovations",
        exact: true,
        component: Renovations,
        showInFooter: true,
    },
    {
        name: "Contact us",
        path: "/contact-us",
        exact: true,
        component: Contact,
        showInFooter: true,
    }
];
export default routes;
import { Person } from "@material-ui/icons";
import Home from "../components/Home/Home";

const userRoutes = [
  
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: Home,
    layout: "/admin"
  }
];

export default userRoutes;

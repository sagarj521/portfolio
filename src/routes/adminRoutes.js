import { Person } from "@material-ui/icons";
import Dashboard from "../components/Admin/Dashboard/Dashboard";
import AddProject from "../components/Admin/AddProject/AddProject";
import ProjectList from "../components/Admin/ProjectsList/ProjectList";

const adminRoutes = [
  
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: Person,
      component: Dashboard,
      layout: "/admin"
    },
    {
      path: "/add-projects",
      name: "Add Projects",
      icon: Person,
      component: AddProject,
      layout: "/admin"
    },
    {
      path: "/view-projects",
      name: "View Projects",
      icon: Person,
      component: ProjectList,
      layout: "/admin"
    }
  ];

export default adminRoutes;
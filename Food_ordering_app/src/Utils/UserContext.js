import { createContext } from "react";

const UserContext = createContext({

    loggedInUser : "Defualt_User",
});
export default UserContext;
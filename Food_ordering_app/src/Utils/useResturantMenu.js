
import { useState,useEffect } from "react";
import { ItemsMenus} from "./contants";
const useResturantMenu=(resId)=>{
    const [resinfo,setresinfo]= useState(null);
    useEffect(()=>{
        FetchMenu();
    },[]);
    
    const FetchMenu = async ()=>{
        const data = await fetch(ItemsMenus+resId);
        const json = await data.json();
        setresinfo(json);
    };
    return resinfo;
};
export default useResturantMenu;
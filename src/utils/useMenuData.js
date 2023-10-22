import { useEffect,useState } from "react";
import { SINGLE_MENU_API } from "../utils/constants";


const useMenuData = (resId) => {
    const [MenuData, setMenuData] = useState(null);

    useEffect(() =>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(SINGLE_MENU_API + resId);
        const json = await data.json();
        setMenuData(json.data);    
    };

    return MenuData; 
}

export default useMenuData;
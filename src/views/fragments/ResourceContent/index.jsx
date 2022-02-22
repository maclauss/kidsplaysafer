import { useScreenSize } from "../../../hooks/useScreenSize";
import { useNavigate } from "react-router-dom";
import ROUTE_NAMES from "../../../constants/routeNames";
import{
    ComingSoon,
    StyledBackButton,
}from "./styled.components"
const {HOME} = ROUTE_NAMES;


const ResourceContent = () => {
    const { isSmallScreen } = useScreenSize();
    const Navigate = useNavigate();
const handleBack = () =>{
    Navigate(HOME);
}


    return(
        <>
        
        <ComingSoon isSmallScreen = {isSmallScreen}>COMING SOON....</ComingSoon>
        {isSmallScreen? <><StyledBackButton onClick = {handleBack} /> </> :""}
        </>
    );

}

export default ResourceContent
import {TabStyled} from "./Tab.styled";

export default function Tab({tab,active}){
    return (
        <TabStyled active={active} >{tab}</TabStyled>
    )
}
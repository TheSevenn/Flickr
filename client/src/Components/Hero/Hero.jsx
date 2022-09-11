import {Title,Heading} from "../../styled-shared/Heading.styled";
import { theme } from "../../styled-shared/Theme";
import { HeroContainer } from "./Hero.styled";

export default function Hero(){
    return (
        <HeroContainer>
            <Heading
             color={theme.colors.brandSecondaryColor}
             fontSize="5rem">
                FIND YOUR NEXT
            </Heading>
            <Title color={theme.colors.uiMajorColor}
            fontSize="8.6rem">
                FAVORITE
            </Title>
        </HeroContainer>
    )
}
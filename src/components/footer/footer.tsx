import { ListIcons } from "../list-icons/list-icons";
import { S } from "./footer.style";

export const Footer = () => {
    return (
        <S.Footer>
            <h3>Me envie uma mensagem</h3>
            <p>
                Email:
                <S.StyledLink to="mailto:tiagosilva_live_2016@outlook.com">
                    tiagosilva_live_2016@outlook.com
                </S.StyledLink>
            </p>

            <ListIcons />
        </S.Footer>
    )
}
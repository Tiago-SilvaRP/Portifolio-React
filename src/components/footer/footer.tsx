import { ListIcons } from "../list-icons/list-icons";
import { S } from "./footer.style";

export const Footer = () => {
    return (
        <S.Footer>
            <h3>Me envie uma mensagem</h3>
            <p>
                Email:
                <a href="mailto:tiagosilva_live_2016@outlook.com">
                    tiagosilva_live_2016@outlook.com
                </a>
            </p>

            <ListIcons />
        </S.Footer>
    )
}
import { ListIcons } from "../list-icons/list-icons";
import { S } from "./footer.style";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <S.Footer>
            <h3>Me envie uma mensagem</h3>
            <p>
                Email:
                <Link to="mailto:tiagosilva_live_2016@outlook.com">
                    tiagosilva_live_2016@outlook.com
                </Link>
            </p>

            <ListIcons />
        </S.Footer>
    )
}
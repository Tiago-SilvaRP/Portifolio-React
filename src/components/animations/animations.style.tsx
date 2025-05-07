import { keyframes } from "styled-components";

export const RightTextInput = keyframes`
    from {
        opacity: 0;
        transform: translateX(100%);
    }
    50% {
        opacity: 1;
        transform: translateX(-20px);
    }
    to {
        transform: translateX(0);
    }
`;

export const LeftTextInput = keyframes`
    from {
        opacity: 0;
        transform: translateX(-100%);
    }
    50% {
        opacity: 1;
        transform: translateX(20px);
    }
    to {
        transform: translateX(0);
    }
`;
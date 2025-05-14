import { useEffect, useRef } from "react";

export const useClickOutSide = <T extends HTMLElement>(
    backMenu: () => void) => {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        const handleClickOutSide = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                backMenu();
            }
        }

        document.addEventListener("mousedown", handleClickOutSide);
        return () => {
            document.removeEventListener("mousedown", handleClickOutSide);
        };
    }, [backMenu]);

    return ref;
}
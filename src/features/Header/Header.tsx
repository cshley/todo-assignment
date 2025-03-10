import React from "react";

import { HeaderProps } from "./HeaderTypes";

export const Header: React.FC<HeaderProps> = ({
    title,
    description,
}: HeaderProps) => {
    const ariaLabel: string = description
        ? "site-title site-description"
        : "site-title";
    return (
        <header aria-labelledby={ariaLabel}>
            <h1 id="site-title">{title}</h1>
            {description && <p id="site-description">{description}</p>}
        </header>
    );
};

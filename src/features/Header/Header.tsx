import React from "react";

import { HeaderProps } from "./HeaderTypes.ts";

export const Header: React.FC<HeaderProps> = ({
    title,
    description,
}: HeaderProps) => {
    return (
        <header aria-labelledby="site-title site-description">
            <h1 id="site-title">{title}</h1>
            {description && <h2 id="site-description">{description}</h2>}
        </header>
    );
};

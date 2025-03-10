import React from "react";

import { PageLayoutProps } from "./PageLayoutTypes.ts";
import { Header } from "../Header/Header.tsx";

export const PageLayout: React.FC<PageLayoutProps> = ({
    children,
}: PageLayoutProps) => {
    return (
        <main className="page-layout">
            <Header title={"TODOs"} />
            {children}
        </main>
    );
};

import React from "react";

import { PageLayoutProps } from "./PageLayoutTypes";
import { Header } from "../Header/Header";

export const PageLayout: React.FC<PageLayoutProps> = ({
    children,
}: PageLayoutProps) => {
    return (
        <main className="page-layout">
            <Header title="TODOs" />
            {children}
        </main>
    );
};

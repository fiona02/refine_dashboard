import React from "react";
import { useRouterContext, TitleProps } from "@refinedev/core";
import Button from "@mui/material/Button";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

    return (
        <Button fullWidth variant="text" disableRipple>
            <Link to="/">
                {collapsed ? (
                    <img src="C:\Users\hp 840 i7 t\Desktop\refine_dashboard\client\src\assets\logo.svg" alt="logo" width="28px" />
                ) : (
                    <img src="C:\Users\hp 840 i7 t\Desktop\refine_dashboard\client\src\assets\yariga.svg" alt="Refine" width="140px" />
                )}
            </Link>
        </Button>
    );
};
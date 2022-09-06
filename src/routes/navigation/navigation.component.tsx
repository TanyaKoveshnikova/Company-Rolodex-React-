import { Outlet } from "react-router-dom";
import { Fragment } from "react";

import Header from "../../components/header/header.component";


const Navigation = () => {
    return (
        <Fragment>
            <Header />
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
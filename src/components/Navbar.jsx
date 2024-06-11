import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { Link } from '@tanstack/react-router';
import { cn } from "../utils/cn";

function Navbar({ className }) {
    const [active, setActive] = useState(null);
    
    return (
        <div
            className={cn("absolute top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link to={"/"}>
                    <MenuItem className="bg-red-400" item="Home" setActive={setActive} active={active}>
                    </MenuItem>
                </Link>

                <MenuItem className="bg-red-400" item="Courses" setActive={setActive} active={active}>
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink to="/courses">All Courses</HoveredLink>
                        <HoveredLink to="/instructors">Our Instructors</HoveredLink>
                    </div>
                </MenuItem>

                <Link to={"/contact"}>
                    <MenuItem className="bg-red-400" item="Contact Us" setActive={setActive} active={active} />
                </Link>
            </Menu>
        </div>
    );
}

export default Navbar
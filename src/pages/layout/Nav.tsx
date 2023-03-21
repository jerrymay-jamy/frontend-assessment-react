import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { colors, fonts } from "../../assets/themed";
import Burger from "./Burger";

const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                backgroundColor: colors.primary,
                zIndex: 10,
            }}
        >
            <Burger />
        </nav>
    );
};

export default Nav;
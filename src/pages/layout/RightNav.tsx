import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {colors, fonts} from "../../assets/themed";

interface Props {
    handleChange: any;
    open: boolean;
}

const Ul = styled.ul<{ open: boolean }>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: end;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #1d1d1d;
    position: fixed;
    transform: ${({ open } : any) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #1d1d1d;
      &:nth-child(4){
        flex-grow: 1
      }
    }
  }
`;

const RightNav:FC<Props> = ({open, handleChange }: Props) => {
    // const [opener, setOpen] : any = useState(open)
    // useEffect(() => {
    //     setOpen(open)
    // }, [open])
    return (
        <Ul open={open}>
            <Link onClick={handleChange} to="/" style={{ flexGrow: 1, fontFamily: fonts.heading, fontSize: "3rem", color: colors.secondary, textDecoration: "none" }}>
                GGamez
            </Link>
            <li onClick={handleChange} className="nav__link" style={{ fontFamily: fonts.heading, marginLeft: "2rem", fontSize: "1.5rem" }}>
                <Link to="/" style={{ color: colors.secondary, textDecoration: "none" }}>
                    Home
                </Link>
            </li>
            <li onClick={handleChange} className="nav__link" style={{ fontFamily: fonts.heading, marginLeft: "2rem", fontSize: "1.5rem" }}>
                <Link to="/about" style={{ color: colors.secondary, textDecoration: "none" }}>
                    About Us
                </Link>
            </li>
            <li onClick={handleChange} className="nav__link" style={{ fontFamily: fonts.heading, marginLeft: "2rem", fontSize: "1.5rem" }}>
                <Link to="/contact" style={{ color: colors.secondary, textDecoration: "none" }}>
                    Contact Us
                </Link>
            </li>
        </Ul>
    )
}

export default RightNav
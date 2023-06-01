'use client'
import React,{useState} from "react";
import Link from "next/link";
import Image from 'next/image'
import classes from "../navbar/navbar.module.css";
const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState<Boolean>(false)
    const loggedIn  = true
    const handleShowDropdown =()=> setShowDropdown(prev => true)
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.left}>
          <Link href="/">Photo Blog</Link>
        </h2>
        <ul className="classes right">
{loggedIn ? (<div><Image src={} alt="img" height={45} width={45} onClick={handleShowDropdown}/></div>):()}

        </ul>
      </div>
      Navbar
    </div>
  );
};

export default Navbar;

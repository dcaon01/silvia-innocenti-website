'use client'

import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import classes from "./DestopNavbar.module.scss";

/**
 * The desktop version of the navigation bar.
 */
export default function DesktopNavbar() {
  /** State to manage dropdown visibility */
  const [isDroppedDown, setIsDroppedDown] = useState(false)

  /**
   * Toggles the dropdown menu visibility.
   */
  function manageDropdown() {
    setIsDroppedDown(!isDroppedDown);
  }

  return (
    <div className={classes.navbarContainer}>
      {/* Logo Section */}
      <img src="/better-logo.svg" alt="Logo" className={classes.logo} />

      {/* Main Navigation Links */}
      <div className={classes.navLinks}>
        <Link href="/" className={classes.link} onClick={manageDropdown}>Home</Link>

        {/* Dropdown Menu for Projects */}
        <div className={classes.dropdownLinks} onClick={manageDropdown}>
          <p className={classes.link}>Progetti</p>
          <motion.div>
            <ChevronDown className={classes.dropdownIcon} />
          </motion.div>
          <AnimatePresence>
            {
              isDroppedDown && (
                <motion.div
                  className={classes.dropdownContent}
                  initial={{ top: 20, opacity: 0 }}
                  animate={{ top: 30, opacity: 1 }}
                  exit={{ top: 30, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="/projects" className={classes.link} onClick={manageDropdown}>Tutti</Link>
                  <Link href="/projects?filter=1" className={classes.link} onClick={manageDropdown}>Filtro1</Link>
                  <Link href="/projects?filter=2" className={classes.link} onClick={manageDropdown}>Filtro2</Link>
                  <Link href="/projects?filter=3" className={classes.link} onClick={manageDropdown}>Filtro3</Link>
                </motion.div>
              )
            }
          </AnimatePresence>
        </div>

        <Link href="/profile" className={classes.link} onClick={manageDropdown}>Profilo</Link>
        <Link href="/contacts" className={classes.link} onClick={manageDropdown}>Contatti</Link>
      </div>
    </div>
  )
}


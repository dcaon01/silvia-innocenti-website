'use client';

import { motion } from "framer-motion";
import { Noto_Serif } from "next/font/google";
import Link from "next/link";
import "./globals.scss";
import classes from "./page.module.scss";

const noto = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
  style: ['normal', 'italic'],
});

/**
 * The home page component displaying a hero section with an image and a quote.
 */
export default function Home() {
  return (
    <main className="main">
      { /* Hero Section */}
      <div className={classes.heroSection}>
        <img src="/hero-photo.png" alt="Hero Image" className={classes.heroImage} />
        <div className={classes.heroTextContainer}>
          <motion.p
            className={`${classes.heroQuote} ${noto.className}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            “L'architettura<br />
            è il gioco sapiente,<br />
            rigoroso e magnifico<br />
            dei volumi assemblati<br />
            nella luce”
          </motion.p>
          <motion.p
            className={classes.heroAuthor}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Le Corbusier
          </motion.p>
        </div>
      </div>

      { /* Profile section */}
      <div className={classes.profileSection}>
        <div className={classes.profileTextContainer}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam...
          </p>
          <Link href="/profile">Scopri di più</Link>
        </div>
        <img src="/profile-photo.png" alt="Profile Image" className={classes.profileImage} />
      </div>

      { /* Projects Section */}

    </main>
  );
}

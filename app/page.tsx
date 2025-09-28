import classes from "./page.module.scss";
import "./globals.scss";

export default function Home() {
  return (
    <main className="main">
      <div className={classes.heroSection}>
        <img src="/hero-image.jpg" alt="Hero Image" className={classes.heroImage} />
        <div className={classes.heroTextContainer}>
          <p className={classes.heroQuote}>
            “L’architettura 
            è il gioco sapiente,
            rigoroso e magnifico
            dei volumi assemblati
            nella luce”
          </p>
        </div>
      </div>
    </main>
  );
}

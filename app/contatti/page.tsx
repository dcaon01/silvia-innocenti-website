import "@/app/globals.scss";
import classes from "./page.module.scss";
import SIButton from "@/components/atoms/button/SIButton";
import Maps from "@/components/atoms/maps/Maps";

export default function Contatti() {
  return (
    <main>
      <h1>Contatti</h1>

      <div className="section">
        <h2>Invia una richiesta</h2>
        <div className={classes.contactsSection}>
          <form className={classes.form}>
            <div className={classes.formInput}>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" className={classes.input} required />
            </div>
            <div className={classes.formInput}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className={classes.input} required />
            </div>
            <div className={classes.formInput}>
              <label htmlFor="message">Messaggio</label>
              <textarea id="message" name="message" className={classes.textarea} rows={5} required />
            </div>
            <div className={classes.buttonSection}>
              <SIButton text="Invia" />
            </div>
          </form>
        </div>
      </div>

      {/* Office section */}
      <div className="section">
        <h2>La sede</h2>
        <Maps />
      </div>
    </main>
  );
}   

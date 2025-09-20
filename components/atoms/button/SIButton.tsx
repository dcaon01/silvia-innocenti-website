import classes from './SIButton.module.scss';

type Props = {
    text: string;
}

export default function SIButton({ text }: Props) {
  return (
    <button className={classes.SIButton}>
      {text}
    </button>
  )
}
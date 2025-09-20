type Props = {
    text: string;
}

export default function SIButton({ text }: Props) {
  return (
    <button className="si-button">
      {text}
    </button>
  )
}
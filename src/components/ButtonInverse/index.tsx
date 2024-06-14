import './styles.css';

type Props = {
  name: string;
}

export default function ButtonInverse({text}: Props) {
  return (
    <div className="dsc-btn dsc-btn-white">
       {text}
    </div>
  );
}

import './Input.scss'
type InputProps = {
  placeHolder: string;
  type: "text" | "button";
  name: string;
  id: string;
  onClick?: () => void;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  placeHolder,
  type,
  name,
  id,
  value,
  onChange,
  onClick,
}: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={type === "text" ? value : placeHolder}
      placeholder={placeHolder}
      className={type === "text" ? "input-text-type" : "input-button-type"}
      onChange={onChange}
      onClick={type === "button" ? onClick : undefined}
    />
  );
};

export default Input;

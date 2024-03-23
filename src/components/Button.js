import { Button } from "react-bootstrap";

function Btn(props) {
  return (
    <Button
      variant={props.variant}
      size={props.size}
      href={props.href}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </Button>
  );
}

export default Btn;

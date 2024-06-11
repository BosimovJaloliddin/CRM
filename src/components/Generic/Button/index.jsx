/* eslint-disable react/prop-types */
import { Button, Icon } from "./style";

const GenericButton = (props) => {
  switch (props.type) {
    case "import":
      return (
        <Button.Import {...props}>
          <Icon.Imp />
          {props.children}
        </Button.Import>
      );
    case "filter":
      return (
        <Button.Filter {...props}>
          <Icon.Filter />
          {props.children}
        </Button.Filter>
      );
    case "add":
      return (
        <Button.Add {...props}>
          <Icon.Add />
          {props.children}
        </Button.Add>
      );
    case "save":
    case "primary":
      return <Button.Primary {...props}>{props.children}</Button.Primary>;
    case "delete":
      return <Button.Delete {...props}>{props.children}</Button.Delete>;
    default:
      return <Button {...props}>{props.children}</Button>;
  }
};

export default GenericButton;

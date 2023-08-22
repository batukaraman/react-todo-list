import "./style.scss";

export default function Form({ children, ...props }) {
  return (
    <form className="form" {...props}>
      {children}
    </form>
  );
}

import  Styles from "./Header.module.css";
interface IProps {
  title : string,
  content ?: string
}

const Header: React.FC<IProps> = (props) => {
  const { title, content } = props
  return (
    <header className={`py-3 ps-2 mb-5 ${Styles.bg__ccc} ${Styles.text__white}`}>
      <h1>The Pulpit {title}</h1>
    </header>
  );
};

export default Header;

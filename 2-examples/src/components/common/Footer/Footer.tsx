interface IProps {
  title: string | number | undefined;
}

const Footer: React.FC<IProps> = (props) => {
  const { title } = props; 
  
  return (
    <footer className={`mt-5 w-100 text-center py-2`}>
      This web page is a part of a demonstration of fluid web design made by
      www.w3schools.com. Resize the browser window to see the content response
      to the resizing.
      {title}
    </footer>
  );
};

export default Footer;

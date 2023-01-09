//tsrfce

type Props = {
  title: string;
};

function FunctionalComponent(props: Props) {
  const { title } = props;
  return (
    <>
      <h1>
        {title}
      </h1>
      <div>FunctionalComponent</div>
    </>
  );
}

export default FunctionalComponent;

export default function Part(props) {
  console.log(props);
  return (
    <>
      <p>
        {props.content.name} {props.content.exercises}
      </p>
    </>
  );
}

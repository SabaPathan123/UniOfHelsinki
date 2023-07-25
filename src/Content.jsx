import Part from "./Part";

export default function Content(props) {
  const { parts } = props.course;
  //console.log(course);
  return (
    <>
      {parts.map((part, id) => {
        return <Part content={part} key={id} />;
      })}
    </>
  );
}

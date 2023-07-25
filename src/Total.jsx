export default function Total(props) {
  let sum = 0;
  return (
    <>
      {props.course.parts.map((p) => {
        sum += p.exercises;
      })}
      <p>Total {sum}</p>
    </>
  );
}

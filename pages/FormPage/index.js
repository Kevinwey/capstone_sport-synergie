import Form from "../../components/Form";

export default function FormPage({
  age,
  weight,
  height,
  intensity,
  physique,
  fitnessLevel,
  timePerWeek,
  handleChange,
  onChange,
  preference,
}) {
  return (
    <Form
      age={age}
      height={height}
      weight={weight}
      intensity={intensity}
      physique={physique}
      fitnessLevel={fitnessLevel}
      timePerWeek={timePerWeek}
      onChange={onChange}
      handleChange={handleChange}
      preference={preference}
    />
  );
}

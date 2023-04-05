import Form from "../../components/Form";

export default function FormPage({ formData, handleChange, onChange }) {
  return (
    <Form formData={formData} onChange={onChange} handleChange={handleChange} />
  );
}

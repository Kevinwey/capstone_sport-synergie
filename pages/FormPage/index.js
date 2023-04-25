import Form from "../../components/Form";

export default function FormPage({
  formData,
  handleChange,
  onChange,
  selectedGroups,
  filteredGroups,
  onSelectChange,
  onNewRoll,
}) {
  return (
    <Form
      formData={formData}
      onChange={onChange}
      handleChange={handleChange}
      selectedGroups={selectedGroups}
      filteredGroups={filteredGroups}
      onSelectChange={onSelectChange}
      onNewRoll={onNewRoll}
    />
  );
}

export default function Checkbox({ matchAllChecked, setMatchAllChecked }) {
  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        checked={matchAllChecked}
        onChange={() => setMatchAllChecked(!matchAllChecked)}
      />
      <label htmlFor="checkbox" style={{ marginLeft: 8 }}>
        Match all
      </label>
    </>
  );
}

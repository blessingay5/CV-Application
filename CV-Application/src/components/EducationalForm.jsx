export default function EducationForm({
  educationList,
  onChange,
  onAdd,
  onDelete,
}) {
  return (
    <section className="cv-section">
      <h2>Education</h2>
      {educationList.map((edu) => (
        <div
          key={edu.id}
          className="form-item-group"
          style={{
            marginBottom: "1rem",
            paddingBottom: "1rem",
            borderBottom: "1px dashed #e5e7eb",
          }}
        >
          <input
            type="text"
            placeholder="School / University"
            value={edu.school}
            onChange={(e) => onChange(edu.id, "school", e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Degree / Field of Study"
            value={edu.degree}
            onChange={(e) => onChange(edu.id, "degree", e.target.value)}
            required
          />
          <div className="date-row">
            <input
              type="month"
              placeholder="Start Date"
              value={edu.startDate}
              onChange={(e) => onChange(edu.id, "startDate", e.target.value)}
            />
            <input
              type="month"
              placeholder="End Date"
              value={edu.endDate}
              onChange={(e) => onChange(edu.id, "endDate", e.target.value)}
            />
          </div>
          {educationList.length > 1 && (
            <button
              type="button"
              className="delete-btn"
              onClick={() => onDelete(edu.id)}
            >
              Delete Education
            </button>
          )}
        </div>
      ))}
      <button type="button" className="add-btn" onClick={onAdd}>
        + Add Education
      </button>
    </section>
  );
}

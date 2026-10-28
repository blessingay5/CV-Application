export default function ExperienceForm({
  experienceList,
  onChange,
  onAdd,
  onDelete,
}) {
  return (
    <section className="section">
      <h2>Professional Experience</h2>
      {experienceList.map((exp) => (
        <div key={exp.id} className="dynamic-group">
          <input
            type="text"
            placeholder="Company Name"
            value={exp.company}
            onChange={(e) => onChange(exp.id, "company", e.target.value)}
          />
          <input
            type="text"
            placeholder="Role"
            value={exp.position}
            onChange={(e) => onChange(exp.id, "position", e.target.value)}
          />
          <textarea
            placeholder="Job-description"
            value={exp.responsibilities}
            onChange={(e) =>
              onChange(exp.id, "responsibilities", e.target.value)
            }
          />
          <div className="date-row">
            <input
              type="month"
              placeholder="Start Date"
              value={exp.startDate}
              onChange={(e) => onChange(exp.id, "startDate", e.target.value)}
            />
            <input
              type="text"
              placeholder="End Date"
              value={exp.endDate}
              onChange={(e) => onChange(exp.id, "endDate", e.target.value)}
            />
          </div>
          <button
            type="button"
            className="delete-btn"
            onClick={() => onDelete(exp.id)}
          >
            Delete
          </button>
        </div>
      ))}
      <button type="button" className="add-btn" onClick={onAdd}>
        + Add Experience
      </button>
    </section>
  );
}

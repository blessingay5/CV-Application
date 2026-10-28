// src/components/CVPreview.jsx
export default function CVPreview({
  generalInfo,
  educationList,
  experienceList,
}) {
  return (
    <div
      className="cv-preview-document"
      style={{
        background: "white",
        padding: "2.5rem",
        borderRadius: "12px",
        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
      }}
    >
      <header
        style={{
          textAlign: "center",
          borderBottom: "2px solid #1f2937",
          paddingBottom: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        <h1 style={{ margin: "0 0 0.5rem 0", fontSize: "2rem" }}>
          {generalInfo.fullName || "Your Name"}
        </h1>
        <p style={{ margin: 0, color: "#4b5563" }}>
          {generalInfo.email} {generalInfo.phone && `• ${generalInfo.phone}`}{" "}
          {generalInfo.address && `• ${generalInfo.address}`}
        </p>
      </header>

      <section style={{ marginBottom: "1.5rem" }}>
        <h3
          style={{
            borderBottom: "1px solid #e5e7eb",
            paddingBottom: "0.25rem",
            color: "#4f46e5",
          }}
        >
          Education
        </h3>
        {educationList.map((edu) => (
          <div key={edu.id} style={{ marginBottom: "1rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "bold",
              }}
            >
              <span>{edu.school}</span>
              <span>
                {edu.startDate} – {edu.endDate}
              </span>
            </div>
            <div style={{ fontStyle: "italic", color: "#4b5563" }}>
              {edu.degree}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h3
          style={{
            borderBottom: "1px solid #e5e7eb",
            paddingBottom: "0.25rem",
            color: "#4f46e5",
          }}
        >
          Professional Experience
        </h3>
        {experienceList.map((exp) => (
          <div key={exp.id} style={{ marginBottom: "1rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "bold",
              }}
            >
              <span>{exp.company}</span>
              <span>
                {exp.startDate} – {exp.endDate}
              </span>
            </div>
            <div
              style={{
                fontStyle: "italic",
                color: "#4b5563",
                marginBottom: "0.25rem",
              }}
            >
              {exp.position}
            </div>
            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>
              {exp.responsibilities}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

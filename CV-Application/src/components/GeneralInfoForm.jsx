export default function GeneralInfoForm({generalInfo, onChange}) {
    return (
      <section className="form-section">
        <h2>General Information</h2>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={generalInfo.fullName}
          onChange={onChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={generalInfo.email}
          onChange={onChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={generalInfo.phone}
          onChange={onChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Location / Address"
          value={generalInfo.address}
          onChange={onChange}
        />
      </section>
    );
}
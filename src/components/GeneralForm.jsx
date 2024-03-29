import { useState } from 'react';
import "../styles/form.css";
import "../styles/demograph.css";

export default function GeneralForm({ values, onTextChange, isEditable, onEdit, onSave }) {
  if (isEditable) {
    return (
      <>
        <form>
          <label htmlFor="first_name">First Name</label>
          <input
            name="first_name"
            id="first_name"
            type="text"
            value={values.firstname}
            maxLength="24"
            size="24"
            required
            onChange={(event) =>
              onTextChange({ ...values, firstname: event.target.value })
            }
          />
          <label htmlFor="last_name">Last Name</label>
          <input
            name="last_name"
            id="last_name"
            type="text"
            value={values.lastname}
            maxLength="24"
            size="24"
            required
            onChange={(event) =>
              onTextChange({ ...values, lastname: event.target.value })
            }
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            type="email"
            value={values.email}
            minLength="6"
            maxLength="48"
            size="32"
            required
            onChange={(event) =>
              onTextChange({ ...values, email: event.target.value })
            }
          />
          <label htmlFor="location">Location</label>
          <input
            name="location"
            id="location"
            type="text"
            value={values.location}
            maxLength="32"
            size="24"
            onChange={(event) =>
              onTextChange({ ...values, location: event.target.value })
            }
          />
          <button onClick={onSave}>Save</button>
        </form>
      </>
    );
  }
  return (
    <>
      <p className="demographic name">{values.firstname}</p>
      <p className="demographic name">{values.lastname}</p>
      <p className="demographic">{values.email}</p>
      <p className="demographic">{values.location}</p>
      <button onClick={onEdit}>Edit</button>
    </>
  );
}

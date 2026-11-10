import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [doctorName, setDoctorName] = useState("");
  const [hospital, setHospital] = useState("");
  const [interactionType, setInteractionType] = useState("");
  const [notes, setNotes] = useState("");
  const [summary, setSummary] = useState("");
  const [interactions, setInteractions] = useState([]);

  // Load interactions on page load
  useEffect(() => {
    fetchInteractions();
  }, []);

  const fetchInteractions = async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/interactions/"
      );
      setInteractions(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const saveInteraction = async () => {
    try {
      await axios.post(
        "http://127.0.0.1:8000/interactions/",
        {},
        {
          params: {
            doctor_name: doctorName,
            hospital: hospital,
            interaction_type: interactionType,
            notes: notes,
          },
        }
      );

      alert("Interaction Saved Successfully");

      fetchInteractions();

      setDoctorName("");
      setHospital("");
      setInteractionType("");
      setNotes("");
    } catch (err) {
      console.log(err);
      alert("Save Failed");
    }
  };

  const generateSummary = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/ai/summary",
        {},
        {
          params: {
            notes: notes,
          },
        }
      );

      setSummary(res.data.summary);
    } catch (err) {
      console.log(err);
      setSummary( "AI service is temprorarily unavailable (Gemini API quota exceeded). Please try again later.");
      alert("AI Summary could not be generated.");
    }
  };

  return (
    <div className = "container">
      <h1>AI First CRM</h1>

      <input
        type="text"
        placeholder="Doctor Name"
        value={doctorName}
        onChange={(e) => setDoctorName(e.target.value)}
      />
      <br />
      <br />

      <input
        type="text"
        placeholder="Hospital"
        value={hospital}
        onChange={(e) => setHospital(e.target.value)}
      />
      <br />
      <br />

      <input
        type="text"
        placeholder="Interaction Type"
        value={interactionType}
        onChange={(e) => setInteractionType(e.target.value)}
      />
      <br />
      <br />

      <textarea
        rows="5"
        cols="60"
        placeholder="Doctor Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <br />
      <br />

      <button onClick={generateSummary}>
        Generate AI Summary
      </button>

      <button
        onClick={saveInteraction}
        style={{ marginLeft: "10px" }}
      >
        Save Interaction
      </button>

      <h2>AI Summary</h2>

      <textarea
        rows="5"
        cols="60"
        value={summary}
        readOnly
      />

      <h2>Saved Interactions</h2>

      <table
        border="1"
        width="100%"
        cellPadding="8"
      >
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Hospital</th>
            <th>Type</th>
            <th>Notes</th>
          </tr>
        </thead>

        <tbody>
          {interactions.map((item) => (
            <tr key={item.id}>
              <td>{item.doctor_name}</td>
              <td>{item.hospital}</td>
              <td>{item.interaction_type}</td>
              <td>{item.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
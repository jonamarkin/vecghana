"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function BookingForm({ isCompact = false }: { isCompact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="booking-form-card" style={{ textAlign: "center", padding: "3.5rem 2rem" }}>
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "rgba(74, 21, 75, 0.1)",
            color: "var(--color-primary)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1.25rem",
          }}
        >
          <CheckCircle2 size={30} />
        </div>
        <h3 style={{ marginBottom: "0.5rem" }}>Booking Request Received!</h3>
        <p style={{ maxWidth: "420px", margin: "0 auto 1.5rem" }}>
          Thank you for reaching out to VocalEssence Chorale Ghana. Our management team will review your specifications and get in touch within 24 hours.
        </p>
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => setSubmitted(false)}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="booking-form-card">
      <h3>{isCompact ? "Send Us a Message" : "Event Booking Request"}</h3>
      <p>
        {isCompact
          ? "Fill out the form below and our management team will get back to you promptly."
          : "Provide your event specifications and our secretariat will review and confirm availability within 24 hours."}
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-two-col">
          <div className="form-field">
            <label htmlFor="fullName">Contact Person / Organiser *</label>
            <input
              type="text"
              id="fullName"
              className="form-input"
              placeholder="e.g. Rev. Kwesi Mensah"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="e.g. info@organisation.com"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone / WhatsApp Number *</label>
            <input
              type="tel"
              id="phone"
              className="form-input"
              placeholder="+233 24 123 4567"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="eventType">Event Category *</label>
            <select id="eventType" className="form-input" defaultValue="Wedding Ceremony" required>
              <option value="Wedding Ceremony">Wedding Ceremony & Reception</option>
              <option value="Concert / Ministration">Church Ministration / Concert</option>
              <option value="Corporate / State Event">Corporate Gala / State Function</option>
              <option value="Funeral / Thanksgiving">Funeral / Thanksgiving Service</option>
              <option value="Collaborative Project">Choral Festival / Collaboration</option>
              <option value="Other">Other Engagement</option>
            </select>
          </div>

          {!isCompact && (
            <>
              <div className="form-field">
                <label htmlFor="eventDate">Proposed Date *</label>
                <input type="date" id="eventDate" className="form-input" required />
              </div>
              <div className="form-field">
                <label htmlFor="package">Preferred Ensemble Package *</label>
                <select id="package" className="form-input" defaultValue="Full Choir">
                  <option value="Full Choir">Full Choir & Live Accompaniment</option>
                  <option value="Full Choir + Brass">Full Choir with Live Brass / Orchestra</option>
                  <option value="Chamber Ensemble">Chamber Choir (16–20 Voices)</option>
                  <option value="Vocal Octet/Quartet">Vocal Octet / Quartet (Intimate)</option>
                  <option value="Brass Section Only">Brass Section / Orchestral Players</option>
                </select>
              </div>
            </>
          )}

          <div className="form-field full">
            <label htmlFor="venue">Venue & Location</label>
            <input
              type="text"
              id="venue"
              className="form-input"
              placeholder="e.g. National Theatre, Accra / Kempinski Hotel"
            />
          </div>

          <div className="form-field full">
            <label htmlFor="details">Event Details & Specific Repertoire Requests</label>
            <textarea
              id="details"
              className="form-input"
              placeholder="Tell us more about the program flow, desired hymns or choral songs, audience size..."
              rows={4}
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%", marginTop: "0.5rem" }}
          disabled={loading}
        >
          <Send size={16} /> {loading ? "Sending..." : "Submit Booking Inquiry"}
        </button>
      </form>
    </div>
  );
}

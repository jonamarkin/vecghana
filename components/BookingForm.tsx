"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${siteConfig.contact.bookingEmail}`;

export default function BookingForm({ isCompact = false }: { isCompact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [eventType, setEventType] = useState("Wedding Ceremony");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
        setError(null);

        const form = e.currentTarget;
        const formData = new FormData(form);

        const fullName = String(formData.get("fullName") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const phone = String(formData.get("phone") || "").trim();
        const selectedCategory = String(formData.get("eventType") || eventType);
        const otherEngagement = String(formData.get("otherEngagement") || "").trim();
        const eventDate = String(formData.get("eventDate") || "").trim();
        const ensemblePackage = String(formData.get("package") || "").trim();
        const venue = String(formData.get("venue") || "").trim();
        const details = String(formData.get("details") || "").trim();

        const payload: Record<string, string> = {
          _subject: `New Booking Inquiry: ${selectedCategory}${fullName ? ` (${fullName})` : ""}`,
          _replyto: email,
          _template: "table",
          _captcha: "false",
          "Contact Person / Organiser": fullName,
          "Email Address": email,
          "Phone / WhatsApp": phone,
          "Event Category":
            selectedCategory === "Other" && otherEngagement
              ? `Other (${otherEngagement})`
              : selectedCategory,
        };

        if (!isCompact) {
          if (eventDate) payload["Proposed Date"] = eventDate;
          if (ensemblePackage) payload["Preferred Ensemble Package"] = ensemblePackage;
        }
        if (venue) payload["Venue & Location"] = venue;
        if (details) payload["Event Details & Repertoire Requests"] = details;

        try {
          const response = await fetch(FORMSUBMIT_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(payload),
          });

          if (!response.ok) {
            throw new Error("Unable to send booking inquiry right now.");
          }

          form.reset();
          setEventType("Wedding Ceremony");
          setSubmitted(true);
        } catch {
          setError(
            `We could not send your request right now. Please email us directly at ${siteConfig.contact.bookingEmail} or call ${siteConfig.contact.phoneDisplay}.`
          );
        } finally {
          setLoading(false);
    }
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
        <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
        <div className="form-two-col">
          <div className="form-field">
            <label htmlFor="fullName">Contact Person / Organiser *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
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
              name="email"
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
              name="phone"
              className="form-input"
              placeholder="+233 24 123 4567"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="eventType">Event Category *</label>
            <select
              id="eventType"
              name="eventType"
              className="form-input"
              value={eventType}
              onChange={(event) => setEventType(event.target.value)}
              required
            >
              <option value="Wedding Ceremony">Wedding Ceremony & Reception</option>
              <option value="Concert / Ministration">Church Ministration / Concert</option>
              <option value="Corporate / State Event">Corporate Gala / State Function</option>
              <option value="Funeral / Thanksgiving">Funeral / Thanksgiving Service</option>
              <option value="Collaborative Project">Choral Festival / Collaboration</option>
              <option value="Other">Other Engagement</option>
            </select>
          </div>

          {eventType === "Other" && (
            <div className="form-field">
              <label htmlFor="otherEngagement">Specify Engagement *</label>
              <select
                id="otherEngagement"
                name="otherEngagement"
                className="form-input"
                defaultValue=""
                required
              >
                <option value="" disabled>Select an engagement</option>
                <option value="Private Celebration">Private Celebration</option>
                <option value="Awards / Dinner">Awards Ceremony / Dinner</option>
                <option value="Product Launch">Product Launch / Brand Event</option>
                <option value="Media / Studio">Media Appearance / Studio Session</option>
                <option value="Community / Charity">Community / Charity Event</option>
                <option value="Educational">School / Educational Engagement</option>
                <option value="Other - describe below">Other (describe in event details)</option>
              </select>
            </div>
          )}

          {!isCompact && (
            <>
              <div className="form-field">
                <label htmlFor="eventDate">Proposed Date *</label>
                <input type="date" id="eventDate" name="eventDate" className="form-input" required />
              </div>
              <div className="form-field">
                <label htmlFor="package">Preferred Ensemble Package *</label>
                  <select id="package" name="package" className="form-input" defaultValue="Full Choir">
                    <option value="Full Choir">Full Choir & Live Accompaniment</option>
                    <option value="Full Choir + Brass">Full Choir with Live Brass / Orchestra</option>
                    <option value="Chamber Ensemble">Chamber Choir (16-20 Voices)</option>
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
              name="venue"
              className="form-input"
              placeholder="e.g. National Theatre, Accra / Kempinski Hotel"
            />
          </div>

          <div className="form-field full">
            <label htmlFor="details">Event Details & Specific Repertoire Requests</label>
            <textarea
              id="details"
              name="details"
              className="form-input"
              placeholder="Tell us more about the program flow, desired hymns or choral songs, audience size..."
              rows={4}
            ></textarea>
          </div>
        </div>

        {error && (
          <p
            role="alert"
            style={{
              color: "#B42318",
              fontSize: "0.86rem",
              marginBottom: "0.85rem",
              lineHeight: 1.5,
            }}
          >
            {error}
          </p>
        )}

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

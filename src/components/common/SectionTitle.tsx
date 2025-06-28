// src/components/common/ReservationForm.tsx

import React, { useState } from 'react';
import Button from './Button';

interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  requests: string;
}

const DEFAULT_FORM: ReservationData = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: 2,
  requests: '',
};

const ReservationForm: React.FC = () => {
  const [form, setForm] = useState<ReservationData>(DEFAULT_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Update form field
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value, 10) : value,
    }));
  };

  // Simple validation logic
  const validate = (): { pass: boolean; reason: string } => {
    if (!form.name.trim()) return { pass: false, reason: 'Name is required.' };
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email))
      return { pass: false, reason: 'Valid email is required.' };
    if (!form.phone.trim()) return { pass: false, reason: 'Phone number is required.' };
    if (!form.date) return { pass: false, reason: 'Reservation date is required.' };
    if (!form.time) return { pass: false, reason: 'Reservation time is required.' };
    if (form.guests < 1) return { pass: false, reason: 'At least one guest is required.' };
    return { pass: true, reason: '' };
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const { pass, reason } = validate();
    if (!pass) {
      setError(reason);
      return;
    }

    setLoading(true);
    try {
      // TODO: replace with real API call
      await new Promise(res => setTimeout(res, 1000));
      console.log('Reservation submitted:', form);
      setSuccess(true);
      setForm(DEFAULT_FORM);
    } catch (err) {
      console.error('Reservation error:', err);
      setError('Submission failed. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      {error && <div className="reservation-form__error">{error}</div>}
      {success && <div className="reservation-form__success">Reservation confirmed!</div>}

      <div className="form-group">
        <label htmlFor="name">Name*</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email*</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone*</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="date">Date*</label>
          <input
            id="date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time*</label>
          <input
            id="time"
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="guests">Guests*</label>
        <select
          id="guests"
          name="guests"
          value={form.guests}
          onChange={handleChange}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map(n => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="requests">Special Requests</label>
        <textarea
          id="requests"
          name="requests"
          rows={3}
          value={form.requests}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? 'Submitting…' : 'Book Now'}
      </Button>
    </form>
  );
};

export default ReservationForm;

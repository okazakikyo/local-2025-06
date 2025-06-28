// src/components/common/ReservationForm.tsx

import React, { useState } from 'react';
import Button from './Button';

/**
 * Data model for reservation form fields
 */
interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  requests: string;
}

/** Default form state */
const DEFAULT_FORM: ReservationData = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: 2,
  requests: '',
};

/**
 * Validation result interface
 */
interface ValidationResult {
  pass: boolean;
  reason: string;
}

/**
 * Validate reservation data
 */
const validateReservation = (data: ReservationData): ValidationResult => {
  if (!data.name.trim()) {
    return { pass: false, reason: 'Name is required.' };
  }
  const emailPattern = /^\S+@\S+\.\S+$/;
  if (!data.email.trim() || !emailPattern.test(data.email)) {
    return { pass: false, reason: 'Valid email is required.' };
  }
  if (!data.phone.trim()) {
    return { pass: false, reason: 'Phone number is required.' };
  }
  if (!data.date) {
    return { pass: false, reason: 'Reservation date is required.' };
  }
  if (!data.time) {
    return { pass: false, reason: 'Reservation time is required.' };
  }
  if (data.guests < 1) {
    return { pass: false, reason: 'At least one guest is required.' };
  }
  return { pass: true, reason: '' };
};

/**
 * ReservationForm component
 */
const ReservationForm: React.FC = () => {
  const [form, setForm] = useState<ReservationData>(DEFAULT_FORM);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  /** Handle input changes */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === 'guests' ? Number(value) : value,
    }));
  };

  /** Handle form submission */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const validation = validateReservation(form);
    if (!validation.pass) {
      setError(validation.reason);
      return;
    }

    setLoading(true);
    try {
      // TODO: Replace with API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess('Reservation confirmed!');
      setForm(DEFAULT_FORM);
    } catch (err) {
      console.error('Reservation submission failed', err);
      setError('Submission failed. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit} noValidate>
      {error && <div className="reservation-form__error">{error}</div>}
      {success && <div className="reservation-form__success">{success}</div>}

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
          {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
            <option key={num} value={num}>
              {num}
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

      <Button type="submit" disabled={loading} fullWidth>
        {loading ? 'Submitting...' : 'Book Now'}
      </Button>
    </form>
  );
};

export default ReservationForm;

import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import { useState } from 'react';

export default function CareersPage() {
  const [form, setForm] = useState({
    firstName: '',
    surname: '',
    address: '',
    stateOfResidence: '',
    email: '',
    phone: '',
    role: '',
    cv: null as File | null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;
    const { name, value } = target;
    let newValue: string | File | null = value;

    if (target instanceof HTMLInputElement && target.type === 'file') {
      newValue = target.files && target.files[0] ? target.files[0] : null;
    }

    setForm((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (key === 'cv' && value instanceof File) {
        formData.append(key, value);
      } else if (typeof value === 'string') {
        formData.append(key, value);
      }
    });

    try {
      const res = await fetch('https://deploy-website-backend.onrender.com', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data?.errors?.[0]?.msg || data?.message || 'Submission failed.');
        setLoading(false);
        return;
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 min-h-screen bg-gradient-to-br from-yellow-400 to-yellow-100">
      <Container>
        <SectionHeading
          title="Join Our Team at Venix"
          subtitle="We're always on the lookout for talented individuals. Apply below to become part of something great."
          centered
        />

        <div className="max-w-3xl mx-auto mt-10 bg-white rounded-3xl shadow-lg px-10 py-12 transition-all">
          {submitted ? (
            <div className="text-center text-green-600 text-xl font-medium">
              🎉 Thank you for applying!<br />
              We’ll review your application and reach out if you're shortlisted.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Full Name */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Jane"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="surname" className="block text-sm font-semibold text-gray-700">
                    Surname
                  </label>
                  <input
                    id="surname"
                    name="surname"
                    type="text"
                    placeholder="Doe"
                    value={form.surname}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700">
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="123 Victoria Island Road"
                  value={form.address}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* State and Role */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="stateOfResidence" className="block text-sm font-semibold text-gray-700">
                    State of Residence
                  </label>
                  <input
                    id="stateOfResidence"
                    name="stateOfResidence"
                    type="text"
                    placeholder="Lagos"
                    value={form.stateOfResidence}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-semibold text-gray-700">
                    role 
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="" disabled>
                      Select a role
                    </option>
                    <option>Frontend Developer</option>
                    <option>Backend Developer</option>
                    <option>UI/UX</option>
                    <option>Product Manager</option>
                    <option>Platform Analyst</option>
                    <option>Customer Care</option>
                    <option>HR</option>
                    <option>Accounting</option>
                    <option>Audit</option>
                  </select>
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+234 801 234 5678"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* CV Upload */}
              <div>
                <label htmlFor="cv" className="block text-sm font-semibold text-gray-700">
                  Upload CV <span className="text-xs text-gray-500">(PDF, DOC, or DOCX)</span>
                </label>
                <input
                  id="cv"
                  name="cv"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl text-sm file:py-2 file:px-4 file:rounded-lg file:border-0 file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-6 text-white font-semibold rounded-xl transition shadow-md ${
                  loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          )}
        </div>
      </Container>
    </div>
  );
}

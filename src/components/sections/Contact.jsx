import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate with your backend/email service
    console.log('Form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'laomphannya240@gmail.com', href: 'mailto:laomphannya240@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+855 972294798', href: 'tel:+855 972294798' },
    { icon: MapPin, label: 'Location', value: 'Phnom Penh, Cambodia' },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <SectionTitle
          subtitle="Get in touch"
          title="Contact Me"
          description="Have a project in mind? Let's work together!"
        />

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Let's talk about your project
            </h3>
            <p className="text-gray-600">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-4 pt-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Icon className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-gray-900 font-semibold hover:text-blue-600 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-900 font-semibold">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              <Send size={18} />
              {submitted ? 'Message Sent!' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
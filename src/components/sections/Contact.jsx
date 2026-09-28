
import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSubmitted(false);
    setError('');

    try {
      const response = await fetch(
        'https://formspree.io/f/xyezbqdp',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        setSubmitted(true);

        setForm({
          name: '',
          email: '',
          message: '',
        });

        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (error) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'laomphannya240@gmail.com',
      href: 'mailto:laomphannya240@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+855 972294798',
      href: 'tel:+855972294798',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Phnom Penh, Cambodia',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gray-950 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] z-0" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] z-0" />

      <div className="container-custom relative z-10">
        <SectionTitle
          subtitle="Get in touch"
          title="Contact Me"
          description="Have a project in mind? Let's work together!"
        />

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-12">

          {/* Info Side */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Let's talk about your project
              </h3>

              <p className="text-gray-400 leading-relaxed">
                I'm always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map(
                ({ icon: Icon, label, value, href }) => (
                  <div
                    key={label}
                    className="flex items-center gap-5 group"
                  >
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                      <Icon
                        className="text-blue-400"
                        size={24}
                      />
                    </div>

                    <div>
                      <p className="text-sm text-gray-400 font-medium mb-1">
                        {label}
                      </p>

                      {href ? (
                        <a
                          href={href}
                          className="text-white font-semibold hover:text-blue-400 transition-colors text-lg"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-white font-semibold text-lg">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900/50 rounded-xl border border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900/50 rounded-xl border border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>

              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900/50 rounded-xl border border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-400 text-sm">
                {error}
              </p>
            )}

            {/* Success */}
            {submitted && (
              <p className="text-green-400 text-sm">
                Message sent successfully! Thank you.
              </p>
            )}

            {/* Button */}
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full shadow-[0_0_20px_rgba(59,130,246,0.3)] mt-2"
            >
              <Send size={18} />

              {loading
                ? 'Sending...'
                : submitted
                ? 'Message Sent!'
                : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

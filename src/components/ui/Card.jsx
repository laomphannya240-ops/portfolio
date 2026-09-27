export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`bg-gray-800 rounded-xl shadow-sm border border-black p-6 ${
        hover ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
// components/Booking/StepHeader.jsx
export default function StepHeader({ title, description }) {
  return (
    <div className="text-left mb-8">
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
}
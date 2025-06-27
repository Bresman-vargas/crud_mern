import ringColors from "../utils/ringColors";

export default function TextAreaField({label, name, place, color, error, touched, ...props}) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <textarea
        name={name}
        className={`border border-zinc-300 focus:ring-2 ${ringColors[color] ||ringColors['defualt'] } focus:outline-0 rounded-md field-sizing-content p-2`}
        rows="3"
        {...props}
        placeholder={place}
      />
      {touched && error && (
        <span className="text-red-500 text-sm">{error}</span>
      )}
    </div>
  );
}

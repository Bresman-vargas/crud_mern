import ringColors from "../utils/ringColors";

export default function ImputField({label, name, place, color, error, touched, ...props}) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        type="text"
        name={name}
        className={`border border-zinc-300 rounded-md ${ringColors[color] || ringColors['defualt']} focus:ring-2 focus:outline-none p-2`}
        {...props}
        placeholder={place}
      />
      {touched && error && (
        <span className="text-red-500 text-sm">{error}</span>
      )}
    </div>
  );
}

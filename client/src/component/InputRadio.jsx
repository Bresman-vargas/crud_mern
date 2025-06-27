export default function InputRadio({label, name, value, checked, ...props}) {
  return (
    <div>
      <label>
        <input
          type="radio"
          name={name}
          value={value} 
          checked={checked} 
          className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 accent-blue-500"
          {...props}
        />{" "}
        {label}
      </label>
    </div>
  );
}

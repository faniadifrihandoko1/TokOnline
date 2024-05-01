interface formInputProps {
  label: string;
  type: string;
  name: string;
}

export default function FormInput(props: formInputProps) {
  const { label, type, name } = props;
  return (
    <div className="py-3 ">
      <p className="text-sm  text-gray-600">{label}</p>
      <input
        type={type}
        name={name}
        className="border-b-2 pt-3 border-gray-300 w-full focus:border-black focus:outline-none"
      />
    </div>
  );
}

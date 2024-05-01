interface FormCheckOutProps {
  label: string;
}

export default function FormCheckOut(props: FormCheckOutProps) {
  const { label } = props;
  return (
    <div className="py-3 flex justify-between items-center">
      <p className="text-sm w-1/6 text-gray-600">{label}</p>
      <input
        type="name"
        name="name"
        className="border-b-2 pt-3 border-gray-300 w-full focus:border-black focus:outline-none"
      />
    </div>
  );
}

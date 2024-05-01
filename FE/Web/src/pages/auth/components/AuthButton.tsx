interface AuthButtonProps {
  buttonName: string;
}

export default function AuthButton(props: AuthButtonProps) {
  const { buttonName } = props;
  return (
    <button
      className="px-6 py-3 bg-bgFooter hover:bg-blue-600 text-white "
      type="submit"
    >
      {" "}
      {buttonName}{" "}
    </button>
  );
}

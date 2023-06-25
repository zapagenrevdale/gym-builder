const PrimaryButton: React.FC<Props> = ({ children, handler, className }) => {
  return (
    <button onClick={handler} className={`primary-button ${className}`}>
      {children}
    </button>
  );
};

interface Props {
  children: React.ReactNode;
  handler: () => void;
  className: string;
}

export default PrimaryButton;

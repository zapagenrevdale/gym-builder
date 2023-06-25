const NavigationButton: React.FC<Props> = ({
  children,
  handler,
  className,
}) => {
  return (
    <button onClick={handler} className={`p-2 ${className}`}>
      {children}
    </button>
  );
};

interface Props {
  children: React.ReactNode;
  handler: () => void;
  className?: string;
}

export default NavigationButton;

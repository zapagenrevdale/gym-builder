const NavigationButton: React.FC<Props> = ({ children, handler }) => {
  return (
    <button onClick={handler} className="p-2">
      {children}
    </button>
  );
};

interface Props {
  children: React.ReactNode;
  handler: () => void;
}

export default NavigationButton;

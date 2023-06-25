import Header from "@/components/organisms/headers";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="min-w-full flex flex-col">
      <Header />
      {children}
    </main>
  );
};

export default Layout;

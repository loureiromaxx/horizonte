import Footer from "@/components/Footer";

export default function ProtectedLayout({ children }: LayoutProps<"/">) {
  return (
    <div>
        <h1>Header Protegida</h1>
        {children}
        <Footer />
    </div>
  );
}
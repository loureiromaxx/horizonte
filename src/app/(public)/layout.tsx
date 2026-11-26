import Logo from "@/components/Logo";
import Navbar from "./Navbar";
import Footer from "@/components/Footer";

export default function PublicLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="bg-no-repeat bg-[radial-gradient(ellipse_900px_520px_at_50%_0,#FDF1DC,transparent_70%)] min-h-screen bg-paper-dark font-sans text-ink antialiased">
        <header className="sticky top-0 z-40 bg-paper-dark/85 backdrop-blur-md">
            <div className="mx-auto grid h-19 max-w-280 grid-cols-[auto_1fr] items-center px-6 md:grid-cols-[1fr_auto_1fr]">
                <Logo />
                <Navbar />
            </div>
        </header>
        <main className="mx-auto max-w-280 px-6">
            {children}
        </main>
        <Footer />
    </div>
  );
}

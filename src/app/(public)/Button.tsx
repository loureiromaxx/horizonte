import Link from "next/link";

export default function Button() {
  return (
    <Link href="/onboarding" className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-sea-dark bg-sea-dark text-white hover:border-sea hover:bg-sea font-bold transition-colors px-8 py-4 text-[17px]">Começar <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></Link>
  );
}
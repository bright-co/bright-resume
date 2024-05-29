export default function RootLayout({
  chatSection,
  resumeSection,
  pdfSection,
}: {
  chatSection: React.ReactNode;
  resumeSection: React.ReactNode;
  pdfSection: React.ReactNode;
}) {
  return (
    <div className="h-screen flex gap-5 overflow-hidden p-2 bg-muted">
      <section className="basis-[500px]">{resumeSection}</section>
      <section className="basis-full">{chatSection}</section>
      <section className="basis-[1400px]">{pdfSection}</section>
    </div>
  );
}

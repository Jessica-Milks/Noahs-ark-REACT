// ============================================================================
// 🧱 SECTION
// Reusable page section with a TITLE and CHILDREN content
// ============================================================================
export function Section({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

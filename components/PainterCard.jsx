// ============================================================================
// 👤 PAINTERCARD
// Shows one team member
// ============================================================================
import './PainterCard.css';

export function PainterCard({ name, role, experience, isLead }) {
  return (
    <article className="painter-card">
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{experience}</p>
    </article>
  );
}
// Remove the duplicate export

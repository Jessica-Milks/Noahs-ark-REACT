import './ServiceCard.css';

// ============================================================================
// 🎨 SERVICECARD
// Shows one service (title + description + optional "Featured" tag)
// ============================================================================
export function ServiceCard({ title, description, isFeatured }) {
  return (
    <article className="service-card">
      {isFeatured && <p className="badge">Featured</p>}
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

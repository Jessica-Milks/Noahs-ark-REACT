// ============================================================================
// 📦 1. IMPORTS
// ============================================================================
import "./App.css";
import { useState } from "react";
import { PainterCard } from "./components/PainterCard.jsx";
import { ServiceCard } from "./components/serviceCard.jsx";
import { Section } from "./components/service.jsx";
import { processSteps } from "./components/processSteps.js";
import { SwatchList } from "./components/SwatchList.jsx";

// ============================================================================
// 📋 2. DATA (SERVICES LIST)
// ============================================================================
const services = [
  {
    id: 1,
    title: "Interior Repainting",
    description: "Freshen up walls, ceilings, and trim throughout your home.",
    isFeatured: false,
  },
  {
    id: 2,
    title: "Exterior Painting",
    description:
      "Protect and beautify your home's exterior with weather-ready paint.",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Cabinet Refinishing",
    description: "Give tired kitchen cabinets a smooth, durable new finish.",
    isFeatured: true,
  },
  {
    id: 4,
    title: "Deck Staining",
    description: "Protect and restore outdoor decks with durable stain.",
    isFeatured: false,
  },
  {
    id: 5,
    title: "Wallpaper Removal",
    description: "Careful removal to prep for a fresh, smooth paint job.",
    isFeatured: false,
  },
];

// ============================================================================
// 🧱 3. SMALL PRESENTATIONAL COMPONENTS
// ============================================================================
function Greeting() {
  return <h2>Welcome to Noah&apos;s Ark Custom Finishes</h2>;
}

function Signature() {
  return <p>– Jessica, Owner of Noah&apos;s Ark Custom Finishes</p>;
}

function ServiceTagline() {
  return <p>38 years of mastery and counting!</p>;
}
function SupportersCounter() {
  const [supporters, setSupporters] = useState(0);

  return (
    <section className="supporters-counter">
      <p>Supporters: {supporters}</p>
      <button
        onClick={() => {
          setSupporters((current) => current + 1);
          setSupporters((current) => current + 1);
          setSupporters((current) => current + 1);
        }}
      >
      I am a supporter of this company!
      </button>
    </section>
    
  );
  function FeaturedServiceStateDemo() {
  const [service, setService] = useState({
    title: "Interior Repainting",
    isFeatured: false,
  });

  function toggleFeatured() {
    // ❌ DO NOT do: service.isFeatured = !service.isFeatured
    // ✅ Instead: make a copy with spread, then change the field
    setService({
      ...service,
      isFeatured: !service.isFeatured,
    });
  }

  function renameToCabinets() {
    setService({
      ...service,
      title: "Cabinet Refinishing",
    });
  }

  return (
    <section>
      <h2>Featured Service Demo</h2>
      <p>Title: {service.title}</p>
      <p>Featured: {service.isFeatured ? "Yes" : "No"}</p>
      <button onClick={toggleFeatured}>Toggle Featured</button>
      <button onClick={renameToCabinets}>Rename to Cabinet Refinishing</button>
    </section>
  );
}
}

// ============================================================================
// 🏠 4. MAIN PAGE COMPONENT (APP)
// ============================================================================
function App() {
  return (
    <>
      {/* 🎯 HERO SECTION (no logo image) */}
      <section id="center">
        <div>
          <h1>Noah&apos;s Ark Custom Finishes</h1>
          <Greeting />
          <p>38 Years of Mastery and counting!</p>
          <Signature />
        </div>
      </section>

      <div className="ticks"></div>

      {/* 👥 OUR TEAM SECTION */}
      <Section title="Our Team">
        <PainterCard
          name="John"
          role="Lead Painter"
          experience="38 years of experience, mastered all facets of the trade"
        />
        <PainterCard
          name="John"
          role="Lead Painter"
          experience="38 years of experience, mastered all facets of the trade"
          isLead={true}
        />
      </Section>

      <div className="ticks"></div>

      {/* 🧰 SERVICES OVERVIEW SECTION */}
      <section id="next-steps">
        <h2>Our Services</h2>
        <p>Interior painting • Exterior painting • Custom finishes</p>
        <ServiceTagline />
      </section>

      {/* 🌟 FEATURED / ALL SERVICES */}
      <Section title="Featured Service">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            isFeatured={service.isFeatured}
          />
        ))}
      </Section>

      <div className="ticks"></div>

      {/* 🎨 OUR PROCESS SWATCH LIST */}
       <SwatchList
        items={processSteps}
        title="Our 4-Step Painting Process"
        intro="From first walk-through to final touch-ups, here’s how John cares for your home."
      />
<section id="center">
  <div>
    <h1>Noah&apos;s Ark Custom Finishes</h1>
    <Greeting />
    <p>38 Years of Mastery and counting!</p>
    <Signature />
  </div>
</section>

<SupportersCounter />
    </>
  );
}

export default App;

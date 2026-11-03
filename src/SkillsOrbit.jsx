import {
  BarChart3,
  ChartNoAxesCombined,
  Code2,
  Database,
  Sparkles,
  Sigma,
  Table2,
} from "lucide-react";
import { orbitTools } from "./profile";

const icons = {
  database: Database,
  table: Table2,
  barChart: BarChart3,
  dashboard: ChartNoAxesCombined,
  code: Code2,
  sigma: Sigma,
  sparkles: Sparkles,
};

export default function SkillsOrbit() {
  return (
    <section className="tool-orbit-section" aria-labelledby="toolkit-heading">
      <div className="tool-orbit-copy">
        <p className="eyebrow">
          <span /> THE TOOLKIT / ALWAYS IN MOTION
        </p>
        <h2 id="toolkit-heading">
          Seven tools.
          <br />
          <em>One curious mind.</em>
        </h2>
        <p>
          From querying and preparation to dashboards and assisted learning,
          these are the tools I use to turn data into clear answers.
        </p>
      </div>
      <div className="tool-orbit-stage">
        <div className="tool-orbit-halo" aria-hidden="true" />
        <div className="tool-orbit-ring tool-orbit-ring--outer" aria-hidden="true" />
        <div className="tool-orbit-ring tool-orbit-ring--inner" aria-hidden="true" />
        <div className="tool-orbit-wheel" role="list" aria-label="Seven analytics tools orbiting the workflow">
          {orbitTools.map((tool, index) => {
            const angle = (index / orbitTools.length) * Math.PI * 2 - Math.PI / 2;
            const Icon = icons[tool.icon];
            return (
              <div
                className="tool-orbit-node"
                key={tool.name}
                role="listitem"
                style={{
                  left: `${50 + Math.cos(angle) * 38}%`,
                  top: `${50 + Math.sin(angle) * 38}%`,
                }}
              >
                <span className="tool-orbit-chip">
                  <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
                  <span>{tool.name}</span>
                </span>
              </div>
            );
          })}
        </div>
        <div className="tool-orbit-core" aria-hidden="true">
          <span className="tool-orbit-core-mark">SS</span>
          <strong>DATA<br />ANALYTICS</strong>
          <small>ONE WORKFLOW · 07 TOOLS</small>
        </div>
        <span className="tool-orbit-caption" aria-hidden="true">
          QUERY <i /> PREPARE <i /> EXPLAIN
        </span>
      </div>
    </section>
  );
}

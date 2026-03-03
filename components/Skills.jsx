import Container from "./Container";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiAmazon,
  SiPython,
  SiRedis,
  SiGithub,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 scroll-mt-24">
      <Container>
        {/* Title */}
        <div className="mb-10 flex items-center justify-center">
          <div className="skill-title-line" />
          <div className="skill-title-pill">Skills</div>
          <div className="skill-title-line" />
        </div>

        {/* Horizontal Infinite Swipe */}
        <div className="skill-marquee-wrap">
          <div className="skill-marquee-track">
            {[...skills, ...skills].map((s, i) => {
              const Icon = s.icon;
              return (
                <div className="skill-card" key={i}>
                  <div className="skill-card-inner">
                    <div
                      className="skill-icon"
                      style={{
                        color: s.color,
                        filter: `drop-shadow(0 8px 20px ${s.color}55)`,
                      }}
                    >
                      <Icon />
                    </div>
                    <div className="skill-name">{s.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
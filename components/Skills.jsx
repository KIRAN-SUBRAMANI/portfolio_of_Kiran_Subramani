import Container from "./Container";
import {
  SiReact,
  SiAngular,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiSpringboot,
  SiPython,
  SiCplusplus,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGithub,
  SiApachekafka,
  SiAmazon,
} from "react-icons/si";

const skills = [
  { name: "Java", short: "J", color: "#EA2D2E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "SQL", short: "SQL", color: "#6B7280" },

  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Angular", icon: SiAngular, color: "#DD0031" },

  { name: "Microservices", short: "MS", color: "#0F172A" },
  { name: "REST APIs", short: "API", color: "#2563EB" },
  { name: "Distributed Systems", short: "DS", color: "#7C3AED" },

  { name: "RAG", short: "RAG", color: "#10B981" },
  { name: "LLMs", short: "LLM", color: "#8B5CF6" },
  { name: "Prompt Eng", short: "PE", color: "#F59E0B" },

  { name: "Kafka", icon: SiApachekafka, color: "#FFFFFF" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },

  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "CI/CD", short: "CI", color: "#0EA5E9" },
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

        {/* Marquee */}
        <div className="skill-marquee-wrap">
          <div className="skill-marquee-track">
            {[...skills, ...skills].map((s, i) => {
              const Icon = s.icon;

              return (
                <div className="skill-card" key={`${s.name}-${i}`}>
                  <div className="skill-card-inner">
                    <div
                      className="skill-icon flex items-center justify-center"
                      style={{
                        color: s.color,
                        filter: `drop-shadow(0 8px 20px ${s.color}55)`,
                      }}
                    >
                      {Icon ? (
                        <Icon />
                      ) : (
                        <span className="text-sm font-bold">
                          {s.short}
                        </span>
                      )}
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
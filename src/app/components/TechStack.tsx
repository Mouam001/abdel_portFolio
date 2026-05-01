import { motion } from "motion/react";
import { Box, Container, Cloud, Shield, Server, Database, GitBranch, Lock } from "lucide-react";

export function TechStack() {
  const technologies = [
    { icon: Box, name: "Kubernetes", color: "#326CE5" },
    { icon: Container, name: "Docker", color: "#2496ED" },
    { icon: Cloud, name: "AWS", color: "#FF9900" },
    { icon: GitBranch, name: "Terraform", color: "#7B42BC" },
    { icon: Shield, name: "FortiGate", color: "#EE3124" },
    { icon: Lock, name: "Cisco", color: "#1BA0D7" },
    { icon: Server, name: "Linux", color: "#FCC624" },
    { icon: Database, name: "Prometheus", color: "#E6522C" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 text-center text-[#1e293b]" style={{ fontSize: '2rem', fontWeight: 700 }}>
            Stack Technique
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-8 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div className="w-20 h-20 bg-white border border-[#e2e8f0] rounded-2xl flex items-center justify-center group-hover:border-[#00A86B] group-hover:shadow-lg transition-all duration-300 shadow-sm">
                  <tech.icon
                    className="w-10 h-10 text-[#00A86B] group-hover:scale-110 transition-transform"
                  />
                </div>
                <span className="text-[#475569] text-sm group-hover:text-[#00A86B] transition-colors font-medium">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

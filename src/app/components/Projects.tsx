import { motion } from "motion/react";
import { ArrowRight, Server, Shield, Cloud, Network, Container } from "lucide-react";

export function Projects() {
  const projects = [
    {
      icon: Server,
      title: "Infrastructure Kubernetes HA",
      description: "Architecture Kubernetes hautement disponible avec monitoring Prometheus/Grafana, GitOps ArgoCD et gestion automatisée",
      tags: ["Kubernetes", "Prometheus", "Grafana", "ArgoCD", "Terraform"],
      featured: true
    },
    {
      icon: Shield,
      title: "Sécurité FortiGate Enterprise",
      description: "Déploiement et configuration d'infrastructure FortiGate avec politique de sécurité avancée et haute disponibilité",
      tags: ["FortiGate", "Firewall", "IDS/IPS", "VPN", "HA"],
      featured: false
    },
    {
      icon: Cloud,
      title: "Infrastructure AWS Terraform",
      description: "Provisionnement automatisé d'infrastructure AWS multi-région avec Terraform et pipelines CI/CD",
      tags: ["AWS", "Terraform", "IaC", "CI/CD", "Automation"],
      featured: false
    },
    {
      icon: Network,
      title: "Réseau MikroTik & VLAN",
      description: "Architecture réseau complexe avec MikroTik, segmentation VLAN, routage dynamique et sécurité périmétrique",
      tags: ["MikroTik", "VLAN", "Routing", "Network Security"],
      featured: false
    },
    {
      icon: Container,
      title: "Plateforme DevSecOps Docker",
      description: "Pipeline DevSecOps complet avec conteneurisation Docker, scanning sécurité et déploiement automatisé",
      tags: ["Docker", "GitLab CI", "Security Scanning", "DevSecOps"],
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-[#F8FAFC] to-[#F5F7FA] relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#EAF1FB] to-transparent rounded-full filter blur-3xl opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center text-[#1e293b]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Projets
          </h2>
          <p className="text-[#64748b] text-center mb-16 max-w-2xl mx-auto">
            Sélection de projets démontrant mon expertise en infrastructure, sécurité et DevSecOps
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`bg-white rounded-2xl p-6 group hover:shadow-xl transition-all duration-300 shadow-md ${
                  project.featured
                    ? 'border-2 border-[#00A86B] md:col-span-2 lg:col-span-1'
                    : 'border border-[#f1f5f9]'
                }`}
              >
                <div className="mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#00A86B]/10 to-[#00A86B]/5 rounded-xl flex items-center justify-center group-hover:from-[#00A86B]/20 group-hover:to-[#00A86B]/10 transition-colors mb-4">
                    <project.icon className="w-7 h-7 text-[#00A86B]" />
                  </div>
                  <h3 className="text-[#1e293b] mb-3 group-hover:text-[#00A86B] transition-colors" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                    {project.title}
                  </h3>
                  <p className="text-[#64748b] leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-1 bg-[#F8FAFC] text-[#475569] rounded-lg text-xs border border-[#e2e8f0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-[#00A86B] group-hover:gap-3 transition-all font-medium">
                  Voir plus
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

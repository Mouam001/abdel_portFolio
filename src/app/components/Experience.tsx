import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Ingénieur Infrastructure & Sécurité (Kubernetes)",
      company: "INSI",
      period: "2025 – 2026",
      description: "Déploiement d'un cluster Kubernetes en contexte académique et professionnel réel : stockage persistant NFS, patterns Blue/Green & Canary, observabilité (Prometheus, Grafana, Loki), sécurité RBAC, scans Trivy & Semgrep, pipeline CI/CD GitLab.",
      tags: ["Kubernetes", "Docker", "GitLab CI/CD", "Prometheus", "Grafana", "Trivy", "Semgrep", "Linux"]
    },
    {
      title: "IT Support & Administration Infrastructure",
      company: "Gotech",
      period: "2025 – 2026",
      description: "Support utilisateurs, administration de serveurs NAS QNAP, déploiement VMware ESXi, configuration firewalls FortiGate et switchs Cisco, supervision Zabbix/Grafana, sauvegarde Nakivo, gestion des incidents GLPI. Mission client : supervision quotidienne et remplacement de firewall FortiGate.",
      tags: ["FortiGate", "VMware ESXi", "Cisco", "Zabbix", "Grafana", "Nakivo", "GLPI", "Windows Server"]
    },
    {
      title: "Analyste Sécurité",
      company: "Ants-Tech",
      period: "Mission courte – 2 semaines",
      description: "Audit d'architecture système et réseau, tests d'intrusion en environnement contrôlé (grey box), scan de vulnérabilités (Nessus, OpenVAS), cartographie des vecteurs d'attaque, rédaction de rapports d'audit et recommandations de renforcement.",
      tags: ["Nessus", "OpenVAS", "Nmap", "Pentest", "Audit", "ISO 27001"]
    },
    {
      title: "Formateur / Mentor Sécurité & DevSecOps",
      period: "Indépendant – International",
      description: "Formation FortiGate et préparation certifications NSE (NSE1, NSE2, NSE3). Accompagnement DevOps sur Docker, Kubernetes et CI/CD. Transmission des bonnes pratiques en sécurité, infrastructure et automatisation.",
      tags: ["FortiGate", "NSE", "Docker", "Kubernetes", "CI/CD", "Linux"]
    },
    {
      title: "Créateur de contenu technique",
      period: "Indépendant – LinkedIn",
      description: "Publication de contenus techniques sur des projets réels en sécurité, infrastructure et DevSecOps. Rédaction de documentations, vulgarisation de concepts complexes, interaction avec la communauté.",
      tags: ["Kubernetes", "Docker", "DevSecOps", "Sécurité réseau"]
    }
  ];

  return (
    <section id="experience" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#EAF1FB] to-transparent rounded-full filter blur-3xl opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-16 text-center text-[#1e293b]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Expérience
          </h2>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-8 max-[379px]:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00A86B] via-[#00A86B]/50 to-transparent" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12 relative pl-20 max-[379px]:pl-14"
              >
                <div className="absolute left-5 max-[379px]:left-3 top-0 w-6 h-6 bg-[#00A86B] rounded-full border-4 border-white shadow-lg" />

                <div className="bg-white rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 group shadow-md border border-[#f1f5f9]">
                  <div className="mb-3 flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-[#1e293b] mb-1" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                        {exp.title}
                      </h3>
                      {exp.company && (
                        <p className="text-[#00A86B] mb-2">{exp.company}</p>
                      )}
                    </div>
                    <span className="mt-1 text-[#64748b] text-xs sm:text-sm whitespace-nowrap sm:ml-4 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-[#64748b] mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-[#00A86B]/10 text-[#00A86B] rounded-lg text-sm border border-[#00A86B]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

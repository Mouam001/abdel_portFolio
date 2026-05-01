import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      title: "Cybersécurité",
      skills: ["FortiGate", "Cisco ASA", "IDS/IPS", "SIEM", "Pentesting", "Hardening"]
    },
    {
      title: "Réseaux",
      skills: ["MikroTik", "Cisco", "VLAN", "VPN", "Firewall", "BGP/OSPF"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Terraform", "Ansible", "GitLab CI", "Jenkins", "Docker"]
    },
    {
      title: "Kubernetes",
      skills: ["K8s", "Helm", "ArgoCD", "Ingress", "Monitoring", "Security"]
    },
    {
      title: "Monitoring",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Zabbix", "AlertManager", "Loki"]
    },
    {
      title: "OS & Scripting",
      skills: ["Linux", "Bash", "Python", "PowerShell", "Automation", "Git"]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-[#F8FAFC] to-[#F5F7FA] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#EAF1FB] to-transparent rounded-full filter blur-3xl opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-16 text-center text-[#1e293b]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Compétences
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group shadow-md border border-[#f1f5f9]"
              >
                <h3 className="mb-4 text-[#00A86B] group-hover:text-[#008f5c] transition-colors" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-[#F8FAFC] text-[#475569] rounded-lg text-sm border border-[#e2e8f0] hover:border-[#00A86B]/30 hover:bg-[#00A86B]/5 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

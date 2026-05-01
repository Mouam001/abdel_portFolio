import { motion } from "motion/react";
import { Shield, Network, Cloud, Server } from "lucide-react";

export function About() {
  const domains = [
    {
      icon: Shield,
      title: "Cybersécurité",
      description: "Protection et sécurisation des infrastructures"
    },
    {
      icon: Network,
      title: "Infrastructure",
      description: "Conception et gestion de réseaux complexes"
    },
    {
      icon: Cloud,
      title: "DevSecOps",
      description: "Intégration de la sécurité dans le cycle DevOps"
    },
    {
      icon: Server,
      title: "Cloud",
      description: "Architecture et déploiement cloud-native"
    }
  ];

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#EAF1FB] to-transparent rounded-full filter blur-3xl opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="mb-6 text-center text-[#1e293b]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            À Propos
          </h2>

          <p className="text-[#475569] mb-16 text-center leading-relaxed" style={{ fontSize: '1.125rem' }}>
            Ingénieur spécialisé en cybersécurité et infrastructure avec une expertise approfondie
            en DevSecOps et cloud computing. Je conçois et implémente des solutions robustes qui
            allient performance, sécurité et scalabilité pour protéger les systèmes critiques des
            organisations modernes.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 text-center group hover:shadow-xl transition-all duration-300 shadow-md border border-[#f1f5f9]"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00A86B]/10 to-[#00A86B]/5 rounded-xl flex items-center justify-center group-hover:from-[#00A86B]/20 group-hover:to-[#00A86B]/10 transition-colors">
                    <domain.icon className="w-8 h-8 text-[#00A86B]" />
                  </div>
                </div>
                <h3 className="mb-2 text-[#1e293b]" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {domain.title}
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed">
                  {domain.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

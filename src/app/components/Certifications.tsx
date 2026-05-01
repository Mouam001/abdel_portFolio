import { motion } from "motion/react";
import { Award, Shield, Lock } from "lucide-react";

export function Certifications() {
  const certs = [
    {
      icon: Shield,
      name: "Fortinet NSE 1",
      issuer: "Fortinet",
      category: "Cybersécurité"
    },
    {
      icon: Shield,
      name: "Fortinet NSE 2",
      issuer: "Fortinet",
      category: "Network Security"
    },
    {
      icon: Shield,
      name: "Fortinet NSE 3",
      issuer: "Fortinet",
      category: "Security Operations"
    },
    {
      icon: Lock,
      name: "Cisco Networking",
      issuer: "Cisco",
      category: "Réseaux"
    },
    {
      icon: Award,
      name: "ANSSI",
      issuer: "ANSSI",
      category: "Sécurité Publique"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#F8FAFC] to-[#F5F7FA]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 text-center text-[#1e293b]" style={{ fontSize: '2rem', fontWeight: 700 }}>
            Certifications
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {certs.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 group shadow-md border border-[#f1f5f9]"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00A86B]/10 to-[#00A86B]/5 rounded-xl flex items-center justify-center group-hover:from-[#00A86B]/20 group-hover:to-[#00A86B]/10 transition-colors">
                    <cert.icon className="w-8 h-8 text-[#00A86B]" />
                  </div>
                </div>
                <h3 className="text-[#1e293b] mb-2" style={{ fontSize: '1rem', fontWeight: 600 }}>
                  {cert.name}
                </h3>
                <p className="text-[#00A86B] text-sm mb-1">{cert.issuer}</p>
                <p className="text-[#64748b] text-xs">{cert.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import profileImage from "../../assets/images/Abdel2.png";
import { motion } from "motion/react";
import { ArrowRight, Shield, Cloud, Lock } from "lucide-react";

const whatsappMessage = encodeURIComponent(
  "Bonjour M. Ben Said, je souhaite échanger avec vous au sujet d'une collaboration sur un projet de sécurité/infrastructure. Pouvez-vous me recontacter, s'il vous plaît ?",
);
const whatsappLink = `https://wa.me/261385013780?text=${whatsappMessage}`;

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#EAF1FB] to-[#F5F7FA]">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-[#00A86B]/20 to-[#0ea5e9]/20 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-gradient-to-br from-[#8b5cf6]/15 to-[#00A86B]/15 rounded-full filter blur-[120px]" />
      </div>

      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-[#00A86B] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center lg:justify-start gap-4 mb-8"
              >
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Shield className="w-6 h-6 text-[#00A86B]" />
                </div>
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Cloud className="w-6 h-6 text-[#00A86B]" />
                </div>
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Lock className="w-6 h-6 text-[#00A86B]" />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-4 text-[#1e293b]"
                style={{ fontSize: '3.8rem', fontWeight: 700, lineHeight: 1.05 }}
              >
                Abdourahamane AbdelWahab <span className="text-[#00A86B]">Ben Said</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-6 text-[#64748b]"
                style={{ fontSize: '1.5rem' }}
              >
                Security Engineer | Network & Infrastructure Security | DevSecOps
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-10 text-[#475569] max-w-3xl"
                style={{ fontSize: '1.2rem', lineHeight: 1.8 }}
              >
                Ingénieur en sécurité spécialisé dans la conception et la sécurisation d’infrastructures réseau,systeme et cloud fiables et évolutives. J’interviens sur des environnements modernes en combinant sécurité, automatisation et bonnes pratiques DevSecOps afin de renforcer la résilience des systèmes. J’intègre la sécurité tout au long du cycle de vie des projets (CI/CD, Kubernetes, systèmes distribués), avec une attention particulière portée à la réduction des risques, la performance et la visibilité des environnements, pour délivrer des solutions robustes à forte valeur opérationnelle.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#00A86B] text-white rounded-xl hover:bg-[#008f5c] transition-all duration-300 shadow-lg shadow-[#00A86B]/20 hover:shadow-xl hover:shadow-[#00A86B]/30"
                >
                  Me contacter
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border border-[#e2e8f0] text-[#00A86B] rounded-xl hover:border-[#00A86B] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Voir les projets
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="absolute inset-x-0 -bottom-6 h-16 rounded-full bg-[#00A86B]/10 blur-3xl" />
              <div className="relative w-[340px] h-[460px] md:w-[400px] md:h-[540px] lg:w-[460px] lg:h-[600px] rounded-[2.5rem] overflow-hidden bg-white border-8 border-white shadow-[0_35px_80px_rgba(0,168,107,0.18)]">
                <img
                  src={profileImage}
                  alt="Abdourahamane AbdelWahab Ben Said"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-white/80" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#00A86B] rounded-full flex items-start justify-center p-2 bg-white/50 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#00A86B] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

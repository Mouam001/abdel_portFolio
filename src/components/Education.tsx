import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Diplôme d'Ingénieur",
      field: "Ingénierie Infrastructure Réseau, Systèmes & Cybersécurité",
      school: "Institut National Supérieur d'Informatique (INSI)",
      period: "2025 – 2026",
      description: "Formation d'ingénieur orientée infrastructures IT modernes, cybersécurité et systèmes distribués.",
      tags: ["Sécurité réseau", "Cloud", "DevSecOps", "Virtualisation", "Kubernetes"]
    },
    {
      degree: "Licence Professionnelle",
      field: "Génie Logiciel",
      school: "Institut Supérieur des Sciences et des Technologies de Mahajanga (ISSTM)",
      period: "2021 – 2022",
      description: "Formation orientée développement logiciel, conception d'applications et architecture logicielle.",
      tags: ["Développement", "Bases de données", "Architecture logicielle", "Algorithmique"]
    },
    {
      degree: "DUT",
      field: "Génie Informatique",
      school: "Institut Universitaire de Technologie (IUT), Comores",
      period: "2020 – 2021",
      description: "Formation de base en informatique couvrant programmation, réseaux et systèmes d'exploitation.",
      tags: ["Programmation", "Réseaux", "Systèmes d'exploitation"]
    }
  ];

  return (
    <section id="education" className="py-32 bg-[#f8fafc] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#EAF1FB] to-transparent rounded-full filter blur-3xl opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-16 text-center text-[#1e293b]" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            Formation
          </h2>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00A86B] via-[#00A86B]/50 to-transparent" />

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12 relative pl-14 sm:pl-20"
              >
                <div className="absolute left-5 top-0 w-6 h-6 bg-[#00A86B] rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <GraduationCap className="w-3 h-3 text-white" />
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 shadow-md border border-[#f1f5f9]">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h3 className="text-[#1e293b] mb-1" style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                        {edu.degree} – {edu.field}
                      </h3>
                      <p className="text-[#00A86B] text-sm font-medium mb-1">{edu.school}</p>
                    </div>
                    <span className="text-[#64748b] text-xs sm:text-sm whitespace-nowrap sm:ml-4 mt-1 sm:mt-0">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-[#64748b] mb-4 leading-relaxed text-sm">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {edu.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-[#00A86B]/10 text-[#00A86B] rounded-lg text-xs border border-[#00A86B]/20"
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

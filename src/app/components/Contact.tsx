import { motion } from "motion/react";
import { Mail, Linkedin, Send, Globe, Facebook } from "lucide-react";

const whatsappMessage = encodeURIComponent(
  "Bonjour M. Ben Said, je souhaite échanger avec vous au sujet d'une collaboration sur un projet de sécurité/infrastructure. Pouvez-vous me recontacter, s'il vous plaît ?",
);
const whatsappLink = `https://wa.me/261385013780?text=${whatsappMessage}`;

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#EAF1FB] to-transparent rounded-full filter blur-3xl opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="mb-6 text-[#1e293b]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Contact
          </h2>

          <p className="text-[#64748b] mb-12 leading-relaxed" style={{ fontSize: '1.125rem' }}>
            Intéressé par une collaboration ? Discutons de vos projets d'infrastructure et de sécurité.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <motion.a
              href="mailto:wahababdel2802@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-3 bg-white border border-[#e2e8f0] rounded-xl text-[#475569] hover:border-[#00A86B] hover:shadow-md transition-all duration-300 group shadow-sm"
            >
              <Mail className="w-5 h-5 text-[#00A86B]" />
              <span>wahababdel2802@gmail.com</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/abdelwahab28/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-3 bg-white border border-[#e2e8f0] rounded-xl text-[#475569] hover:border-[#00A86B] hover:shadow-md transition-all duration-300 group shadow-sm"
            >
              <Linkedin className="w-5 h-5 text-[#00A86B]" />
              <span>LinkedIn</span>
            </motion.a>
          </div>

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00A86B] text-white rounded-xl hover:bg-[#008f5c] transition-all duration-300 group shadow-lg shadow-[#00A86B]/20 hover:shadow-xl hover:shadow-[#00A86B]/30"
          >
            Contactez-moi via WhatsApp
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <p className="mt-8 mb-4 text-[#64748b]" style={{ fontSize: "1rem" }}>
            Découvrez mon parcours entrepreneurial et mes activités chez NovaKom.
          </p>

          <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://www.novakom.tech/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#e2e8f0] rounded-xl text-[#475569] hover:border-[#00A86B] hover:shadow-md transition-all duration-300 group shadow-sm"
            >
              <Globe className="w-5 h-5 text-[#00A86B]" />
              Site NovaKom
            </motion.a>

            <motion.a
              href="https://www.facebook.com/profile.php?id=61572129917797"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#e2e8f0] rounded-xl text-[#475569] hover:border-[#00A86B] hover:shadow-md transition-all duration-300 group shadow-sm"
            >
              <Facebook className="w-5 h-5 text-[#00A86B]" />
              Page Facebook
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

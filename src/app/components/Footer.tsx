import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-t from-[#F5F7FA] to-white border-t border-[#e2e8f0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-[#00A86B]" />
            <span className="text-[#1e293b]" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
              AbdelWahab Ben Said
            </span>
          </div>

          <p className="text-[#64748b]">
            Ingénieur Sécurité | DevSecOps | Infrastructure
          </p>

          <p className="text-[#00A86B] max-w-2xl italic" style={{ fontSize: '1rem' }}>
            "Sécuriser les infrastructures. Construire des systèmes résilients."
          </p>

          <div className="mt-6 pt-6 border-t border-[#e2e8f0] w-full text-center">
            <p className="text-[#64748b] text-sm">
              © 2026 AbdelWahab Ben Said. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

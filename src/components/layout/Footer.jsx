import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Heart } from "lucide-react";
import { personalInfo, socialLinks, Nav_Links } from "../../utils/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Baharah<span className="text-primary">.</span>
            </h3>

            <p className="text-white/60 leading-relaxed">
              Frontend developer passionate about creating modern,
              responsive and user-friendly web experiences with
              React and Next.js.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {Nav_Links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Get In Touch
            </h4>

            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors mb-6"
            >
              <Mail size={18} />
              {personalInfo.email}
            </a>

            <div className="flex gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300"
              >
                <FaGithub className="text-xl text-white" />
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300"
              >
                <FaLinkedin className="text-xl text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {year} Baharah Rostami. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-white/50 text-sm">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
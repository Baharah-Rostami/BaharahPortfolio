import FadeIn from "../animations/FadeIn";
import { ExternalLink } from "lucide-react";
import { certificates } from "../../data/Certificate";

export default function Certificates() {
    return (
        <section id="certificates" className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white">
                            Certificates
                        </h2>

                        <p className="mt-4 text-white/60">
                            Certifications that showcase my learning journey.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-8">
                    {certificates.map((certificate, index) => (
                        <FadeIn key={certificate.id} delay={index * 100}>
                            <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    className="w-full h-64 object-cover"
                                />

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-white">
                                        {certificate.title}
                                    </h3>

                                    <p className="text-white/60 mt-2">
                                        {certificate.issuer}
                                    </p>

                                    <p className="text-sm text-white/40 mt-1">
                                        {certificate.date}
                                    </p>

                                    <a
                                        href={certificate.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 mt-4 text-primary"
                                    >
                                        View Certificate
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
import { skills } from "../../data/Skills";
import * as Icons from "lucide-react";
import FadeIn from "../animations/FadeIn";

export default function Skills() {
  const skillCategories = {
    "Frontend Development": [
      skills.find((s) => s.name === "HTML"),
      skills.find((s) => s.name === "CSS"),
      skills.find((s) => s.name === "JavaScript"),
      skills.find((s) => s.name === "Tailwind CSS"),
      skills.find((s) => s.name === "React.js"),
      skills.find((s) => s.name === "Next.js"),
    ].filter(Boolean),

    "API & Data": [
      skills.find((s) => s.name === "REST APIs"),
    ].filter(Boolean),

    "Tools & Workflow": [
      skills.find((s) => s.name === "Git & GitHub"),
      skills.find((s) => s.name === "Responsive Design"),
      skills.find((s) => s.name === "Figma"),
      skills.find((s) => s.name === "Team Collaboration"),
    ].filter(Boolean),
  };

  const getProficiencyLevel = (level) => {
    const levels = {
      Expert: 90,
      Advanced: 80,
      Intermediate: 70,
    };

    return levels[level] || 60;
  };

  const getLevelColor = (level) => {
    const colors = {
      Expert:
        "text-[#8DFF69] bg-[#8DFF69]/10 border-[#8DFF69]/30",
      Advanced:
        "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
      Intermediate:
        "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    };

    return (
      colors[level] ||
      "text-gray-400 bg-gray-500/10 border-gray-500/30"
    );
  };

  return (
    <section
      id="skills"
      className="relative py-20 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn delay={100}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Icons.Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                My Expertise
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Skills & Technologies
            </h2>

            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Frontend technologies and tools I use to build responsive,
              accessible, and modern web applications with React, Next.js,
              Tailwind CSS, and REST APIs.
            </p>
          </div>
        </FadeIn>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(
            ([category, categorySkills], categoryIndex) => (
              <FadeIn
                key={category}
                delay={categoryIndex * 100}
              >
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="w-1 h-8 bg-linear-to-b from-primary to-primary/20 rounded-full" />
                    <h3 className="text-xl font-medium text-white">
                      {category}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-6">
                    {categorySkills.map((skill) => {
                      const IconComponent =
                        Icons[skill.icon] || Icons.Code2;

                      const proficiency =
                        getProficiencyLevel(skill.level);

                      return (
                        <div
                          key={skill.id}
                          className="space-y-3"
                        >
                          {/* Top Row */}
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="p-2 bg-white/5 rounded-lg">
                                <IconComponent className="w-4 h-4 text-primary" />
                              </div>

                              <div>
                                <h4 className="text-sm font-medium text-white">
                                  {skill.name}
                                </h4>

                                <p className="text-xs text-white/50">
                                  {skill.experience}
                                </p>
                              </div>
                            </div>

                            {/* Level Badge */}
                            <span
                              className={`shrink-0 text-xs px-3 py-1 rounded-full border ${getLevelColor(
                                skill.level
                              )}`}
                            >
                              {skill.level}
                            </span>
                          </div>

                          {/* Progress Bar */}
                          <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className="absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-primary to-primary/70 transition-all duration-1000 ease-out"
                              style={{
                                width: `${proficiency}%`,
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300 pointer-events-none" />
                </div>
              </FadeIn>
            )
          )}
        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 95 },
  { name: "Next.Js", level: 95 },
  { name: "JavaScript", level: 100 },
  { name: "TypeScript", level: 100 },
  { name: "Convex", level: 95 },
  { name: "Node.js", level: 85 },
  { name: "MongoDB", level: 95 },
  { name: "Inngest", level: 95 },
  { name: "Firebase", level: 95 },
  { name: "Docker", level: 85 },
  { name: "Tailwind CSS", level: 100 },
  { name: "REST APIs", level: 85 },
  { name: "Redux & Zustand", level: 90 },
  { name: "Git & GitHub", level: 100 },
];

function Skills() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>

      <div className="max-w-3xl mx-auto space-y-8 px-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="h-3 bg-black dark:bg-white rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
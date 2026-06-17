import Skills from "../components/Skills";

function About() {
  return (
    <div>
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800 dark:text-white text-center">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          Frontend Engineer with strong expertise in React, Next.js, and TypeScript, focused on building
fast, scalable, and production-ready web applications. Experienced in modern frontend
architecture, real-time data integration, authentication systems, and responsive UI
development. Proven ability to design and deliver end-to-end SaaS features, including
AI-powered workflows, background jobs, and API-driven platforms. Holds a Bachelor’s degree
in Information Technology, officially recognized as equivalent to a German Bachelor’s degree.
Committed to clean code, performance optimization, and creating intuitive, user-centered
experiences.
        </p>
      </section>

      <Skills />
    </div>
  );
}

export default About;
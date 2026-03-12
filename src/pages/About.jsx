import Skills from "../components/Skills";

function About() {
  return (
    <div>
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800 dark:text-white text-center">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          Frontend developer specializing in React, Next.js, and TypeScript.
        I build modern, scalable web applications with clean UI architecture and strong focus on performance and maintainability.
          I also have experience building full-stack features using Next.js including authentication and API routes.
        </p>
      </section>

      <Skills />
    </div>
  );
}

export default About;
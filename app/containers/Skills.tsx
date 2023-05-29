export default function Skills() {
  return (
    <section className="py-24">
      <h2 className="pb-12 text-center text-2xl font-bold uppercase tracking-widest text-secondary-light dark:text-secondary-dark">
        Skills
      </h2>
      <div className="flex max-w-5xl flex-col items-start px-12 text-xl text-secondary-light dark:text-secondary-dark md:mx-auto md:flex-row md:items-center md:justify-between">
        <ul className="list-disc">
          <li className="mx-3">
            <p>Javascript</p>
          </li>
          <li className="mx-3">
            <p>TypeScript</p>
          </li>
          <li className="mx-3">
            <p>React.js</p>
          </li>
        </ul>
        <ul className="list-disc">
          <li className="mx-3">
            <p>Next.js</p>
          </li>
          <li className="mx-3">
            <p>Remix.run</p>
          </li>
          <li className="mx-3">
            <p>Gatsby.js</p>
          </li>
        </ul>
        <ul className="list-disc">
          <li className="mx-3">
            <p>Material UI</p>
          </li>
          <li className="mx-3">
            <p>Redux</p>
          </li>
          <li className="mx-3">
            <p>React Hooks</p>
          </li>
        </ul>
        <ul className="list-disc">
          <li className="mx-3">
            <p>React Context</p>
          </li>
          <li className="mx-3">
            <p>HTML 5</p>
          </li>
          <li className="mx-3">
            <p>CSS 3</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

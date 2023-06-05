import { Link } from "@remix-run/react";
import { useLocales } from "~/lib/LocaleProvider";

export default function OpenSource({ prs }: { prs: any[] }) {
  const locales = useLocales();

  return (
    <section className="py-24">
      <h2 className="pb-12 text-center text-2xl font-bold uppercase tracking-widest text-secondary-light dark:text-secondary-dark">
        Recent Open Source Contributions
      </h2>
      {prs.map(({ node: { pullRequest } }) => {
        const formattedDate = new Intl.DateTimeFormat(locales, {
          year: "numeric",
          month: "short",
          day: "numeric",
          timeZone: "IST",
        }).format(new Date(pullRequest.createdAt));

        return (
          <div key={pullRequest.id} className="mx-auto mb-6 max-w-5xl">
            <h5 className="text-xl font-semibold uppercase text-secondary-light dark:text-secondary-dark">
              <Link
                to={pullRequest.repository.homepageUrl}
                className="hover:text-blue-300"
              >
                {pullRequest.repository.name} : {formattedDate}
              </Link>
            </h5>
            <p className="">{pullRequest.repository.description}</p>
            <p className="hover:text-blue-300">
              <Link to={pullRequest.permalink}>
                #{pullRequest.number}({pullRequest.state}): {pullRequest.title}
              </Link>
            </p>
          </div>
        );
      })}
    </section>
  );
}

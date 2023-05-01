import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import * as firstPost from "../blog/first-post.mdx";

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

export async function loader() {
  return json([postFromModule(firstPost)]);
}

export default function Index() {
  const posts = useLoaderData();

  return (
    <main>
      <header>
        <h1>All Posts</h1>
      </header>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
            {post.description ? (
              <p className="m-0">{post.description}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </main>
  );
}

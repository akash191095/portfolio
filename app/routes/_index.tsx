import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Home" }];

export default function Index() {
  return (
    <main className="relative min-h-screen bg-white ">
      <h1>Akash Agarwal</h1>
    </main>
  );
}

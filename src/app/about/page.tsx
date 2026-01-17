import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About page",
};

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between">
        <h1 className="text-4xl font-bold text-center mb-8">About</h1>
        <div className="space-y-4 text-center">
          <p className="text-lg">
            This is the about page.
          </p>
        </div>
      </div>
    </main>
  );
}

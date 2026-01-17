export default function Footer() {
  return (
    <footer className="border-t border-border-default mt-auto">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-text-secondary text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

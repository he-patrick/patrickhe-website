import { siteConfig } from "@/../config/site"

export default function Footer() {
  return (
    <footer className="mt-auto block pb-2 pt-4 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-700">
      I'd love to hear from you! <br />
      Feel free to drop me an email at: {" "}
      <a href="mailto:he.patrick2005@gmail.com" className="underline">
        he.patrick2005@gmail.com
      </a>
    </footer>
  );
}

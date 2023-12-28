import { siteConfig } from "@/../config/site"

export default function Footer() {
  return (
    <footer className="mt-auto block pb-2 pt-4 text-sm text-zinc-500 dark:text-zinc-400">
      Contact me: {" "}
      <a target="_blank" href={"he.patrick2005@gmail.com"} className="underline">
        Patrick He
      </a>
    </footer>
  )
}

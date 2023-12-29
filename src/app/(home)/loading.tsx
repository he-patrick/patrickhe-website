import { siteConfig } from "@/../config/site"

import { HeadingText } from "@/components/common/heading-text"
import { SocialMediaIcons } from "@/components/common/social-media-icons"
import { ProjectsSkeleton } from "@/components/loaders/projects-skeleton"

export default function Home() {
  return (
    <main className="py-4">
      <section className="space-y-4 py-4">
        <p className="font-light text-muted-foreground">Welcome to /he-patrick!</p>
        <p className="font-light">
          I'm a Computer Engineering student at the University of Waterloo, developing and exploring fullstack, firmware, and machine learning projects.
        </p>
        <p className="font-light">
          My main technologies are: {" "}
          <span className="font-semibold">Next.js</span>,{" "}
          <span className="font-semibold"></span>, React.js{" "}
          <span className="font-semibold">, and Arduino</span>.
        </p>
        <p className="font-light">
          My main languages are: {" "}
          <span className="font-semibold">Typescript</span>,{" "}
          <span className="font-semibold"></span>, C++{" "}
          <span className="font-semibold">, and Python</span>.
        </p>
        <SocialMediaIcons />
      </section>
      <section className="space-y-4 py-4">
        <HeadingText>Projects</HeadingText>
        <div className="flex flex-col items-end gap-4">
          <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
            <ProjectsSkeleton />
          </div>
          <a
            target="_blank"
            href={`${siteConfig.links.github}?tab=repositories`}
            className="text-sm underline"
          >
            See More...
          </a>
        </div>
      </section>
    </main>
  )
}

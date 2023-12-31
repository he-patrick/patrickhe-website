import { Star } from "lucide-react"
import { ExternalLink } from "lucide-react"

import { getRepo } from "@/lib/api/github"
import { getTextColor } from "@/lib/get-text-color"
import { Repo } from "@/types"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function getLanguageColor(language: string): string {
  const languageColors: {[key: string]: string} = {
    'HTML': '#d96b40', // HTML: Softer Orange
    'JavaScript': '#dab860', // JavaScript: Muted Yellow
    'Python': '#4B8BBE', // Python: Soft Blue
    'Java': '#a88532', // Java: Muted Brown
    'C#': '#4C8054', // C#: Soft Green
    'C++': '#d67b96', // C++: Soft Pink
    'CSS': '#7b6d95', // CSS: Muted Purple
    'Ruby': '#913832', // Ruby: Muted Red
    'Swift': '#d99058', // Swift: Soft Orange
    'Go': '#5DC9E2', // Go: Soft Blue
    'TypeScript': '#3178C6', // TypeScript: Light Blue
    // add other languages and their colors here
  };

  return languageColors[language] || '#7a7e83'; // Default color if language not found
}

export async function Projects() {

  let allData = (await getRepo()) as Repo[];

  // Define the names of the repositories you want to display
  const chosenRepos = ['hackthevalley8', 'hackwestern10', 'OnlinePredatorDetector', 'cam-tag', 'leetcode', 'patrickhe-website'];

  // Filter the repositories
  const data = chosenRepos.map(repoName => allData.find(repo => repo.name === repoName)).filter(Boolean) as Repo[];

  return (
    <>
      {data.map((project, index) => (
        <Card key={index} className="flex flex-col justify-between">
          <CardHeader>
            <div className="flex justify-between">
              <a
                target="_blank"
                href={project.html_url}
                rel="noopener noreferrer"
                aria-label={project.name}
              >
                <CardTitle className="text-base hover:underline">
                  {project.name}
                </CardTitle>
              </a>
              <a
                target="_blank"
                href={project.homepage || project.html_url}
                rel="noopener noreferrer"
                aria-label="Visit the project's live url/repo"
              >
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
            </div>
            <CardDescription className="line-clamp-2 text-sm font-light">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <Badge
              style={{
                backgroundColor: getLanguageColor(project.language),
                color: `${getTextColor(getLanguageColor(project.language))}`,
              }}
            >
              {project.language}
            </Badge>
            <CardDescription className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              {project.stargazers_count}
            </CardDescription>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}

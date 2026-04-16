"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/data/portfolio";

type ProjectGalleryProps = {
  projects: Project[];
};

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((project) => project.category)));
    return ["All", ...unique];
  }, [projects]);

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openProject, setOpenProject] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <>
      <div className="mb-5 flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              className={`filter-chip ${isActive ? "is-active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <article
            key={project.name}
            className="project-card-reveal overflow-hidden rounded-2xl border border-[#d6deea] bg-white"
            style={{ animationDelay: `${Math.min(index, 8) * 70}ms` }}
          >
            <div className="space-y-4 p-5">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#5676a3]">{project.period}</p>
                <button
                  type="button"
                  onClick={() => setOpenProject((prev) => (prev === project.name ? null : project.name))}
                  className="mt-1 cursor-pointer text-left text-xl font-extrabold text-[#12233f] underline-offset-4 hover:underline"
                >
                  {project.name}
                </button>
                <p className="mt-2 inline-flex rounded-full bg-[#e8f1ff] px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-[#2f578b]">
                  {project.category}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#2a446e]">{project.summary}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>

              {openProject === project.name ? (
                <div className="rounded-xl border border-[#d6deea] bg-[#f9fbff] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3f6396]">GitHub and Project Links</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[#2a446e]">
                    {project.outcomes.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2 text-sm font-bold">
                    {project.links.code ? (
                      <a className="action-btn primary !px-3 !py-2" href={project.links.code} target="_blank" rel="noreferrer">
                        Open GitHub
                      </a>
                    ) : null}
                    {project.links.code ? (
                      <a className="action-btn ghost !px-3 !py-2" href={project.links.code} target="_blank" rel="noreferrer">
                        Code
                      </a>
                    ) : null}
                    {project.links.data ? (
                      <a className="action-btn ghost !px-3 !py-2" href={project.links.data} target="_blank" rel="noreferrer">
                        Data
                      </a>
                    ) : null}
                    {project.links.image ? (
                      <a className="action-btn ghost !px-3 !py-2" href={project.links.image} target="_blank" rel="noreferrer">
                        Image
                      </a>
                    ) : null}
                    {project.links.live ? (
                      <a className="action-btn ghost !px-3 !py-2" href={project.links.live} target="_blank" rel="noreferrer">
                        Live
                      </a>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

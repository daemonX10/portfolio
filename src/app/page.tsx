import Image from "next/image";
import ProjectGallery from "@/components/project-gallery";
import StickyNav from "@/components/sticky-nav";
import {
  certificates,
  education,
  experience,
  keyAchievements,
  primarySocialOrder,
  profile,
  projects,
  quickProof,
  skillGroups,
  socialCards,
} from "@/data/portfolio";

type GitHubUser = {
  public_repos: number;
  followers: number;
  following: number;
};

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
  fork: boolean;
  language: string | null;
};

async function getGitHubProof() {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch("https://api.github.com/users/daemonX10", {
        next: { revalidate: 21600 },
      }),
      fetch("https://api.github.com/users/daemonX10/repos?per_page=100&sort=updated", {
        next: { revalidate: 21600 },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return null;
    }

    const user = (await userRes.json()) as GitHubUser;
    const repos = (await reposRes.json()) as GitHubRepo[];

    const topRepos = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 3)
      .map((repo) => ({
        name: repo.name,
        href: repo.html_url,
        stars: repo.stargazers_count,
        language: repo.language ?? "Mixed",
      }));

    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

    return {
      user,
      totalStars,
      topRepos,
    };
  } catch {
    return null;
  }
}

export default async function Home() {
  const githubProof = await getGitHubProof();

  return (
    <div className="portfolio-shell">
      <div className="grain-overlay" aria-hidden="true" />

      <main className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-8 sm:py-10 lg:gap-10">
        <StickyNav socialLinks={primarySocialOrder} resumeHref={profile.links.resume} />

        <section className="section-card reveal px-5 py-7 sm:px-8 sm:py-10">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="chip">Open to AI/ML and Data Roles</div>
            <div className="flex flex-wrap gap-2 text-sm font-semibold text-[#2d4e80]">
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#355c93]">
                {profile.location}
              </p>
              <h1 className="display-heading mt-2 text-5xl leading-[0.9] text-[#102347] sm:text-7xl">
                {profile.name}
              </h1>
              <h2 className="mt-3 text-lg font-bold text-[#284d7f] sm:text-xl">{profile.role}</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#253e65] sm:text-lg">
                {profile.summary}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a className="action-btn primary" href={profile.links.resume} target="_blank" rel="noreferrer">
                  Resume
                </a>
                {primarySocialOrder.map((item) => (
                  <a key={item.label} className="action-btn ghost" href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="impact-card grid gap-3 p-4 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9fc5ff]">Proof Snapshot</p>
              <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/8 p-3">
                <Image
                  src={profile.avatar}
                  alt={`${profile.name} profile image`}
                  width={56}
                  height={56}
                  className="rounded-full border border-white/20"
                />
                <div>
                  <p className="text-sm font-bold text-white">{profile.name}</p>
                  <p className="text-xs text-[#b6d2ff]">AI/ML Engineer · Mumbai</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {quickProof.map((item) => (
                  <div key={item.label} className="rounded-xl bg-white/8 p-3">
                    <p className="text-base font-bold text-white">{item.value}</p>
                    <p className="text-xs text-[#b6d2ff]">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.17em] text-[#9fc5ff]">Live GitHub</p>
                {githubProof ? (
                  <div className="mt-2 space-y-2 text-xs text-[#dbe9ff]">
                    <p>{githubProof.user.public_repos} repos · {githubProof.totalStars} stars · {githubProof.user.followers} followers</p>
                    {githubProof.topRepos[0] ? (
                      <a
                        className="block rounded-lg border border-white/15 px-2 py-1 hover:bg-white/10"
                        href={githubProof.topRepos[0].href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Top repo: {githubProof.topRepos[0].name} · {githubProof.topRepos[0].stars} stars
                      </a>
                    ) : null}
                  </div>
                ) : (
                  <p className="mt-2 text-xs text-[#dbe9ff]">Live metrics unavailable right now.</p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-card reveal delay-1 px-5 py-7 sm:px-8 sm:py-10">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#355c93]">Featured Work</p>
              <h3 className="display-heading text-4xl text-[#102347] sm:text-5xl">Projects with Code, Data, and Media</h3>
            </div>
          </div>
          <ProjectGallery projects={projects} />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="section-card reveal delay-2 px-5 py-7 sm:px-8 sm:py-9">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#355c93]">Experience</p>
            <h3 className="display-heading mt-1 text-4xl text-[#102347] sm:text-5xl">Hands-on Experience</h3>

            <div className="mt-5 space-y-4">
              {experience.map((item) => (
                <div key={item.title} className="experience-card rounded-2xl border border-[#d6deea] bg-[#f9fbff] p-4">
                  <h4 className="text-lg font-bold text-[#152c50]">{item.title}</h4>
                  <p className="text-sm font-semibold text-[#3f6396]">
                    {item.company} · {item.period}
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[#274472]">
                    {item.details.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          <article id="skills" className="section-card reveal delay-3 px-5 py-7 sm:px-8 sm:py-9">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#355c93]">Skills</p>
            <h3 className="display-heading mt-1 text-4xl text-[#102347] sm:text-5xl">Technical Stack</h3>

            <div className="mt-6 grid gap-3">
              {skillGroups.map((group) => (
                <div key={group.group} className="skill-block rounded-2xl border border-[#d6deea] bg-[#f9fbff] px-4 py-3">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-[#3b6397]">{group.group}</h4>
                    <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#3f6396]">
                      {group.value} · {group.skills.length} skills
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#2a446e]">
                    {[...group.skills].sort((a, b) => a.localeCompare(b)).join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="section-card reveal px-5 py-7 sm:px-8 sm:py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#355c93]">Achievements</p>
          <h3 className="display-heading mt-1 text-4xl text-[#102347] sm:text-5xl">Highlights and Wins</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {keyAchievements.map((item) => (
              <article key={item} className="achievement-card rounded-2xl border border-[#d6deea] bg-[#f9fbff] p-4">
                <p className="text-sm leading-7 text-[#2a446e]">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-card reveal px-5 py-7 sm:px-8 sm:py-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#355c93]">Certificates</p>
              <h3 className="display-heading mt-1 text-4xl text-[#102347] sm:text-5xl">Learning Credentials</h3>
              <div className="mt-5 grid gap-4">
                {certificates.map((cert) => (
                  <article key={cert.title} className="achievement-card rounded-2xl border border-[#d6deea] bg-[#f9fbff] p-4">
                    <h4 className="text-lg font-bold text-[#12233f]">{cert.title}</h4>
                    <p className="mt-1 text-sm font-semibold text-[#3f6396]">{cert.issuer}</p>
                    <p className="mt-2 text-sm leading-6 text-[#2a446e]">{cert.note}</p>
                    <a className="action-btn ghost mt-4 inline-flex !px-3 !py-2" href={cert.href} target="_blank" rel="noreferrer">
                      View Certificates
                    </a>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#355c93]">Education</p>
              <h3 className="display-heading mt-1 text-4xl text-[#102347] sm:text-5xl">Academic Background</h3>
              <div className="mt-5 grid gap-3">
                {education.map((item) => (
                  <article key={item.level} className="achievement-card rounded-2xl border border-[#d6deea] bg-[#f9fbff] px-4 py-3">
                    <div className="grid items-center gap-1 sm:grid-cols-[130px_1fr_auto]">
                      <p className="text-sm font-bold text-[#12233f]">{item.level}</p>
                      <p className="text-sm font-semibold text-[#3f6396]">{item.institute}</p>
                      <p className="text-sm font-semibold text-[#2a446e]">{item.result}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="profiles" className="section-card reveal px-5 py-7 sm:px-8 sm:py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#355c93]">Public Profiles</p>
          <h3 className="display-heading mt-1 text-4xl text-[#102347] sm:text-5xl">Where You Can Verify Everything</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {socialCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-[#d6deea] bg-[#f9fbff] p-4 transition hover:-translate-y-0.5"
              >
                <p className="text-lg font-extrabold text-[#12233f]">{card.label}</p>
                <p className="mt-2 text-sm leading-6 text-[#2a446e]">{card.blurb}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="section-card reveal px-5 py-8 sm:px-8 sm:py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#355c93]">Contact</p>
          <h3 className="display-heading mt-1 text-4xl text-[#102347] sm:text-5xl">Let&apos;s Build Something Useful</h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#2a446e] sm:text-base">
            I am available for AI/ML engineering, data science, and data engineering collaborations. Reach out with ideas, roles, or project scopes.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="action-btn primary" href={profile.links.mailto}>
              {profile.email}
            </a>
            <a className="action-btn ghost" href={profile.links.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="action-btn ghost" href={profile.links.resume} target="_blank" rel="noreferrer">
              View Resume
            </a>
            <a className="action-btn ghost" href="/resume/download">
              Download Resume
            </a>
            {primarySocialOrder.map((item) => (
              <a key={item.label} className="action-btn ghost" href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))}
            <a className="action-btn ghost" href={profile.links.leetcode} target="_blank" rel="noreferrer">
              LeetCode
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

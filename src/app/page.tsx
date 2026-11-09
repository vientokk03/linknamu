import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

// 더미 데이터 — 실제 내용은 나중에 교체
const profile = {
  name: "홍길동",
  bio: "개발과 기록을 좋아하는 크리에이터",
};

const links = [
  { title: "GitHub", url: "https://github.com" },
  { title: "LinkedIn", url: "https://www.linkedin.com" },
  { title: "Blog", url: "https://example.com/blog" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-6 py-12">
      <Profile name={profile.name} bio={profile.bio} />
      <ul className="mt-10 flex w-full flex-col gap-4">
        {links.map((link) => (
          <li key={link.title}>
            <LinkCard title={link.title} url={link.url} />
          </li>
        ))}
      </ul>
    </main>
  );
}

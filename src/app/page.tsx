import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { BlogIcon, GithubIcon, LinkedinIcon } from "@/components/icons";

// TODO: 더미 데이터. 실제 프로필/링크 데이터로 교체 예정
const profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  avatarInitial: "김",
};

const links = [
  { title: "GitHub", url: "https://github.com/", icon: <GithubIcon /> },
  { title: "LinkedIn", url: "https://linkedin.com/", icon: <LinkedinIcon /> },
  { title: "Blog", url: "https://example.com/blog", icon: <BlogIcon /> },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 px-6 py-16">
      <ProfileHeader
        name={profile.name}
        bio={profile.bio}
        avatarInitial={profile.avatarInitial}
      />
      <div className="flex w-full max-w-sm flex-col gap-5">
        {links.map((link) => (
          <LinkCard key={link.title} {...link} />
        ))}
      </div>
    </main>
  );
}

type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarInitial: string;
};

export default function ProfileHeader({
  name,
  bio,
  avatarInitial,
}: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gray-200 text-4xl font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-100">
        {avatarInitial}
      </div>
      <h1 className="text-xl font-bold text-foreground">{name}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">{bio}</p>
    </div>
  );
}

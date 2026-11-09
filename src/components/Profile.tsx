type ProfileProps = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt={`${name} 프로필 사진`}
          className="h-28 w-28 rounded-full border-2 border-gray-800 object-cover"
        />
      ) : (
        <div
          aria-label={`${name} 프로필 사진`}
          className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-gray-800 bg-gray-200 text-4xl font-bold text-gray-600"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-6 text-2xl font-bold">{name}</h1>
      <p className="mt-2 text-sm text-gray-500">{bio}</p>
    </div>
  );
}

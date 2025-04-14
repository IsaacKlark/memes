import { useMemes } from '../useMemes';

function MemeList() {
  const [memes] = useMemes();
  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-4">
      {memes.map(meme => (
        <div key={meme.id} className="border p-2 rounded shadow">
          <img src={meme.image} alt={meme.name} className="w-full h-40 object-cover" />
          <h3 className="mt-2 text-lg font-bold">{meme.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default MemeList;
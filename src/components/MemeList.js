import { useMemes } from '../useMemes';
import {
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@heroui/react';
function MemeList() {
  const [memes] = useMemes();
  return (
    <div className="card-wrapper">
      {memes.map(meme => (
        <Card className="max-w-[340px]" key={meme.id}>
          <CardHeader className="justify-between">
            <div className="flex gap-5">

              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">{meme.name}</h4>

              </div>
            </div>

          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-400">
            <Image src={meme.image} alt={meme.name} width={250} />
          </CardBody>
          <CardFooter className="gap-3">
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">{meme.likes}</p>
              <p className=" text-default-400 text-small">Likes</p>
            </div>
            <div className="flex gap-1">
              <a target="_blank" rel="noopener noreferrer" href={meme.image} className="card_link text-small tracking-tight text-default-400">
                source
              </a>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default MemeList;
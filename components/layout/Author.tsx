import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface AuthorProps {
  name: string;
  biography: string;
  link?: string;
  image: StaticImageData;
}

const Author: React.FC<AuthorProps> = ({ name, biography, link, image }) => {
  return (
    <div className={'flex gap-3 justify-start items-center'}>
      {image &&
        <div className={'relative w-20 h-20 rounded-full overflow-hidden'}>
          <Image fill src={image} alt={`Portrait photo of ${name}.`} style={{ objectFit: 'cover' }} />
        </div>
      }
      <div>
        {
          link ? (
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <p>{name}</p>
            </Link>
          ) : (
            <p>{name}</p>
          )
        }
        {biography && <p>{biography}</p>}
      </div>
    </div>
  );
};

export default Author;

import Link from 'next/link';

interface BrickProps {
  text: string;
  link?: string;
  bgClassName?: string;
  textClassNames?: string;
}

const Brick: React.FC<BrickProps> = ({ text, link, bgClassName = 'bg-transparent', textClassNames = 'text-black' }) => {
  return (
    <>
      {link && link !== '' ? (
        <Link href={link} target={'_blank'} rel={'noopener noreferrer'}>
          <span className={`px-2 py-1 text-xs sm:text-sm ${bgClassName} ${textClassNames} hover:opacity-70`}>{text}</span>
        </Link>
      ) : (
        <span className={`px-2 py-1 text-xs sm:text-sm ${bgClassName} ${textClassNames}`}>{text}</span>
      )
      }
    </>
  );
};

export default Brick;

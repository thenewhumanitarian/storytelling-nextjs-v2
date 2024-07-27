import Image from "next/image"

// Import images from ./images folder
import HeaderImage from "./images/aDJI_0914.jpg"

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <div>
      <div className={'relative w-full h-intro'}>
        <Image style={{ objectFit: 'cover' }} fill src={HeaderImage} alt={'Header image showing floods in Bangladesh.'} placeholder="blur" quality={85} />
      </div>
    </div>
  )
}

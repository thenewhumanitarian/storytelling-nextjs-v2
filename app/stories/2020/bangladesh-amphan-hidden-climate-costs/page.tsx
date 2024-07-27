import Image from "next/image"
import Link from "next/link"

import TextContainer from "@/components/layout/TextContainer"
import Brick from "@/components/layout/Brick"
import Author from "@/components/layout/Author"
import DateLine from "@/components/typography/DateLine"

// Import images from ./images folder
import HeaderImage from "./images/aDJI_0914.jpg"
import AuthorImage from "./images/author-photo.png"

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  console.log(AuthorImage)

  return (
    <div>
      {/* Intro image */}
      <div className={'relative w-full h-intro'}>
        <Image style={{ objectFit: 'cover' }} fill src={HeaderImage} alt={'Header image showing floods in Bangladesh.'} placeholder="blur" quality={85} />
      </div>
      {/* Bricks in intro */}
      <TextContainer classNames={'-mt-20 sm:-mt-32 bg-white'}>
        <div className={'mb-3 flex flex-col sm:flex-row gap-2'}>
          <Brick
            text={'Environment and Disasters'}
            bgClassName={'bg-black'}
            textClassNames={'text-white font-semibold'}
            link={'https://www.thenewhumanitarian.org/environment-and-disasters'}
          />
          <div className={'flex flex-row gap-2'}>
            <Brick
              text={'Photo feature'}
              bgClassName="bg-zinc-50"
              textClassNames={'font-semibold'}
              link={'https://www.thenewhumanitarian.org/photo-feature'}
            />
            <Brick
              text={'9 December 2020'}
              bgClassName="bg-zinc-50 sm:bg-transparent"
              link={'https://www.thenewhumanitarian.org/photo-feature'}
            />
          </div>
        </div>
        {/* Title and subtitle */}
        <h1>Bangladesh’s hidden climate costs</h1>
        <h2>‘We are not able to build our houses again.’</h2>
        {/* Author */}
        <div className={'pt-8 pb-12'}>
          <Author
            name={'Zakir Hossain Chowdhury'}
            link={'https://www.thenewhumanitarian.org/authors/zakir-hossain-chowdhury'}
            biography={'Dhaka-based photojournalist covering social issues, climate change, and refugees.'}
            image={AuthorImage}
          />
        </div>
        <DateLine text={'KHULNA, Bangladesh'} />
        <p>
          Coastal Bangladesh was lashed by a punishing storm this year, then
          submerged by monsoon floods. The damages linger long after.
        </p>
        <p>
          Cyclone Amphan tore across Bangladesh’s southwestern coast in May,
          and severe floods inundated a quarter of the country weeks later.
        </p>
        <p>
          Photographer Zakir Hossain Chowdhury’s images show how the damage
          endures. Battered communities in parts of Khulna district, a strip
          of coastal wetlands, are still living in temporary homes on
          embankments, or in emergency storm shelters meant to house people
          for days – not weeks or months.
        </p>
        <p>
          Amphan smashed open kilometres of embankments protecting
          sub-districts like Koyra and Assasuni. The barriers, which keep
          tidal waters at bay, haven’t been repaired, leaving communities
          exposed to daily floods that rush in with each high tide.
        </p>
        <p>
          The fallout goes beyond the physical damage. A chain of disasters
          – including a{' '}
          <Link
            target='_blank'
            rel='noreferrer noopener'
            href='https://www.thenewhumanitarian.org/analysis/2019/07/04/india-mass-cyclone-evacuations-saved-lives-not-livelihoods'
          >
            pair
          </Link>{' '}
          of{' '}
          <Link
            target='_blank'
            rel='noreferrer noopener'
            href='https://www.thenewhumanitarian.org/news/2019/11/28/Bangladesh-Bhasan-Char-Rohingya-island-camp'
          >
            storms
          </Link>{' '}
          last year – have drained income and shattered livelihoods. Child
          marriage is on the rise as families struggle to cope, and as
          schools remain closed due to the coronavirus pandemic. Tired of
          rebuilding, some families are deciding to leave. This is a{' '}
          <Link
            target='_blank'
            rel='noreferrer noopener'
            href='https://www.thenewhumanitarian.org/2019/03/05/how-dire-climate-displacement-warnings-are-becoming-reality-bangladesh'
          >
            migration pattern that has been repeated across the country
          </Link>
          , each time disasters chip away at income or destroy homes and
          fields.
        </p>
        <p>
          Climate change is supercharging extreme weather, adding to the
          already ample risks people on the coast have lived with for
          generations. Researchers say global heating makes high-intensity
          storms like Amphan{' '}
          <Link
            target='_blank'
            rel='noreferrer noopener'
            href='https://www.researchgate.net/publication/324993610_Impact_of_Climate_Change_on_Tropical_Cyclones_Frequency_and_Intensity_on_Indian_Coasts'
          >
            more common
          </Link>{' '}
          and more damaging, adding to heavier rains, sea-level rise,
          accelerated coastal erosion, and other climate change impacts.
        </p>
        <p>
          Syed Sheikh, 42, isn’t willing to live with the risk any longer.
          Months after Amphan hit, he decided to pack up his life on the
          coast, moving further inland to a town where he hoped his family
          would be safer.
        </p>
        <p>
          He is tired of the constant rebuilding. “Our house was damaged for
          the eighth time in my life,” he said.
        </p>
      </TextContainer>
    </div>
  )
}

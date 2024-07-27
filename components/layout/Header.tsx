import ShareIcons from '@/components/layout/ShareIcons'
import HeaderLogo from '../svg/HeaderLogo'

const HeaderComponent = ({ shareProps }: { shareProps: object }) => {
  return (
    <nav className={'w-full h-20 grid grid-cols-3 shadow-lg items-center'}>
      <div className="relative">
        <ShareIcons shareProps={shareProps} />
      </div>
      <div className="flex items-center justify-center">
        <div className={'w-40'}>
          <HeaderLogo />
        </div>
      </div>
      <div className={'flex items-center justify-end pr-4 sm:pr-5'}>
        <p className={'hidden sm:block font-sectra font-bold text-lg'}>
          Journalism from the heart of crises
        </p>
        <p className={'block sm:hidden font-roboto font-bold text-xs bg-zinc-50 px-2 py-1 text-zinc-400'}>INTERACTIVE</p>
      </div>
    </nav>

  )
}

export default HeaderComponent

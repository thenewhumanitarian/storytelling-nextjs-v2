const TextContainer = (({ children, classNames }: { children: React.ReactNode, classNames?: string }) => {
  return (
    <div className={`relative max-w-xs sm:max-w-3xl mx-auto p-4 ${classNames}`}>
      {children}
    </div>
  )
})

export default TextContainer



const Links = () => {
    const items = ["Home","Services","Portfolio","Contact","About"]
  return (
    <div className="absolute w-full h-full flex flex-col items-center justify-center gap-5 text-[1.5rem]">
      {items.map((item)=>{
        return(
            <a href={`#${item}`} key={item}>{item}</a>
        )
      })}
    </div>
  )
}

export default Links

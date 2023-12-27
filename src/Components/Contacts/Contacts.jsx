
const Contacts = () => {
  return (
    <div className='contacts flex items-center gap-12 max-w-[85.375rem] m-auto h-full'>
        <div className="textContainer flex flex-1 flex-col gap-10">
            <h1 className="text-[7rem] leading-[6rem]">Let's do it <br /> to gether</h1>
            <div className="item">
                <h2 className="font-bold text-[1.5rem] leading-5">Mail</h2>
                <span className=" font-thin">hello@garrix.com</span>
            </div>
            <div className="item">
                <h2 className="font-bold text-[1.5rem] leading-5">Address</h2>
                <span className=" font-thin">Nyamirambo Nyarugenge</span>
            </div>
            <div className="item">
                <h2 className="font-bold text-[1.5rem] leading-5">Phone</h2>
                <span className=" font-thin">+250789438437</span>
            </div>
        </div>
        <div className="formContainer flex-1">
            <form className="flex flex-col gap-5">
                <input type="text" required placeholder="name"  className="p-5 bg-transparent border-white border rounded"/>
                <input type="email" required placeholder="email"  className="p-5 bg-transparent border-white border rounded"/>
                <textarea rows="8" placeholder="message" className="p-5 bg-transparent border-white border rounded"/>
                <button className="p-4 cursor-pointer bg-[#f99e1b] rounded">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contacts

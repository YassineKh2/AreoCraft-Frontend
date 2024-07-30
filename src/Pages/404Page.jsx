export default function Page404(){
    return (
        <>
            <div className="bg-gradient-to-b from-[#97E2FA] to-[#D0D8F2] h-screen overflow-hidden">
                <img src="/imgs/planepath.png" className="absolute w-[60vh] " alt="plane path"/>
                <div className="flex flex-col items-center">
                    <h1 className="font-regular text-[23vh] lg:text-[25vh] font-['Inter'] ">404</h1>
                    <p className="text-[5vh] -mt-10  lg:-mt-16 ">Page not found</p>
                </div>
                <img src="/imgs/planepath.png" className=" w-[60vh] flex self-end " alt="plane path"/>
            </div>
        </>
    )
}
import React from 'react'

const Header = () => {
    return (
        <section className="relative text-white md:grid md:grid-cols-2 max-w-[500px] md:max-w-[700px] lg:max-w-[800px] w-full p-4 mx-auto md:-translate-x-[100px]">
            <div className="relative">
                <p className="text-center md:hidden text-[22px] mt-[30px]">Hello! I Am<span className="text-[#A362FF]">Rafael Solsol</span></p>
                
                <img className="mx-auto w-[350px] h-[350px]" src="/images/avatar.png" alt="" />

                <img className="absolute w-[100px] h-[130px] top-0 left-1/2 md:top-[55px] md:left-auto md:right-0 md:float-left"  src="/images/arrow.png" alt="" />
            </div>
                
                
            <section className="grid place-content-center lg:w-[500px] lg:h-[300px] gap-2 px-5 md:px-0 relative md:float-left">
                <p className="hidden text-center md:block md:text-left text-[22px] mt-[30px] md:mt-[-20px]">Hello! I Am <span className="text-[#A362FF]">Rafael Solsol</span></p>
                <p className="text-[18px] underline">A Designer who</p>
                <h2 className="text-[32px]">Judges a book by its 
                <span className="relative text-[#A362FF]"><div className="relative inline-block mx-[8px]"><div className="flex"> cover
                <img className="absolute h-[50px] w-[100px]" src="/images/elipse.png" alt="" /></div></div></span>...</h2>
                    
                <p className="text-[14px]">Because if the cover does not impress you what else can?</p>
            </section>   
        </section>
    )
}

export default Header

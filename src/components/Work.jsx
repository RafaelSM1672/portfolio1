import React from 'react'

const Work = () => {
    return (
        <section className="flex justify-center p-4">
            <div className="max-w-[500px] md:max-w-[700px] lg:max-w-[800px] w-full">

                <h2 className="text-[32px] mb-10">Work Experience</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <article className="flex flex-row">

                        <div className="w-1/3 flex items-center justify-center">
                            <img className="max-h-full max-w-full object-cover object-left" src="/images/star.png" alt="" />
                        </div>

                        <div className="w-2/3 px-1">
                            <h3 className="text-left">CIB on the Mobile</h3>
                            <p className="text-left">Take your client onboard seamlessly by our amazing too of digital onboard process</p>

                            <div className="flex justify-between items-center mt-4">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded">Learn More</button>
                            </div>
                            
                        </div>
                    </article>

                    <article className="flex flex-row">

                        <div className="w-1/3 flex items-center justify-center">
                            <img className="max-h-full max-w-full object-cover object-left" src="/images/cup.png" alt="" />
                        </div>

                        <div className="w-2/3 px-1">
                            <h3 className="text-left">CIB on the Mobile</h3>
                            <p className="text-left">Take your client onboard seamlessly by our amazing too of digital onboard process</p>

                            <div className="flex justify-between items-center mt-4">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded">Learn More</button>
                            </div>
                            
                        </div>
                    </article>

                    <article className="flex flex-row">

                        <div className="w-1/3 flex items-center justify-center">
                            <img className="max-h-full max-w-full object-cover object-left" src="/images/foco.png" alt="" />
                        </div>

                        <div className="w-2/3 px-1">
                            <h3 className="text-left">CIB on the Mobile</h3>
                            <p className="text-left">Take your client onboard seamlessly by our amazing too of digital onboard process</p>

                            <div className="flex justify-between items-center mt-4">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded">Learn More</button>
                            </div>
                            
                        </div>
                    </article>

                    <article className="flex flex-row">

                        <div className="w-1/3 flex items-center justify-center">
                            <img className="max-h-full max-w-full object-cover object-left" src="/images/gotero.png" alt="" />
                        </div>

                        <div className="w-2/3 px-1">
                            <h3 className="text-left">CIB on the Mobile</h3>
                            <p className="text-left">Take your client onboard seamlessly by our amazing too of digital onboard process</p>

                            <div className="flex justify-between items-center mt-4">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded">Learn More</button>
                            </div>
                            
                        </div>
                    </article>
                </div>

                
            </div>
        </section>
    )
}

export default Work

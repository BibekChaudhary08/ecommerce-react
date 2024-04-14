
const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' >Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-pink-500'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-1/312051956_1233241464200445_1929369331878786864_n.jpg?stp=dst-jpg_s320x320&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Y_2LfAo-1JUAb4xLB6S&_nc_ht=scontent.fktm19-1.fna&oh=00_AfBjDLcsRImOX2Nwnjh64xXx8-l35F44U_DFY4yDdojUfw&oe=661D81A3" />
                                <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sequi possimus minima veritatis praesentium ipsam hic laborum atque, nulla quam neque dignissimos eligendi vero facilis vel. Pariatur iste dolore est?</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Bibek Chaudhari</h2>
                                <p className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712793600&semt=sph" />
                                <p className="leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit sequi, dolor asperiores natus, voluptatem nostrum sed perferendis commodi alias hic optio recusandae veniam molestias eius perspiciatis dolore ut tempora.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Sanjog Dangal</h2>
                                <p className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://firebasestorage.googleapis.com/v0/b/devknus-official-database.appspot.com/o/images%2FScreenshot%202023-07-07%20at%202.20.32%20PM-modified.png?alt=media&token=324ddd80-2b40-422c-9f1c-1c1fa34943fa" />
                                <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis mollitia odio tempore voluptate atque minima, rem omnis voluptates repudiandae molestiae vel iure doloremque amet illum impedit error placeat magnam.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Nishant Chapagai</h2>
                                <p className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial
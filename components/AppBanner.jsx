import React from 'react'

const AppBanner = () => {
  return (
    <section className='mt-20 mb-20'>
        <div className='my-container'>
            <div className='w-full flex flex-col items-center justify-center sm:p-20 p-8 relative h-auto sm:h-[336px] rounded-4xl bg-primary sm:bg-[url(./banner-light.png)] sm:dark:bg-[url(./banner-dark.png)] dark:border dark:border-white/25'>
            <div className='sm:hidden visible h-61 bg-white/25 pl-6 pr-6 rounded-4xl mb-5'>
                <img src="./img/icons/app/banner.png" className='transform -translate-y-20'  alt="" />
            </div>
                <p className='sm:text-center max-w-[700px] text-[20px] md:text-[32px] font-semibold  md:font-bold text-white'>برنامه سفرکن را دانلود کنید تا از آخرین ویژگی های این برنامه در تلفن همراه بهره مند شوید</p>
                <div className='flex flex-col-reverse sm:flex-row w-full items-center justify-center gap-10 mt-15'>
                    <button className='flex sm:w-fit w-full items-center justify-center p-2 cursor-pointer rounded-full gap-1 bg-white'>
                        <span className='font-semibold text-sm'>دریافت از</span>
                        <img src="./img/icons/app/bazar-name.png" alt="" />
                        <img src="./img/icons/app/bazar-icon.png" alt="" />
                    </button>
                    <button className='flex sm:w-fit w-full justify-center items-center p-2 cursor-pointer rounded-full gap-1 bg-white'>
                        <img src="./img/icons/app/market-icon.png" alt="" />
                        <span className='font-semibold text-sm'>دریافت از</span>
                        <span className='font-bold text-2xl'>مارکت</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AppBanner
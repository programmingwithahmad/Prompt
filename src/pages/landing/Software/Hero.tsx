import { PopoverLayout } from '@/components'
import { Link } from 'react-router-dom'

//images
import whiteWave from '@/assets/images/shapes/white-wave.svg'
import desktop from '@/assets/images/hero/desktop.png'

const Hero = () => {
	const PopoverToggle = () => {
		return <i className="fa-solid fa-angle-down ms-2" />
	}
	return (
		<section className="bg-gradient-to-t from-yellow-50/80 relative">
			<section className="relative py-16 sm:py-24 md:py-44">
				<div className="container">
					<div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
						<div className="order-2 lg:order-1 text-center sm:text-start">
							<h1 className="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-7">
								Speed up your{' '}
								<span className="relative z-0 after:bg-yellow-200 after:-z-10 after:absolute after:h-6 after:w-full after:bottom-0 after:end-0">
									performance
								</span>
							</h1>
							<p className="text-gray-500">
								Prompt makes it easier to build better website and application
								more quickly and with less effort
							</p>
							<div className="inline-flex items-center bg-primary text-white rounded mt-14 pe-4">
								<Link
									to=""
									className="py-2 px-4 rounded border border-primary hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
								>
									{' '}
									<i className="fa-solid fa-download me-2" /> Download for
									Ubuntu 19.04
								</Link>
								<PopoverLayout
									toggler={<PopoverToggle />}
									placement="top"
									togglerClass="bg-slate-500/5 hover:bg-slate-500/10  py-1.5  rounded transition-all flex items-center justify-center"
								>
									<div className="z-50 bg-white shadow rounded border fc-dropdown-open:opacity-100 transition-all duration-300 p-2 px-2 dark:bg-slate-800 dark:border-slate-700 w-max">
										<Link
											className="flex items-center py-2.5 px-3.5 rounded text-base transition-all duration-300 bg-transparent text-slate-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
											to=""
										>
											Windows 7/8/10
										</Link>
										<hr />
										<Link
											className="flex items-center py-2.5 px-3.5 rounded text-base transition-all duration-300 bg-transparent text-slate-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
											to=""
										>
											Mac OS
										</Link>
										<hr />
										<Link
											className="flex items-center py-1.5 px-3.5 rounded text-base transition-all duration-300 bg-transparent text-slate-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
											to=""
										>
											Ubuntu 18.04
										</Link>
										<Link
											className="flex items-center py-1.5 px-3.5 rounded text-base transition-all duration-300 bg-transparent text-slate-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
											to=""
										>
											Ubuntu 16.04
										</Link>
									</div>
								</PopoverLayout>
							</div>
							<div className="mt-5">
								<p className="inline-flex bg-yellow-600/10 text-sm rounded-lg py-2 px-5 gap-1">
									Looking for other platforms?{' '}
									<a href="#" className="font-semibold">
										{' '}
										Click Here
									</a>
								</p>
							</div>
						</div>
						<div className="order-1 lg:order-2">
							<div className="relative 2xl:w-[128%]">
								<div className="before:w-28 before:h-28 sm:before:absolute before:-z-10 before:-bottom-8 before:-start-8 before:bg-[url('@/assets/images/pattern/dot3.svg')] hidden sm:block" />
								<img
									src={desktop}
									alt="desktop-img"
									className="w-full h-full bg-white p-2 rounded-lg shadow-lg shadow-black/5"
									data-aos="fade-left"
									data-aos-duration={600}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="absolute bottom-0 inset-x-0 hidden sm:block">
				<img
					src={whiteWave}
					alt="svg"
					className="w-full -scale-x-100 -scale-y-100"
				/>
			</div>
		</section>
	)
}

export default Hero

import { Link } from 'react-router-dom'
import './../../../global.css'

//images
import startup1 from '@/assets/images/hero/startup1.svg'
import whiteWave from '@/assets/images/shapes/white-wave.svg'

const Hero = () => {
	return (
		<section className="bg-gradient-to-t from-yellow-50/80 relative">
			<section className="relative pt-44 pb-40">
				<div className="container">
					<div className="grid lg:grid-cols-7 grid-cols-1 gap-16 items-center">
						<div className="lg:col-span-3 order-2 lg:order-1 text-center sm:text-start">
							<h1 className="heading-h1 mb-7">
								<span className="relative z-0 after:bg-yellow-200 after:-z-10 after:absolute after:h-6 after:w-full after:bottom-0 after:end-0">
									About us
								</span>
							</h1>
							<p className="text-lg py-2">
								QUOTEX — it is a new level trading platform.
							</p>
							<p className="text-gray-500">
								Our team launched the project in 2019, but has already managed
								to declare itself. Each of our developers is a specialist of the
								highest level with many years of experience. Some of them gave
								more than 10 years of their life to upgrade their development
								skills, and the team's total experience is 200 years.This
								experience helped us to find the best mechanisms to create a
								modern platform.
							</p>
						</div>
						<div
							className="lg:col-span-4 order-1 lg:order-2"
							data-aos="fade-left"
							data-aos-duration={1000}
						>
							<div>
								<img
									src={startup1}
									alt="startup1-img"
									data-aos="fade-left"
									data-aos-duration={1000}
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

import { Link } from 'react-router-dom'
import './../../../global.css'

//image
import desktop1 from '@/assets/images/features/desktop1.gif'
import desktop from '@/assets/images/hero/desktop.png'

const Features = () => {
	return (
		<section className="xl:py-1 py-1 overflow-x-hidden">
			<div className="container">
				{/* <div>
					<div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
						<div className="order-2 lg:order-1">
							<span className="text-sm bg-red-500/10 text-red-600 rounded-full px-3 py-1">
								Feature
							</span>
							<h1 className="text-3xl/tight font-medium mt-3 mb-4">
								Automate everything
							</h1>
							<p className="text-gray-500">
								You don't need to manully follow up with your visitors. The
								Prompt takes care of it and follow up automatically with them to
								understand their needs
							</p>
							<button className="mt-12 flex items-center">
								<Link
									to=""
									className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 transition-all duration-500 py-2 px-4"
								>
									Learn more <i className="fa-solid fa-arrow-right ms-2" />
								</Link>
							</button>
						</div>
						<div
							className="order-1 lg:order-2"
							data-aos="fade-left"
							data-aos-duration={1000}
						>
							<img src={desktop1} />
						</div>
					</div>
				</div> */}
				<div className="xl:py-24 py-16">
					<div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
						<div>
							<img
								src={desktop}
								data-aos="fade-right"
								data-aos-duration={1500}
							/>
						</div>
						<div>
							<h2 className="heading-h2 mt-3 mb-4 text-center lg:text-start">
								We want everyone to be able to fulfill their desires and
								opportunities.
							</h2>
							<p className="text-gray-500 text-center lg:text-start">
								Our team has created not just another project for traders. First
								of all, we developed a platform for the widest possible
								audience. For people who want to learn how to use advanced
								financial instruments and develop their financial skills.
								<br />
								<br />
								Speaking of tools. QUOTEX provides over 400 free tools to each
								client so that you can trade and earn money the way you like.
								Choose any assets: currency quotes, stocks, majors, metals, oil
								or gas, as well as the main trend of recent years -
								cryptocurrencies.
							</p>
							{/* <button className="mt-12 flex items-center">
								<Link
									to=""
									className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 transition-all duration-500 py-2 px-4"
								>
									Learn more <i className="fa-solid fa-arrow-right ms-2" />
								</Link>
							</button> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Features

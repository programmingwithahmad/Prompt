import { Link } from 'react-router-dom'
import './../../../global.css'

const MoreFeatures = () => {
	return (
		<>
			<section className="overflow-hidden">
				<div className="xl:py-16 py-12 mt-8">
					<div className="container" data-aos="fade-up" data-aos-duration="600">
						<div className="text-center">
							<h2 className="heading-h2">Any many more powerful features</h2>
						</div>

						<div className="py-16">
							<div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 ">
								<div className="order-1">
									<div className="flex flex-col gap-5">
										<p className="flex items-center gap-3">
											{' '}
											<i className="fa-solid fa-check text-green-500 text-xl"></i>{' '}
											Hire and Retain Top Talent
										</p>
										<p className="flex items-center gap-3">
											{' '}
											<i className="fa-solid fa-check text-green-500 text-xl"></i>{' '}
											Team Management
										</p>
									</div>
								</div>

								<div className="order-3 xl:order-2">
									<div className="flex flex-col gap-5">
										<p className="flex items-center gap-3">
											{' '}
											<i className="fa-solid fa-check text-green-500 text-xl"></i>{' '}
											Stay Compliant
										</p>
										<p className="flex items-center gap-3">
											{' '}
											<i className="fa-solid fa-check text-green-500 text-xl"></i>{' '}
											Improve Productivity
										</p>
										<p className="flex items-center gap-3">
											{' '}
											<i className="fa-solid fa-check text-green-500 text-xl"></i>{' '}
											Improve Experience
										</p>
									</div>
								</div>

								<div className="order-4 xl:order-3">
									<div className="flex flex-col gap-5">
										<p className="flex items-center gap-3">
											{' '}
											<i className="fa-solid fa-check text-green-500 text-xl"></i>{' '}
											Self-service Time Tracking
										</p>
										<p className="flex items-center gap-3">
											{' '}
											<i className="fa-solid fa-check text-green-500 text-xl"></i>{' '}
											Performance Management
										</p>
										<p className="flex items-center gap-3">
											{' '}
											<i className="fa-solid fa-check text-green-500 text-xl"></i>{' '}
											Expert HR
										</p>
									</div>
								</div>

								<div className="order-2 xl:order-4">
									<div className="flex flex-col gap-5">
										<p className="flex items-center gap-3">
											{' '}
											<i className="fa-solid fa-check text-green-500 text-xl"></i>{' '}
											New Hire Checklist
										</p>
										<p className="flex items-center gap-3">
											{' '}
											<i className="fa-solid fa-check text-green-500 text-xl"></i>{' '}
											Tax Calculator
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* <button className="flex items-center justify-center mx-auto">
							<Link
								to=""
								className="bg-primary text-white rounded-lg text-sm font-semibold flex-none hover:shadow-lg  hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-6 py-3"
							>
								Sign Up Now <i className="fa-solid fa-arrow-right ms-2"></i>{' '}
							</Link>
						</button> */}
					</div>
				</div>
			</section>
		</>
	)
}

export default MoreFeatures

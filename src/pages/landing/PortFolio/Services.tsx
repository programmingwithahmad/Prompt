// types
import { Service } from './types'
import './../../../global.css'

type ServicesProps = {
	services: Service[]
}

const Services = ({ services }: ServicesProps) => {
	return (
		<section className="py-12 bg-stone-200">
			<div className="container">
				<div>
					<h2 className="heading-h2 mb-5 text-center lg:text-left">
						How does the platform work?
					</h2>
					<p className="text-slate-400 font-medium text-center lg:text-left">
						4 simple steps
					</p>
				</div>
				<div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 pt-14">
					{(services || []).map((service, idx) => {
						return (
							<div
								key={idx}
								className="group"
								data-aos="fade-up"
								data-aos-duration={300}
							>
								<div className="p-4 h-full bg-white rounded-md shadow group-hover:shadow-lg transition-all duration-300 min-height">
									<div className="w-full">
										<img src={`${service.icon}`} alt={`${service.title}`} />
									</div>
									<h3 className="heading-h3 mt-6 text-center lg:text-left">
										{service.title}
									</h3>
									<p className="text-base text-slate-400 leading-7 mt-2 text-center lg:text-left">
										{service.description}
									</p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Services

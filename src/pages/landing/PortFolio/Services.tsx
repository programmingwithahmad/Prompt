// types
import { Service } from './types'
import './../../../global.css'

type ServicesProps = {
	services: Service[]
}

const Services = ({ services }: ServicesProps) => {
	return (
		<section className="py-10 bg-stone-200">
			<div className="container">
				<div>
					<h2 className="heading-h2 my-5 text-center lg:text-left">
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
								data-aos-duration={600}
							>
								<div className="p-6 h-full bg-white rounded-md shadow group-hover:shadow-lg transition-all duration-500 min-height">
									<div className="w-12 h-12 justify-self-center lg:justify-self-start bg-[#E9EFFD] flex items-center justify-center  rounded-tr-xl rounded-bl-xl group-hover:rounded-tr-none group-hover:rounded-bl-none group-hover:rounded-tl-xl group-hover:rounded-br-xl transition-all duration-500">
										{service.icon}
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

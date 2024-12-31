// types
import { Feature } from './types'
import './../../../global.css'

//images
import whiteWave from '@/assets/images/shapes/white-wave.svg'

type FeaturesProps = {
	features: Feature[]
}

const Features = ({ features }: FeaturesProps) => {
	return (
		<section className="py-24 bg-blue-100/30 relative">
			<div className="container relative">
				<div className="text-center">
					<span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
						Why Choose Us
					</span>
					<h2 className="heading-h2 my-3">Features of the platform</h2>
					<p className="text-gary-600 mt-5 mb-4">
						We regularly improve our platform to make your trading comfortable
						and safe.
					</p>
				</div>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-14">
					{(features || []).map((feature, idx) => {
						return (
							<div
								key={idx}
								className="flex flex-col p-5 items-center gap-5 bg-stone-100 shadow-lg  rounded-md shadow-slate-300 justify-start"
							>
								<div>
									<div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md">
										{feature.icon}
									</div>
								</div>
								<div className="flex flex-col items-center">
									<h3 className="heading-h3">{feature.title}</h3>
									<p className="text-gary-600 mt-3">{feature.description}</p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Features

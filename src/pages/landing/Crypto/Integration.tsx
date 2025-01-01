import { Link } from 'react-router-dom'
import whiteWave from '@/assets/images/shapes/white-wave.svg'
import './../../../global.css'

//image
import code from '@/assets/images/other/code.jpg'

const Integration = () => {
	return (
		<section className="py-24 bg-stone-100 relative">
			{/* <div className="absolute top-0 inset-x-0 hidden sm:block ">
				<img src={whiteWave} alt="svg" className="w-full -scale-x-100 " />
			</div> */}
			<div className="container">
				<div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-6">
					<div className="lg:me-20 text-center lg:text-start">
						<h2 className="heading-h2 my-3">
							Grow your capital by making the right trading predictions
						</h2>
						<p className="text-slate-500 mt-5 mb-4">
							Will the price go up or down? Predict the price movement of a
							trading asset and place a trade.
						</p>
						<div className="flex flex-wrap items-center gap-5 mt-12 justify-center lg:justify-start">
							<Link
								to=""
								className="py-5 px-4 btn-primary rounded border bg-[#0faf59] hover:shadow-lg hover:shadow-primary/50 transition-all duration-500"
							>
								Try it for free
							</Link>
							<p>Practice demo account without registration.</p>
						</div>
					</div>
					<div className="grid md:grid-cols-2 grid-cols-1 gap-5">
						<div className="bg-slate-200/75 flex flex-col items-center py-12 rounded-lg gap-5 shadow-md">
							<div className="text-4xl">🎯</div>
							<div className="mt-2">
								<h3 className="text-center heading-h3">1. Select an asset</h3>
							</div>
						</div>
						<div className="bg-slate-200/75 flex flex-col items-center py-12 rounded-lg gap-5 shadow-md">
							<div className="text-4xl">📊</div>
							<div className="mt-2">
								<h3 className="text-center heading-h3">2. Monitor the chart</h3>
							</div>
						</div>
						<div className="bg-slate-200/75 flex flex-col items-center py-12 rounded-lg gap-5 shadow-md">
							<div className="text-4xl">💸</div>
							<div className="mt-2">
								<h3 className="text-center heading-h3">3. Place a trade</h3>
							</div>
						</div>
						<div className="bg-slate-200/75 flex flex-col items-center py-12 rounded-lg gap-5 shadow-md">
							<div className="text-4xl">✅</div>
							<div className="mt-2">
								<h3 className="text-center heading-h3">4. Get the result</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Integration

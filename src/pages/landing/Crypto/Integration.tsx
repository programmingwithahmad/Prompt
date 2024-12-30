import { Link } from 'react-router-dom'
import whiteWave from '@/assets/images/shapes/white-wave.svg'

//image
import code from '@/assets/images/other/code.jpg'

const Integration = () => {
	return (
		<section className="py-24 bg-slate-200/80 relative">
			{/* <div className="absolute top-0 inset-x-0 hidden sm:block ">
				<img src={whiteWave} alt="svg" className="w-full -scale-x-100 " />
			</div> */}
			<div className="container">
				<div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-6 md:mt-12">
					<div className="lg:me-20 text-center lg:text-start">
						<h1 className="sm:text-4xl text-xl font-bold my-3">
							Grow your capital by making the right trading predictions
						</h1>
						<p className="text-slate-500 mt-5 mb-4">
							Will the price go up or down? Predict the price movement of a
							trading asset and place a trade.
						</p>
						<div className="flex flex-wrap items-center gap-5 mt-12 justify-center lg:justify-start">
							<Link
								to=""
								className="py-4 px-10 font-bold text-lg rounded border text-white bg-[#0faf59] hover:shadow-lg hover:shadow-primary/50 transition-all duration-500"
							>
								Try it for free
							</Link>
							<p>Practice demo account without registration.</p>
						</div>
					</div>
					<div className="grid md:grid-cols-2 grid-cols-1 gap-5">
						<div className="bg-gray-200 flex flex-col items-center py-12 rounded-lg gap-5 shadow-md">
							<div className="text-4xl">🎯</div>
							<div className="text-center mt-2">1. Select an asset</div>
						</div>
						<div className="bg-gray-200 flex flex-col items-center py-12 rounded-lg gap-5 shadow-md">
							<div className="text-4xl">📊</div>
							<div className="text-center mt-2">2. Monitor the chart</div>
						</div>
						<div className="bg-gray-200 flex flex-col items-center py-12 rounded-lg gap-5 shadow-md">
							<div className="text-4xl">💸</div>
							<div className="text-center mt-2">3. Place a trade</div>
						</div>
						<div className="bg-gray-200 flex flex-col items-center py-12 rounded-lg gap-5 shadow-md">
							<div className="text-4xl">✅</div>
							<div className="text-center mt-2">4. Get the result</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Integration

// types
import { Link } from 'react-router-dom'
import { Coin } from './types'
import './../../../global.css'

type CoinsProps = {
	coins: Coin[]
}

const Coins = ({ coins }: CoinsProps) => {
	return (
		<section className="py-20 bg-blue-100/30" data-aos="fade-up">
			<div className="container">
				<div className="text-center">
					<h2 className="heading-h2 text-gray-600">Supported coins</h2>
					<p className="font-medium text-slate-500 mt-5 mb-4">
						Fastest way to buy or sell popular crypto coins.
					</p>
				</div>
				<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10 mt-16">
					{(coins || []).map((coin, idx) => {
						return (
							<div
								className="flex flex-col items-center md:flex-row md:items-center gap-5"
								key={idx}
							>
								<div
									className={`h-12 w-12 ${coin.variant} rounded-full flex items-center justify-center`}
								>
									<i
										className={`${
											coin.isSolid
												? `fa-solid ${coin.icon}`
												: `fa-brands ${coin.icon}`
										} ${idx === 0 ? '' : 'text-white'} ${
											coin.size ? `${coin.size}` : 'text-2xl'
										}`}
									/>
								</div>
								<h4 className="text-base text-center md:text-left">
									{coin.name}
								</h4>
							</div>
						)
					})}
				</div>

				<div className="text-center mt-16">
					<Link
						to=""
						className="py-5 px-4 btn-primary rounded border text-white bg-slate-500 hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
					>
						View complete list <i className="fa-solid fa-arrow-right ms-2" />
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Coins

import { FormInput } from '@/components'
import { Link } from 'react-router-dom'
import './../../../global.css'
import Typist from 'react-text-typist'

//image
import crypto from '@/assets/images/hero/crypto.png'

const Hero = () => {
	return (
		<section className="pt-40 pb-20 bg-primary/5 relative overflow-hidden">
			<div className="container">
				<div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
					<div>
						<h1 className="heading-h1 text-center lg:text-left mb-7">
							Innovative&nbsp;
							<span className="relative after:bg-green-200 md:after:h-6 after:h-4 after:w-full after:inset-x-0 after:bottom-0 after:absolute after:-z-10">
								platform
							</span>{' '}
							for smart investments&nbsp;
						</h1>
						<p className="text-slate-500 leading-7 text-center lg:text-left">
							Sign up and get 10,000 USD to your demo account to learn how to
							trade.
						</p>
						<div className="py-14">
							<div className="flex flex-wrap items-center gap-4 justify-center lg:justify-stretch">
								<Link
									to=""
									className="py-5 px-4 btn-primary primary rounded bg-[#0faf59] hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
								>
									Create a free account
								</Link>
								<small className="text-center lg:pl-4">
									*The minimum deposit amount to start real
									<span>
										<br />
									</span>
									trading is 10 USD
								</small>
							</div>
						</div>
					</div>
					<div className="2xl:w-[130%] relative lg:ms-20">
						<div className="p-3 rounded-md bg-white shadow-lg justi">
							<img src={crypto} className="rounded-md" />
						</div>
						{/* <div className="hidden sm:block"> */}
						<div className="hidden lg:block">
							<div className="after:w-32 after:h-32 after:absolute after:-bottom-10 after:-start-12 after:-z-10 after:bg-[url('@/assets/images/pattern/dot2.svg')]" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero

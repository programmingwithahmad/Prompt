import { Link } from 'react-router-dom'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// styles
import 'swiper/css'

//images
import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'
import app1 from '@/assets/images/hero/app1.png'

const Hero = () => {
	return (
		<section className="pt-36 pb-24 bg-primary/5">
			<div className="container">
				<div className="grid lg:grid-cols-6 grid-cols-1 justify-between items-center gap-6">
					<div className="lg:col-span-3">
						<h2 className="md:text-5xl/tight text-3xl font-semibold mb-7">
							The best way to{' '}
							<span className="relative after:bg-amber-400/60 after:h-6 after:w-full after:inset-x-0 after:bottom-0 after:absolute after:-z-10">
								Showcase
							</span>{' '}
							your Mobile App
						</h2>
						<p className="text-slate-400 leading-7">
							To increase sales by skyrocketing communication with All messages
							in one simple dashboard it now takes seconds.
						</p>

						<div className="flex flex-wrap items-center mt-16 gap-6">
							<Link
								to=""
								className="py-3 px-6 rounded text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50"
							>
								Download
							</Link>
							<Link to="" className="flex items-center gap-2">
								<span className="flex items-center justify-center rounded-full w-10 h-10 bg-primary/10 text-primary hover:border hover:border-primary/20 hover:bg-primary/20">
									<i className="fa-solid fa-play"></i>
								</span>
								<p className="font-medium text-primary hover:text-primary/90">
									Watch Video
								</p>
							</Link>
						</div>
					</div>
					<div className="lg:col-start-5 lg:col-span-2">
						<div className="relative">
							<img src={app1} alt="img" />

							<div className="hidden lg:block">
								{/* <!-- Swiper --> */}
								<div className="absolute max-w-xs bottom-28 -start-72">
									<div id="swiper_one" className="swiper">
										<Swiper
											modules={[Autoplay]}
											autoplay={{
												delay: 2500,
												disableOnInteraction: false,
											}}
											spaceBetween={30}
											loop
										>
											{([avatar1, avatar2] || []).map((image, idx) => {
												return (
													<SwiperSlide key={idx}>
														<div className="relative">
															<div className="p-4 rounded-md bg-white relative">
																<div className="flex items-center gap-5">
																	<img
																		src={image}
																		className="w-12 rounded-full"
																	/>
																	<div>
																		<h2 className="text-sm text-slate-400">
																			Very convenient to use project manager!
																		</h2>
																		<p className="mt-2">
																			<span className="flex gap-1 items-center text-yellow-500 text-base">
																				<i className="fa-solid fa-star" />
																				<i className="fa-solid fa-star" />
																				<i className="fa-solid fa-star" />
																				<i className="fa-solid fa-star" />
																			</span>
																		</p>
																	</div>
																</div>
																{idx % 2 === 0 && (
																	<div className="absolute end-1 bottom-0">
																		<i className="fa-solid fa-quote-right text-2xl text-orange-500/20" />
																	</div>
																)}
															</div>
														</div>
													</SwiperSlide>
												)
											})}
										</Swiper>
									</div>
								</div>
								<div className="hidden sm:block">
									<div className="before:w-24 before:h-24 before:absolute before:-top-3 before:end-2 before:-z-10 before:bg-[url('@/assets/images/pattern/dot3.svg')]"></div>
									<div className="after:w-24 after:h-24 after:absolute after:bottom-10 after:-z-10 after:bg-[url('@/assets/images/pattern/dot3.svg')]"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero

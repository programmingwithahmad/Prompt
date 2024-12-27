import Benefits from './Benefits'
import Hero from './Hero'
import PricingPlans from './PricingPlans'
import { benefits } from './data'
import CTA from './CTA'
import { Footer } from '@/components'
import FAQSTWO from './FAQSTWO'
import FAQSTHREE from './FAQSTHREE'
import FAQSONE from './FAQSONE'

const Pricing = () => {
	return (
		<>
			<div>
				<Hero />

				{/* <PricingPlans /> */}

				{/* <Benefits benefits={benefits} /> */}

				<FAQSONE />

				<FAQSTWO />

				<FAQSTHREE />

				{/* <CTA /> */}

				<Footer />
			</div>
		</>
	)
}

export default Pricing

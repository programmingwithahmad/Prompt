import { FeedBack, Footer2 } from '@/components'
import ClientsReview from './ClientsReview'
import Features from './Features'
import Hero from './Hero'
import Integrations from './Integrations'
import Pricing from './Pricing'
import { integrations, planFeatures } from './data'
import Services from '../PortFolio/Services'
import { services } from '../PortFolio/data'
import Practice from './practice'
import MoreFeatures from './MoreFeatures'

const Startup = () => {
	return (
		<div className="text-gray-700">
			<Hero />

			<Features />

			<Services services={services} />

			<FeedBack />

			<Practice />

			<MoreFeatures />

			{/* <Pricing planFeatures={planFeatures} /> */}

			{/* <ClientsReview /> */}

			{/* <Integrations integrations={integrations} /> */}

			<Footer2 socialIcon />
		</div>
	)
}

export default Startup

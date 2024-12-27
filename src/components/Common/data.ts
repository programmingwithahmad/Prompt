import { PlanItem } from './types'
import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'

interface Testimonials {
	name: string
	position: string
	description: string
	image: string
}

interface AccordionData {
	title: string
	description: string
}

const testimonials: Testimonials[] = [
	{
		name: 'John Stark',
		position: 'Engineering Director',
		description:
			'Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.',
		image: avatar1,
	},
	{
		name: 'Cersei Lannister',
		position: 'Senior Project Manager',
		description:
			'I was bad at front-end until I discovered with Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.',
		image: avatar2,
	},
	{
		name: 'John Stark',
		position: 'Engineering Director',
		description:
			'Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.',
		image: avatar1,
	},
	{
		name: 'Cersei Lannister',
		position: 'Senior Project Manager',
		description:
			'I was bad at front-end until I discovered with Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.',
		image: avatar2,
	},
]

const FAQContent: AccordionData[] = [
	{
		title: 'What are digital options?',
		description:
			'Option is a derivative financial instrument based on any underlying asset, such as a stock, a currency pair, oil, etc. Digital option - a non-standard option that is used to make a profit on price movements of such assets for a certain period of time. A digital option, depending on the terms agreed upon by the parties to the transaction, at a time determined by the parties, brings a fixed income (the difference between the trade income and the price of the asset) or loss (in the amount of the value of the asset). Since the digital option is purchased in advance at a fixed price, the size of the profit, as well as the size of the potential loss, are known even before the trade.',
	},
	{
		title: 'What are the varieties of digital options?',
		description: `Making an option trade, you must choose the underlying asset that will underlie the option. Your forecast will be carried out on this asset.
Simply, buying a digital contract, you are actually betting on the price movement of such an underlying asset.
An underlying asset is an “item” whose price is taken into account when concluding a trade.As the underlying asset of digital options, the most sought-after products on the markets usually act. There are four types of them:
securities (shares of world companies)
currency pairs (EUR / USD, GBP / USD, etc.)
raw materials and precious metals (oil, gold, etc.)
indices (S&P 500, Dow, dollar index, etc.)
There is no such thing as a universal underlying asset. When choosing it, you can only use your own knowledge, intuition, and various kinds of analytical information, as well as market analysis for a particular financial instrument.`,
	},
	{
		title: ' How do I get help with the theme?',
		description:
			' Use our dedicated support email (support@coderthemes.com) to send your issues or feedback. We are here to help anytime. ',
	},
	{
		title: ' Will you regularly give updates of Prompt ?',
		description:
			' Yes, We will update the Prompt regularly. All the future updates would be available without any cost. ',
	},
]

const plans: PlanItem[] = [
	{
		id: 1,
		name: 'Starter',
		price: '49',
		duration: '/ month',
		features: [
			'Up to 600 minutes usage time',
			'Use for personal only',
			'Add up to 10 attendees',
			'Technical support via email',
		],
		isRecommended: false,
	},
	{
		id: 2,
		name: 'Professional',
		price: '99',
		duration: '/ month',
		features: [
			'Up to 6000 minutes usage time',
			'Use for personal or a commercial client',
			'Add up to 100 attendees',
			'Up to 5 teams',
			'Technical support via email',
		],
		isPopular: true,
		isRecommended: true,
	},
	{
		id: 3,
		name: 'Enterprise',
		price: '599',
		duration: '/ month',
		features: [
			'Unlimited usage time',
			'Use for personal or a commercial client',
			'Add Unlimited attendees',
			'24x7 Technical support via phone',
			'Technical support via email',
		],
		isRecommended: false,
	},
]

export { testimonials, plans, FAQContent }

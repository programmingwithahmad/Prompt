// types
import { Project, Service, Testimonial } from './types'

//images
import ProjectImg1 from '@/assets/images/features/agency1.jpg'
import ProjectImg2 from '@/assets/images/features/agency2.jpg'

import amazon from '@/assets/images/brands/amazon.svg'
import google from '@/assets/images/brands/google.svg'

import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'

import platform1 from '@/assets/images/platform/platform1.jpg'
import platform2 from '@/assets/images/platform/platform2.jpg'
import platform3 from '@/assets/images/platform/platform4.jpg'
import platform4 from '@/assets/images/platform/platform3.jpg'

const services: Service[] = [
	{
		icon: platform1,
		title: 'We choose',
		description: 'Asset of interest.',
	},
	{
		icon: platform2,
		title: 'Install',
		description: 'The size of the bet and the time of closing the deal.',
	},
	{
		icon: platform3,
		title: 'We do',
		description: 'Forecast according to the schedule for a given time.',
	},
	{
		icon: platform4,
		title: 'We get',
		description: 'Result of the transaction.',
	},
]

const projects: Project[] = [
	{
		title: 'Project',
		description: 'Branding, Interaction, Web Design',
		image: ProjectImg1,
	},
	{
		title: 'Project 2',
		description: 'Branding, Web Design & Development',
		image: ProjectImg2,
	},
	{
		title: 'Project 3',
		description: 'Branding, Interaction, Web Design',
		image: ProjectImg2,
	},
	{
		title: 'Project 4',
		description: 'Branding, Web Design & Development',
		image: ProjectImg1,
	},
]

const testimonials: Testimonial[] = [
	{
		name: 'John Stark',
		position: 'Engineering Director',
		description:
			'Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.',
		image: avatar1,
		brand: amazon,
	},
	{
		name: 'Cersei Lannister',
		position: 'Senior Project Manager',
		description:
			'I was bad at front-end until I discovered with Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.',
		image: avatar2,
		brand: google,
	},
	{
		name: 'John Stark',
		position: 'Engineering Director',
		description:
			'Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.',
		image: avatar1,
		brand: amazon,
	},
	{
		name: 'Cersei Lannister',
		position: 'Senior Project Manager',
		description:
			'I was bad at front-end until I discovered with Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.',
		image: avatar2,
		brand: google,
	},
]

export { services, projects, testimonials }

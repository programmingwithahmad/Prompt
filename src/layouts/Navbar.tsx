import { Link } from 'react-router-dom'
import { getHorizontalMenuItems, getMenuItems } from '../helpers/menu'
import AppMenu from './Menu'
import { useEffect } from 'react'
import { useThemeContext } from '@/context'

//images
import logoLight from '@/assets/images/logo-light.png'
import logoDark from '@/assets/images/logo-dark.png'
import { useLogoTheme, useToggle } from '@/hooks'
import VerticalMenu from './VerticalMenu'
import { OffcanvasLayout } from '@/components'

const Navbar = () => {
	const [isOpenOffcanvas, toggleOffcanvas, openOffcanvas, closeOffcanvas] =
		useToggle(false)

	const { settings } = useThemeContext()
	const { isDark } = useLogoTheme()

	const topNavLight = settings.topbar.theme === 'light'

	useEffect(() => {
		const navbar = document.getElementById('navbar')
		document.addEventListener('scroll', (e) => {
			e.preventDefault()
			if (navbar) {
				if (window.pageYOffset >= 80) navbar.classList.add('nav-sticky')
				else navbar.classList.remove('nav-sticky')
			}
		})
	}, [])

	return (
		<>
			<header
				id="navbar"
				className={`${
					topNavLight ? 'light' : 'dark'
				} fixed top-0 inset-x-0 flex items-center z-40 w-full lg:bg-transparent bg-white transition-all py-5`}
			>
				<div className="container">
					<nav className="flex items-center">
						<Link to="/">
							<img
								src={isDark ? logoDark : logoLight}
								className="h-8"
								alt="Logo"
							/>
						</Link>
						<div className="lg:block hidden ms-auto">
							<AppMenu menuItems={getHorizontalMenuItems()} />
						</div>
						<div className="hidden lg:flex items-center ms-auto gap-2">
							<button className="bg-[black] btn-primary px-4 py-2 rounded-md inline-flex items-center">
								Log in
							</button>
							<button className="bg-[#007aff] btn-primary px-4 py-2 rounded-md inline-flex items-center">
								Sign up
							</button>
						</div>
						<div className="lg:hidden flex items-center ms-auto px-2.5">
							<button type="button" onClick={toggleOffcanvas}>
								<i className="fa-solid fa-bars text-2xl text-gray-500" />
							</button>
						</div>
					</nav>
				</div>
			</header>
			<OffcanvasLayout
				placement="end"
				sizeClassName="w-full sm:w-[447px] bg-white border-s"
				open={isOpenOffcanvas}
				toggleOffcanvas={closeOffcanvas}
			>
				<div className="flex flex-col h-[100vh] divide-y-2 divide-gray-200">
					{/* Mobile Menu Topbar Logo (Header) */}
					<div className="p-6 flex items-center justify-between">
						<Link to="/">
							<img src={logoDark} className="h-8" alt="Logo" />
						</Link>
						<button className="flex items-center px-2" onClick={closeOffcanvas}>
							<i className="fa-solid fa-xmark text-xl" />
						</button>
					</div>
					{/* Mobile Menu Link List */}
					<div
						className="p-6 overflow-scroll::-webkit-scrollbar {display: none} scroll- h-full"
						id="right-menu"
					>
						<VerticalMenu menuItems={getMenuItems()} />
					</div>
					{/* Mobile Menu Download Button (Footer) */}
					<div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-2">
						<button className="bg-[#374151] w-full text-white py-4 rounded flex items-center justify-center text-sm">
							Demo Account
						</button>
						<button className="bg-[#008000] w-full text-white py-4 rounded flex items-center justify-center text-sm">
							Open real account
						</button>
					</div>
				</div>
			</OffcanvasLayout>
		</>
	)
}

export default Navbar

// import { GoogleTagManager } from '@next/third-parties/google'
import SkipToContent from '@/ui/SkipToContent'
import Announcement from '@/ui/Announcement'
import Header from '@/ui/header'
import Footer from '@/ui/footer'
import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity'
import '@/styles/app.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	icons: {
		icon: `https://fav.farm/🖤`,
	},
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			{/* <GoogleTagManager gtmId='' /> */}
			<body className="pattern-clouds-blue-300/30 bg-canvas text-ink">
				<SkipToContent />
				<Announcement />
				<Header />
				<main id="main-content" tabIndex={-1}>
					{children}
				</main>
				<Footer />

				{draftMode().isEnabled && <VisualEditing />}
			</body>
		</html>
	)
}

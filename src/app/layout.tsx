import { Bellefair } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const bellefair = Bellefair({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-bellefair",
})

export const metadata: Metadata = {
	title: "Haxmas",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={bellefair.variable}>
			<body>
				{children}
			</body>
		</html>
	)
}
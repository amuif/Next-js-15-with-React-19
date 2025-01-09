import { HomeIcon, File, UsersRound, LogOut } from "lucide-react"
import Link from "next/link"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { NavButton } from "./NavButton"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"
export function Header() {
	return (
		<header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
			<div className="flex items-center justify-between h-8 w-full ">
				<div className="flex items-center gap-3">
					<NavButton icon={HomeIcon} label="Home" href="/home" />
					<Link href="/home" className="flex justify-center items-center gap-2 ml-0 " title="Home">
						<h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
							Repair Shop
						</h1>
					</Link>
				</div>
				<div className="flex items-center ">
					<NavButton icon={File} label="tickets" href="/tickets" />
					<NavButton icon={UsersRound} label="customers" href="/customers" />
					<div className="px-5">
						<ModeToggle />
					</div>
					<Button variant="ghost" title="Log out" className="rounded-full" size="icon" aria-label="log out button" asChild>
						<LogoutLink><LogOut /></LogoutLink>
					</Button>
				</div>

			</div>

		</header>
	)
}

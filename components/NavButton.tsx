import { Button } from "./ui/button";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

type Props = {
    icon: LucideIcon,
    label: string,
    href?: string
}

export function NavButton ({
    icon: Icon,
    label,
    href,
}: Props){
    return (
        <Button
        variant="ghost"
        size="icon"
        aria-label={label}
        title={label}
        className="rounded-full"
        asChild
        >
            {
                href ? (
                    <Link href={href}>
                        <Icon/>
                    </Link>

                ):(
                    <Icon/>
                )
            }


        </Button>
    )
}
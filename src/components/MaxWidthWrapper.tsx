import { cn } from "@/lib/utils"
import { ReactNode } from "react"

export const MaxWidthWrapper = ({
    className, 
    children
} : {
    className?: String,
    children: ReactNode
}) => {
    return (
        <div className={cn(
            "mx-auto w-full max-w-screen-xl px-1.5", 
            className
        )}>
            {children}
        </div>
    )
}


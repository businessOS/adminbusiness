import * as React from "react"

import { cn } from "@/lib/utils"

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> { }

export function DashboardShell({
    children,
    className,
    ...props
}: DashboardShellProps) {
    return (
        <div className={cn("grid mx-auto ml-0 md:ml-4 my-4 items-start gap-8", className)} {...props}>
            {children}
        </div>
    )
}
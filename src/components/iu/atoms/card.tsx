import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/atoms/skeleton"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Card({ className, ...props }: CardProps) {
    return (
        <div
            className={cn("overflow-hidden rounded-lg border-2 mr-0 md:mr-4 dark:border-gray-800", className)}
            {...props}
        />
    )
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> { }

Card.Header = function CardHeader({ className, ...props }: CardHeaderProps) {
    return <div className={cn("grid gap-1 md:gap-4 lg:gap-6 p-6", className)} {...props} />
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> { }

Card.Content = function CardContent({ className, ...props }: CardContentProps) {
    return <div className={cn("mr-0 md:mr-4 px-6 pb-4", className)} {...props} />
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> { }

Card.Footer = function CardFooter({ className, ...props }: CardFooterProps) {
    return (
        <div
            className={cn("border-t bg-light-main  dark:bg-dark-main dark:border-gray-800 px-6 py-4", className)}
            {...props}
        />
    )
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> { }

Card.Title = function CardTitle({ className, ...props }: CardTitleProps) {
    return <h4 className={cn("text-lg font-medium", className)} {...props} />
}

interface CardDescriptionProps
    extends React.HTMLAttributes<HTMLParagraphElement> { }

Card.Description = function CardDescription({
    className,
    ...props
}: CardDescriptionProps) {
    return <p className={cn("text-sm text-gray-600", className)} {...props} />
}

Card.Skeleton = function CardSeleton() {
    return (
        <Card>
            <Card.Header className="gap-2">
                <Skeleton className="w-1/5 h-5" />
                <Skeleton className="w-4/5 h-4" />
            </Card.Header>
            <Card.Content className="h-10" />
            <Card.Footer>
                <Skeleton className="h-8 w-[120px] bg-slate-200" />
            </Card.Footer>
        </Card>
    )
}

/**
 * bg-light-main dark:bg-dark-main
 */
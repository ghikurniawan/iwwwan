import { cn } from "@/lib/utils"


const Section : React.FC<React.HTMLAttributes<HTMLElement>> = ({children, className, ...props}) => {
  return (
    <section {...props} className={cn("w-full h-full px-4 max-w-screen-xl", className)}>
        {children}
    </section>
  )
}

export default Section
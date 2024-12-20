import { cn } from "@/libs/utils";
import { forwardRef } from "react";

export interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button =forwardRef<HTMLButtonElement,ButtonProps>(({
    className,
    children, 
    disabled, 
    type='button',
    ...props
},ref) => {
    return (
        <button
        className={cn(
            `w-auto rounded-full bg-black border-transparent px5 py-5 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition`
        )}
             ref={ref}
        >
            {children}
        </button>
    )
})

Button.displayName= 'Button';

export default Button
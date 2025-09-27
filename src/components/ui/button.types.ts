import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-soft [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-hover shadow-medium",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/80 shadow-medium",
        outline:
          "border border-glass-border bg-glass-dark text-foreground hover:bg-glass-light hover:text-accent-foreground shadow-soft backdrop-blur-md",
        secondary:
          "bg-glass-light text-secondary-foreground hover:bg-glass-light border border-glass-border shadow-soft backdrop-blur-md",
        ghost:
          "bg-transparent text-foreground hover:bg-glass-dark hover:text-accent-foreground shadow-none backdrop-blur-sm",
        link: "text-primary underline-offset-4 hover:underline shadow-none",
        gradient:
          "bg-gradient-to-r from-primary to-primary-hover text-primary-foreground hover:shadow-medium",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

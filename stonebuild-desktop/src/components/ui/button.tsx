import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
const buttonVariants = cva(
  `
    inline-flex items-center justify-center gap-2
    whitespace-nowrap rounded-xl
    text-sm font-medium
    transition-all duration-300
    disabled:pointer-events-none
    disabled:opacity-50
    shrink-0
    outline-none
    focus-visible:ring-2
    focus-visible:ring-offset-2
  `,
  {
    variants: {
      variant: {

        // ─────────────────────────────
        // PRIMARY
        // ─────────────────────────────
        default: `
          bg-[#0E7FAB]
          text-white
          hover:bg-[#095E80]
          shadow-sm
          hover:shadow-md
        `,

        // ─────────────────────────────
        // DESTRUCTIVE
        // ─────────────────────────────
        destructive: `
          bg-[#FFE4E6]
          text-[#E11D48]
          hover:bg-[#FFD5DB]
        `,

        // ─────────────────────────────
        // OUTLINE
        // ─────────────────────────────
        outline: `
          border
          bg-white
          text-[#0C2D3A]
          border-[#CCE9F2]
          hover:bg-[#F0FAFD]
        `,

        // ─────────────────────────────
        // SECONDARY
        // ─────────────────────────────
        secondary: `
          bg-[#D6F0F7]
          text-[#095E80]
          hover:bg-[#C4E8F2]
        `,

        // ─────────────────────────────
        // GHOST
        // ─────────────────────────────
        ghost: `
          text-[#0C2D3A]
          hover:bg-[#F0FAFD]
        `,

        // ─────────────────────────────
        // LINK
        // ─────────────────────────────
        link: `
          text-[#0E7FAB]
          underline-offset-4
          hover:underline
        `,
      },

      size: {
        default: `
          h-10
          px-5
          py-2
          text-[15px]
        `,

        sm: `
          h-9
          px-4
          text-sm
        `,

        lg: `
          h-11
          px-7
          text-base
        `,

        icon: `
          size-10
        `,
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)


function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const labelVariants = cva(
  "bg-secondary px-2 text-sm font-medium flex justify-center items-center leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

export interface InputGroupProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Group = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex group overflow-hidden border-input disabled::cursor-not-allowed disabled:opacity-50 focus-within:border-input focus-within:ring-1 focus-within:ring-ring  rounded-md border bg-background text-sm shadow-sm transition-colors",
      className
    )}
    {...props}
  />
));
Group.displayName = "InputGroup";

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputGroup = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

InputGroup.displayName = "InputGroup";

export { InputGroup, Label, Group };

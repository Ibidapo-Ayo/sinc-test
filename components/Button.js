import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-primary", "hover:bg-primary"],
      secondary: ["bg-secondary", "hover:bg-secondary"],
      outline: ["border-secondary", "border", "bg-white", "text-textColor"]
    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-14",
        "h-14",
        "flex",
        "items-center",
        "justify-center",
        "p-4",
      ],
      cta: ["px-[24px]", "py-[10px]", "text-white", " font-[600]", "rounded-full"],
    },
  },

  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Button = ({ variant, size, className, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  );
};

export default Button;

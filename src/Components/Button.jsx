

export const Button = ({ className = "", size, children, ...props }) => {
    const BaseClasses = "relative overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary shadow-lg shadow-primary/25 " + className;
   
    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        defult: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };
    const classes = `${BaseClasses} ${size ? sizeClasses[size] : sizeClasses.defult}`;
    return (
      <button className={classes} {...props}>
        <span className="relative flex items-center justify-center gap-2">
          {children}
        </span>
      </button>
    );
}
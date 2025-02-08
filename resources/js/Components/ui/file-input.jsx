import * as React from "react"
import { cn } from "@/lib/utils"
import InputError from "@/Components/InputError"

const FileInput = React.forwardRef(({ className, error, accept, ...props }, ref) => {
  return (
    <div className="relative">
      <input
        type="file"
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-destructive focus-visible:ring-destructive",
          className
        )}
        ref={ref}
        accept={accept}
        {...props}
      />
      <InputError
        message={error}
        className="mt-2"
      />
    </div>
  )
})
FileInput.displayName = "FileInput"

export { FileInput } 
import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp, Search, X } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = React.forwardRef(({ children, ...props }, ref) => {
  return <SelectPrimitive.Root {...props}>{children}</SelectPrimitive.Root>
})
Select.displayName = "Select"

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm",
      "ring-offset-white placeholder:text-gray-500",
      "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "hover:border-gray-400 transition-colors duration-200 ease-in-out",
      className
    )}
    {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50 transition-transform duration-200 ease-in-out" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = "SelectTrigger"

const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1 text-gray-500 hover:text-gray-700", className)}
    {...props}>
    <ChevronUp className="h-4 w-4 transition-colors duration-200 ease-in-out" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = "SelectScrollUpButton"

const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1 text-gray-500 hover:text-gray-700", className)}
    {...props}>
    <ChevronDown className="h-4 w-4 transition-colors duration-200 ease-in-out" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName = "SelectScrollDownButton"

const SelectContent = React.forwardRef(({ className, children, searchable, position = "popper", ...props }, ref) => {
  const [searchQuery, setSearchQuery] = React.useState("")

  // Filtrer les éléments en fonction de la recherche
  const filteredChildren = React.useMemo(() => {
    if (!searchable || !searchQuery) return children

    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) return child

      if (child.type.displayName === 'SelectItem') {
        const itemText = child.props.children?.toString().toLowerCase()
        return itemText?.includes(searchQuery.toLowerCase()) ? child : null
      }

      if (child.type === React.Fragment || child.type === SelectGroup) {
        const filteredGroupChildren = React.Children.map(child.props.children, groupChild => {
          if (!React.isValidElement(groupChild)) return groupChild
          const itemText = groupChild.props.children?.toString().toLowerCase()
          return itemText?.includes(searchQuery.toLowerCase()) ? groupChild : null
        })
        return React.cloneElement(child, {}, filteredGroupChildren)
      }

      return child
    })
  }, [children, searchQuery, searchable])

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(
          "relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white text-gray-950 shadow-md",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />

        {searchable && (
          <div className="sticky top-0 p-2 bg-white border-b border-gray-200">
            <div className="flex items-center px-3 py-2 bg-gray-50 rounded-md">
              <Search className="w-4 h-4 mr-2 text-gray-500" />
              <input
                className="w-full bg-transparent border-none outline-none text-sm placeholder:text-gray-500"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => {
                  // Permettre la navigation avec les touches
                  if (!['ArrowUp', 'ArrowDown', 'Enter'].includes(e.key)) {
                    e.stopPropagation()
                  }
                  // Effacer la recherche avec Escape
                  if (e.key === 'Escape') setSearchQuery('')
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSearchQuery('')
                  }}
                  className="flex items-center justify-center w-5 h-5 ml-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
                >
                  <X className="w-3 h-3 text-gray-500" />
                </button>
              )}
            </div>
          </div>
        )}

        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          )}
        >
          {filteredChildren}
          {searchable && searchQuery && !React.Children.count(filteredChildren) && (
            <div className="py-6 text-center text-sm text-gray-500">
              Aucun résultat pour "{searchQuery}"
            </div>
          )}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
})
SelectContent.displayName = "SelectContent"

const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold text-gray-700", className)}
    {...props} />
))
SelectLabel.displayName = "SelectLabel"

const SelectItem = React.forwardRef(({ className, children, value, ...props }, ref) => {
  // Vérification améliorée avec message d'erreur plus détaillé
  if (value === undefined || value === "") {
    console.warn("SelectItem doit avoir une propriété 'value' non vide", { 
      children, 
      component: "SelectItem" 
    });
    // Utiliser une valeur par défaut basée sur le contenu textuel ou un identifiant unique
    value = (typeof children === 'string' ? children : 'item-' + Math.random().toString(36).substr(2, 9));
  }
  
  return (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
        "focus:bg-blue-50 focus:text-blue-600",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        "hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 ease-in-out",
        className
      )}
      value={value}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4 text-blue-600" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
})
SelectItem.displayName = "SelectItem"

const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-gray-100", className)}
    {...props} />
))
SelectSeparator.displayName = "SelectSeparator"

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
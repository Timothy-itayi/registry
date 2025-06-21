

interface OrthodoxDividerProps {
  className?: string
}

export function OrthodoxDivider({ className = "" }: OrthodoxDividerProps) {
  return (
    <div className={`flex items-center justify-center py-6 ${className}`}>
      <div className="flex items-center gap-4">
        <div className="h-px bg-gradient-to-r from-transparent to-amber-300 w-16" />
     
        <div className="h-px bg-gradient-to-l from-transparent to-amber-300 w-16" />
      </div>
    </div>
  )
}




interface DoveProps {
  className?: string;
}

export function Dove({ className = "" }: DoveProps) {
 return (
    <div className={`flex items-center justify-center py-12 ${className}`}>
       <div className="flex items-center gap-12">
     
      
          <span className="text-6xl"> 🕊️</span> 
     
        
       </div>
     </div>
  )
};

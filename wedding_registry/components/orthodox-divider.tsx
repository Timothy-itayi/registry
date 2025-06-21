
import Image from "next/image";

interface OrthodoxDividerProps {
  className?: string;
}

export function OrthodoxDivider({ className = "" }: OrthodoxDividerProps) {
 return (
    <div className={`flex items-center justify-center py-12 ${className}`}>
       <div className="flex items-center gap-12">
         <div
           className="h-[2px] w-40 rounded"
           style={{
             background:
               "linear-gradient(to right, transparent, rgb(110, 97, 75), transparent)",
           }}
         />
         <Image
           src="/registry_imgs/theotokos.jpg"
           alt="Decorative Divider"
           width={100}
           height={100}
           className="object-contain"
         />
         <div
           className="h-[2px] w-40 rounded"
           style={{
             background:
               "linear-gradient(to left, transparent, rgb(110, 97, 75), transparent)",
           }}
         />
       </div>
     </div>
  )
};

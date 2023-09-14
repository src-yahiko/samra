import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react"

export default function Home() {




  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <span className="bg-gray-400 text-black p-16 rounded-full opacity-10 top-1/2 -z-1 -translate-y-1/2 absolute">
        <Rocket className="w-52 h-52 animate-pulse" />
      </span>
    </div>
  )
}

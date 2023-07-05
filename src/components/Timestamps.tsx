import { timestamps } from "../assets/data"

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Timestamps = () => {
  return (
    <div className="hidden lg:flex gap-x-2 mt-6">
        {
            timestamps.map(({id, text}) => {
                return(
                    <div 
                    className={classNames(id === 5 ? "text-main-orange border border-main-orange bg-light-orange" : "text-gray-700 hover:bg-slate-100", "px-4 py-1.5 border border-gray-200 shadow-sm cursor-pointer text-xs font-bold rounded-full")}
                    key={id}
                    >
                        {text}
                    </div>
                )
            })
        }
    </div>
  )
}

export default Timestamps
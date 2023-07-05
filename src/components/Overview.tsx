import { info } from "../assets/entryFile/imagePath"
import BasicArea from "./BasicArea"
import Timestamps from "./Timestamps"
import TopData from "./TopData"
import { useGetData} from '../../hooks/useFetchData'

const Overview = () => {

    const { data } = useGetData()
    const graph_data = data?.graph_data;
    const top_location = data?.top_locations;
    const top_sources = data?.top_sources;
    const views = graph_data?.views

    const result = views && Object.keys(views)?.map((key) => (views[key]));
    const result2 = views && Object.keys(views)

  return (
    <div className="p-3">
        <div className="lg:flex justify-between">
            <div>
                <h3 className="text-xl font-bold">Good morning, Blessing ⛅️</h3>
                <p className="text-gray-700 mt-2 text-sm">Check out your dashboard summary.</p>
            </div>
            <div className="mt-4 lg:mt-0">
                <p className="text-main-orange text-sm cursor-pointer">View analytics</p>
            </div>
        </div>
        <Timestamps />
        <div className="my-6 rounded-md border border-gray-100">
            <div className="flex justify-between px-4 my-4">
                <div>
                    <h4 className="font-bold text-gray-800">Page Views</h4>
                    <p className="text-sm text-gray-500 font-base mt-2">All time</p>
                    <h2 className="font-extrabold text-4xl mt-4">500</h2>
                </div>
                <div>
                    <img
                    className="h-6 w-auto" 
                    src={info} 
                    alt="info" />
                </div>
            </div>
            {
               ( result && result2) && 
                <BasicArea views={result} dateTime={result2}/>
            }
        </div>
        <TopData top_location={top_location} top_sources={top_sources}/>
    </div>
  )
}

export default Overview;
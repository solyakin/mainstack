/* eslint-disable @typescript-eslint/no-explicit-any */

import { colorArr } from "../assets/data"
import DonutBasic from "./DonutBasic";
import { 
    convertArray, 
    convertCountries, 
    convertCountrySeries, 
    convertSourceArr, 
    convertSourceArray, 
    convertSourceSeries 
} from '../../utils/convertArray'
import { PropsType } from "./type";


const TopData = ({top_location, top_sources} : PropsType) => {

    const Countries = convertArray(top_location)
    const countriesArr = convertCountries(top_location)
    const countrySeries = convertCountrySeries(top_location);

    const sources = convertSourceArray(top_sources);
    const sourceArr = convertSourceArr(top_sources);
    const sourceSeries = convertSourceSeries(top_sources);

  return (
    <div data-testid="topdata-1">
        <div className="lg:grid lg:grid-cols-2 gap-6">
            <div className="shadow border border-gray-100 p-4 rounded-md">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-base font-semibold text-gray-900">Top Locations</h3>
                    <p className="text-xs cursor-pointer text-main-orange">View full reports</p>
                </div>
                <div className="lg:flex justify-between">
                    <div>
                        {
                            Countries?.map(({ country, percent, flag, color } : any) => {
                                return(
                                    <div className="flex items-center gap-x-2 mt-4" key={country}>
                                        {
                                            flag && 
                                            <img 
                                                src={flag}
                                                alt={country} 
                                                className="h-4 w-auto"
                                            />
                                        }
                                        <p className='text-sm'>{country}</p>
                                        <p className="text-sm font-bold">{percent}%</p>
                                        <div className={`${color} rounded-full h-3 w-3`}></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <DonutBasic 
                        percentArr={countrySeries} 
                        colors={colorArr} 
                        countries={countriesArr} 
                    />
                </div>
            </div>
            <div className="mt-3 lg:mt-0 shadow border border-gray-100 p-4 rounded-md">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-base font-semibold text-gray-900">Top Referral source</h3>
                    <p className="text-xs cursor-pointer text-main-orange">View full reports</p>
                </div>
                <div className="lg:flex justify-between">
                    <div>
                        {
                            sources?.map(({source, percent, flag, color} : any) => {
                                return(
                                    <div className="flex items-center gap-x-2 mt-4" key={source}>
                                        {
                                            flag && 
                                            <img 
                                                src={flag}
                                                alt={source} 
                                                className="h-4 w-auto"
                                            />
                                        }
                                        <p className="text-sm">{source}</p>
                                        <p className="text-sm font-bold">{percent}%</p>
                                        <div className={`${color} rounded-full h-3 w-3`}></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <DonutBasic 
                        percentArr={sourceSeries} 
                        colors={colorArr} 
                        countries={sourceArr} 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopData
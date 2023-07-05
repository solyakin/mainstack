import { Andoras, Finland, Netherland, Nigeria, USA, facebook, google, instagram, linkedin } from "../src/assets/entryFile/imagePath";

export const convertArray = (arr: { country: string; count: number; percent: number; }[]) => {

    return arr?.map((item: { country: string; count: number; percent: number; }) => {
        const flag = item?.country === "Nigeria" 
                    ? Nigeria : item?.country === "Ghana" 
                    ? Andoras : item?.country === "Germany" 
                    ? Netherland : item?.country === "United Kingdom" 
                    ? USA : item?.country === "Finland" 
                    ? Finland : "";
        
        const color = item?.country === "Nigeria" 
                    ? "bg-[#599EEA]" : item?.country === "Germany" 
                    ? "bg-[#844FF6]" : item?.country === "Ghana" 
                    ? "bg-[#0FB77A]" : item?.country === "Finland" 
                    ? "bg-[#FAB70A]" : item?.country === "United Kingdom" 
                    ? "bg-[#F09468]" : "";

        return{
            "country" : item?.country,
            "count" : item?.count,
            "percent" : item?.percent,
            "flag" : flag,
            "color" : color
        }
    })
}

export const convertSourceArray = (arr: { source: string; count: number; percent: number; }[]) => {

    return arr?.map((item: { source: string; count: number; percent: number; }) => {
        const flag = item?.source === "google" 
                    ? google : item?.source === "instagram" 
                    ? instagram : item?.source === "facebook" 
                    ? facebook : item?.source === "linkedin" 
                    ? linkedin : item?.source === "twitter"
        
        const color = item?.source === "google" 
                    ? "bg-[#599EEA]" : item?.source === "instagram" 
                    ? "bg-[#844FF6]" : item?.source === "facebook" 
                    ? "bg-[#0FB77A]" : item?.source === "linkedin" 
                    ? "bg-[#FAB70A]" : item?.source === "twitter" 
                    // ? "bg-[#F09468]" : "";

        return{
            "source" : item?.source,
            "count" : item?.count,
            "percent" : item?.percent,
            "flag" : flag,
            "color" : color
        }
    })
}

export const convertCountries = (arr: { country: string; count: number; percent: number; }[]) => {
    const list: string[] = [];

    arr?.map((item : { country: string; count: number; percent: number; }) => {
        list.push(item?.country)
    })
    return list;
}

export const convertCountrySeries = (arr: { country: string; count: number; percent: number; }[]) => {
    const list: number[] = [];
    arr?.map((item : { country: string; count: number; percent: number; }) => {
        list.push(item?.percent)
    })
    return list;
}

export const convertSourceArr = (arr: { source: string; count: number; percent: number; }[]) => {
    const list: string[] = [];
    arr?.map((item : { source: string; count: number; percent: number; }) => {
        list.push(item?.source)
    })
    return list;
}

export const convertSourceSeries = (arr: { source: string; count: number; percent: number; }[]) => {
    const list: number[] = [];
    arr?.map((item : { source: string; count: number; percent: number; }) => {
        list.push(item?.percent)
    })
    return list;
}

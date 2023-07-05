export type PropsType = {
    top_location : {
        country : string,
        count : number,
        percent : number
    }[],
    top_sources : {
        source : string,
        count : number,
        percent : number
    }[]
}

export type DonutType = {
    countries : string[],
    colors : string[],
    percentArr : number[],
}

export type AreaGraphType = {
    views : number[],
    dateTime : string[]
}
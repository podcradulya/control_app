import {createDate} from "./createDate"

export const formateDate = (date: Date, format: string) => {
    const d = createDate({date})
    return format
            .replace(/\bYYYY\b/, d.year.toString())
            .replace(/\bMM\b/, d.monthNumber.toString().padStart(2, "0"))
            .replace(/\DD\b/, d.dayNumber.toString().padStart(2, "0"))
}
import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
    // Validate `dateString` format before parsing
    const isValidFormat = /^\d{4}-\d{2}-\d{2}$/.test(dateString)

    if (!isValidFormat) {
        // Handle invalid format, return an error message or default value
        return <span>Invalid date format</span>
    }

    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>
}
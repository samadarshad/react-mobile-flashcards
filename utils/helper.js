import { format, formatDistance, formatRelative, subDays } from 'date-fns'

export const deleteProperty = ({ [key]: _, ...newObj }, key) => newObj;

export function makeSubtitle(lastAttemptedDate, lastScore, questionsLength) {
    let subtitle, lastAttemptText
    subtitle = `${questionsLength} questions`

    if (lastAttemptedDate !== null) {
        lastAttemptText = (lastAttemptedDate !== '' && lastScore !== '')
            ? `\nLast attempted ${formatDistance(lastAttemptedDate, new Date())} ago with a score of ${lastScore}/${questionsLength}`
            : ``

        subtitle = `${subtitle}${lastAttemptText}`
    }

    return subtitle
}
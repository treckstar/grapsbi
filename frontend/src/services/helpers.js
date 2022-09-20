export function twoDigits(number) {
    return number >= 10 ? number : `0${number}`
}

export function formatPaginationUrl(url, page) {
    if (!url) return

    return `${url}${url.includes('?') ? '&' : '?'}page=${page + 1}`
}

export function formatYoutubeUrl(url) {
    if (!url) return null

    return url.replace('watch?v=', 'embed/')
}

export function getVideoFetchUrl(url) {
    if (!url) return null

    if (url.includes('youtube')) {
        const id = url.replace('https://www.youtube.com/watch?v=', '')

        return getYoutubeVideoUrl(id)
    }

    return null
}

function getYoutubeVideoUrl(id) {
    return `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${process.env.YOUTUBE_API_KEY}&fields=items(id,snippet(title,description,publishedAt,thumbnails),contentDetails(duration),statistics(viewCount))&part=snippet,statistics,contentDetails`
}

export function formatDate(
    date,
    { year = 'numeric', month = 'long', day = 'numeric' }
) {
    return new Date(date).toLocaleString('en-US', {
        year,
        month,
        day,
    })
}

export function getFormattedDate(date) {
    return new Date(date).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

export function createGroupRefs(group) {
    return group.reduce((acc, el) => {
        if (!el[0] || !el[1]) return acc

        const items = el[1].length
            ? [
                  ...el[1]
                      .map((ref) => ref.current || ref)
                      .filter((ref) => ref !== null),
              ]
            : el[1]

        return acc.concat(items)
    }, [])
}

export function getMasonryColumns(array, value) {
    const columnAmount = value.length
    let columnIndex = 0

    return array.reduce((total, review) => {
        if (columnIndex === columnAmount) columnIndex = 0
        total[columnIndex].push(review)
        columnIndex++

        return total
    }, value)
}

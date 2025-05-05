function timeAgo(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const intervals: [number, string][] = [
        [60, 'second'],
        [60 * 60, 'minute'],
        [60 * 60 * 24, 'hour'],
        [60 * 60 * 24 * 30, 'day'],
        [60 * 60 * 24 * 365, 'month'],
        [Infinity, 'year'],
    ];

    for (let i = 0; i < intervals.length; i++) {
        const [threshold, label] = intervals[i];
        if (diffInSeconds < threshold) {
            const prevThreshold = i === 0 ? 1 : intervals[i - 1][0];
            const count = Math.floor(diffInSeconds / prevThreshold);
            return `${count} ${label}${count !== 1 ? 's' : ''} ago`;
        }
    }

    return 'just now';
}

export default timeAgo;

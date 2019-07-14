function formatTime(minutesTotal) {
    const mints = minutesTotal % 60;
    const hoursTotal = (minutesTotal - mints) / 60;
    const hours = hoursTotal % 24;
    const days = Math.floor(hoursTotal / 24);
    return `${days} day(s) ${hours} hour(s) ${mints} minute(s)`;
}

console.log(formatTime(120));
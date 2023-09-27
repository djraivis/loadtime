// Function to calculate average
const calcAverage = numbers =>
  numbers.reduce((sum, num) => sum + num, 0) / numbers.length

const channelPageLoadTimes = {
  dave: [6.55, 3.29, 2.69],
  drama: [2.61, 2.6, 2.87],
  w: [2.26, 2.43, 2.39],
  yesterday: [3.0, 2.26, 2.27],
}

// Calculate averages for each channel separately
const channelAverages = {}
for (const channel in channelPageLoadTimes) {
  if (channelPageLoadTimes.hasOwnProperty(channel)) {
    const loadTimes = channelPageLoadTimes[channel]
    channelAverages[channel] = calcAverage(loadTimes)
  }
}

// Log individual channel averages and overall average
for (const channel in channelAverages) {
  if (channelAverages.hasOwnProperty(channel)) {
    console.log(`${channel}: ${channelAverages[channel]}`)
  }
}

// Calculate the overall average of all channels
const overallAverage = calcAverage(Object.values(channelAverages))

console.log(`Overall Average: ${overallAverage}`)

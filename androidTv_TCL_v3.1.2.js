// Device name: | Production Version: | Branch Name:  | Date:
// Function to calculate average
const calcAverage = (...numbers) =>
  numbers.reduce((sum, num) => sum + num, 0) / numbers.length

// Load times in seconds for a cold page (no cache) on the [1st, 2nd, 3rd] and subsequent loads...
const appLoadTimes = [6.76, 8.32, 5.81, 4.0]
const homePageLoadTimes = [1.95, 1.88, 3.0]
const categoryPageLoadTimes = {
  comedy: [3.11, 3.34, 2.03, 2.18],
  documentaries: [5.47, 2.44, 1.93],
  drama: [2.72, 1.79, 2.96],
  entertainment: [2.5, 3.21, 2.37],
  lifestyle: [2.58, 2.22, 2.14],
  real_life: [2.99, 2.59, 2.41],
}
const channelPageLoadTimes = {
  dave: [4.0, 2.58, 2.45],
  drama: [3.53, 2.14, 2.57],
  w: [3.31, 2.32, 2.31],
  yesterday: [2.64, 2.94, 2.45],
}

const showPageLoadTimes = [4.63, 1.32, 1.47]
const videoPages = [2.34, 3.45, 2.51]
// Calculate averages
const AppLoadTime = calcAverage(...appLoadTimes)
const HomePage = calcAverage(...homePageLoadTimes)
const CategoryPages = calcAverage(
  ...Object.values(categoryPageLoadTimes).flatMap((times) => times)
)
const ChannelPages = calcAverage(
  ...Object.values(channelPageLoadTimes).flatMap((times) => times)
)
const ShowPage = calcAverage(...showPageLoadTimes)
const VideoPage = calcAverage(...videoPages)

// Log results to console
console.log(`AppLoadTime = ${AppLoadTime}`)
console.log(`HomePage = ${HomePage}`)
console.log(`Category Pages = ${CategoryPages}`)
console.log(`ChannelPages = ${ChannelPages}`)
console.log(`ShowPage = ${ShowPage}`)
console.log(`VideoPage = ${VideoPage}`)

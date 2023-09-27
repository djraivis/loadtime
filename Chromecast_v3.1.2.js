// Chromecast | Production Version 3.1.2 | Branch: Release-Green-Light | Tested on September 27, 2023
// Function to calculate average
const calcAverage = (...numbers) =>
  numbers.reduce((sum, num) => sum + num, 0) / numbers.length

// Load times in seconds for a cold page (no cache) on the 1st, 2nd, 3rd, and subsequent loads...
const appLoadTimes = [8.63, 8.5, 9.57]
const homePageLoadTimes = [1.49, 1.9, 1.5]
const categoryPageLoadTimes = {
  comedy: [2.63, 2.56, 2.66],
  documentaries: [1.71, 1.61, 2.72],
  drama: [2.71, 2.49, 1.56],
  entertainment: [1.92, 2.2, 1.89],
  lifestyle: [1.97, 2.17, 1.83],
  real_life: [2.23, 2.22, 2.34],
}
const channelPageLoadTimes = {
  dave: [2.39, 2.1, 2.27],
  drama: [2.06, 2.25, 2.09],
  w: [1.91, 2.11, 1.92],
  yesterday: [2.32, 3.65, 1.94],
}
const showPageLoadTimes = [0.96, 1.07, 0.96]
const videoPages = [2.84, 2.04, 2.63]

// Calculate averages
const AppLoadTime = calcAverage(...appLoadTimes)
const HomePage = calcAverage(...homePageLoadTimes)
const CategoryPages = calcAverage(
  ...Object.values(categoryPageLoadTimes).flatMap(times => times)
)
const ChannelPages = calcAverage(
  ...Object.values(channelPageLoadTimes).flatMap(times => times)
)
const ShowPage = calcAverage(...showPageLoadTimes)
const VideoPage = calcAverage(...videoPages)

// Log results to console
console.log(AppLoadTime)
console.log(HomePage)
console.log(CategoryPages)
console.log(ChannelPages)
console.log(ShowPage)
console.log(VideoPage)

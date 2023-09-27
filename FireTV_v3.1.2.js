// FireTV | Production Version 3.1.2 | Branch: Release-Green-Light | Tested on September 27, 2023
// Function to calculate average
const calcAverage = (...numbers) =>
  numbers.reduce((sum, num) => sum + num, 0) / numbers.length

// Load times in seconds for a cold page (no cache) on the 1st, 2nd, 3rd, and subsequent loads...
const appLoadTimes = [6.41, 6.85, 5.45]
const homePageLoadTimes = [2.44, 1.88, 1.5]

const categoryPageLoadTimes = {
  comedy: [2.81, 2.58, 3.21],
  documentaries: [2.69, 2.49, 2.45],
  drama: [3.22, 2.66, 2.84],
  entertainment: [2.18, 2.14, 2.18],
  lifestyle: [2.08, 2.2, 2.49],
  real_life: [2.4, 2.45, 2.34],
}
const channelPageLoadTimes = {
  dave: [2.65, 2.44, 2.54],
  drama: [2.38, 2.29, 2.41],
  w: [2.08, 2.63, 2.36],
  yesterday: [3.26, 2.54, 2.84],
}

const showPageLoadTimes = [1.11, 0.7, 0.88]
const videoPages = [1.04, 0.7, 1.51]

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

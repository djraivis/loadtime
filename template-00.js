// Device name: | Production Version: | Branch Name:  | Date:
// Function to calculate average
const calcAverage = (...numbers) =>
  numbers.reduce((sum, num) => sum + num, 0) / numbers.length

// Load times in seconds for a cold page (no cache) on the [1st, 2nd, 3rd] and subsequent loads...
const appLoadTimes = []
const homePageLoadTimes = []

const categoryPageLoadTimes = {
  comedy: [],
  documentaries: [],
  drama: [],
  entertainment: [],
  lifestyle: [],
  real_life: [],
}
const channelPageLoadTimes = {
  dave: [],
  drama: [],
  w: [],
  yesterday: [],
}

const showPageLoadTimes = []
const videoPages = []

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

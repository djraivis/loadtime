// Calculate average of 3 numbers
const calcAverage = (a, b, c) => (a + b + c) / 3

// Average scores for each page on Production Fire TV v.3.1.2
// Page Load Time in seconds (1st load + 2nd load + 3rd load) = Average

let AppLoadTime = calcAverage(4.73, 5.77, 5.5)
let HomePage = calcAverage(2.73, 1.57, 1.95)

let CategoryPage_comedy = calcAverage(2.27, 2.65, 2.68)
let CategoryPage_documentaries = calcAverage(2.43, 2.37, 2.52)
let CategoryPage_drama = calcAverage(2.11, 2.7, 2.43)
let CategoryPage_entertainment = calcAverage(2.11, 2.03, 2.15)
let CategoryPage_lifestyle = calcAverage(1.99, 2.1, 2.22)
let CategoryPage_real_life = calcAverage(2.29, 2.38, 2.55)

let ChannelPage_dave = calcAverage(2.33, 2.12, 2.23)
let ChannelPage_drama = calcAverage(2.36, 2.23, 2.37)
let ChannelPage_w = calcAverage(2.06, 2.31, 2.06)
let ChannelPage_yesterday = calcAverage(1.88, 2.16, 2.49)

import leaderboard from './../assets/LeaderboardPage.png';
import home from './../assets/AppMock.png';
import statistics from './../assets/StatisticsPage.png';


const leaderboardsection = {
    headertext: "Community Leaderboard enables users to compare their performance with the rest of the community",
    name : "Community Leaderboard",
    elaboration: "We nudge our users to encourage behavior changes that reduce waste generation. This is based on similar efforts that have successfully encouraged recycling and directed overseas policies. Our goal is to use relative performance as a motivational nudge as well as to appreciate the efforts of the community as a whole.",
    src: leaderboard
};

const homesection = {
    headertext: "Seamlessly links waste data with the App when waste is disposed using our Smart Bin",
    name : "Home Page",
    elaboration: "The Homepage enables users to view their waste disposal at a glance, by displaying key information such as statistics of waste thrown by user in the current week and average waste thrown that week by all users. A visual is also provided for the user to gauge their own performance relative to the rest of the community. ",
    src: home
};

const statisticsection = {
    headertext: "Provides access to individual waste disposal trends",
    name : "Statistics Page",
    elaboration: "While we collectively work toward a zero-waste future, it is hard for the individual to quantify their impact without personalized knowledge of their waste habits, diffusing the responsibility of waste management to other parties. WasteLess supports its users by visualizing the relevant data so they can see their history and compare that to where they are now.",
    src: statistics
};



export {leaderboardsection,homesection,statisticsection};

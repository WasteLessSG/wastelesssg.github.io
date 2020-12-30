import leaderboard from './../assets/LeaderboardPage.png';
import home from './../assets/AppMock.png';
import statistics from './../assets/StatisticsPage.png';


const leaderboardsection = {
    headertext: "Community Leaderboard enables users to compare their performance with the rest of the community",
    name : "Community Leaderboard",
    elaboration: "We use the psychological concept of behavioural nudging, comprising positive reinforcement and indirect suggestions, to encourage positive changes of citizen behavior to reduce waste generation. Nudging has shown success in improving recycling and reducing wastage, and even directing government policy overseas and we intend to harness nudging to inculcate personal responsibility and lifestyle changes among Singaporeans to waste less and recycle more.",
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
    elaboration: "While we collectively work toward a zero-waste future, it is hard for the individual to quantify their impact without personalized knowledge of their waste habits, diffusing the responsibility of waste management to other parties. WasteLess not only mitigates this issue, but by returning personalised tips based on their data also helps make environmentally-friendly choices more apparent, intuitive and appealing.",
    src: statistics
};


export {leaderboardsection,homesection,statisticsection};

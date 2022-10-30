import steamImg from "./images/steam-games-in-common-img.png";
import timelyImg from "./images/TimelyEvents-img.png";
import recipeImg from "./images/recipe-search-hub-img.png";
import posImg from "./images/java-pos-system-img.png";
import memeImg from "./images/meme-generator-img.png";

const projects = [
    {
        name: 'Steam Games in Common',
        link: 'https://github.com/timfierek/SteamGamesInCommon',
        img: steamImg,
        description: 'Steam Games in Common is a simple to use web application using the Spring Framework and the Valve API to return a list of games that all entered users own. Also supports entering your own steam account and selecting friends to search for games between.',
        skills: [
            'Java',
            'Spring',
            'REST APIs'
        ],
        order: 2
    },
    {
        name: 'TimelyEvents',
        link: 'https://github.com/timfierek/TimelyEvents-Calendar-Application',
        img: timelyImg,
        description: 'TimelyEvents is a company/team focused calendar powered in part by DaysOfTheYear.com. The application supports user registration/login, creating/deleting/updating events, and daily/weekly/monthly view options. It also has a schedule finder feature and an intuitive UI.',
        skills: [
            'Java',
            'Spring',
            'REST APIs',
            'MongoDB',
            'JSP and JSTL',
            'HTML',
            'CSS',
            'AWS'
        ],
        order: 1
    },
    {
        name: 'Recipe Search Hub',
        link: 'https://github.com/timfierek/Recipe-Search-Engine-Application',
        img: recipeImg,
        description: 'Recipe Search Hub is an extensive recipe searching web application implementing MongoDB and allowing for a user-saved favorites section. Includes comprehensive recipe information for thousands of recipes; directions, ingredients, nutrition, and more.',
        skills: [
            'Java',
            'Spring',
            'REST APIs',
            'MongoDB',
            'JSP and JSTL',
            'HTML',
            'CSS'
        ],
        order: 3
    },
    {
        name: 'Java POS System',
        link: 'https://github.com/timfierek/Point-of-Sale-Application',
        img: posImg,
        description: 'Thourougly tested and thoughtfully designed terminal based point of sale application built in Java. Allows for inventory and price management, and accepts 4 separate payment methods. Also allows for item sales, and auto generated transaction receipts.',
        skills: [
            'Java',
            'JUnit',
            'OOP',
            'TDD'
        ],
        order: 5
    },
    {
        name: 'Meme Generator',
        link: 'https://github.com/timfierek/meme-generator',
        img: memeImg,
        description: 'Easy to use web application which leverages the power of React and the imgflip API to create memes.',
        skills: [
            'React',
            'TypeScript',
            'HTML',
            'CSS',
            'RESTful APIs'
        ],
        order: 4
    }
    // {
    //     name: 'Crypto Gaming with Wagers (working title)',
    //     link: '',
    //     img: '',
    //     description: 'Retro style arcade game website which allows players to play simple games like pong with Ether wagers placed on the outcome of each game.',
    //     skills: [
    //         'React',
    //         'Ethers.js',
    //         'TypeScript',
    //         'HTML',
    //         'CSS',
    //         'Solidity',
    //         'Java',
    //         'Spring',
    //         'CockroachDB',
    //         'RESTful APIs'
    //     ],
    //     order: 6
    // }
]

export default projects;
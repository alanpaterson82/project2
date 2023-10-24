# The Movie Quiz App

I have created a very basic quiz that poses five movie based questions, with a 'next question' option once an answer has been provided. Once all five questions have been answered you are shown your score out of five. If any are incorrect, all of the answers for that question will be highlighted red when you scroll back through, and you will be able to amend your answer before submitting your attempt again. If correct, the answers will show as green.

A live demo of this project can be found at [Movie Quiz](https://8000-alanpaterson82-project2-ls25jiopm0.us2.codeanyapp.com/)

![Am I Responsive](assets/images/am-i-responsive.jpg)

# Goals

- To use Javascript to create a basic quiz platform
- To make the design simple and user friendly
- To create an enjoyable quiz for all users
- To provide the user's final score and allow them the option to try the quiz again

# Features

On the landing page there is the header of 'The Movie Quiz App' and the first question to be answered. It is self explanatory what is expected of the user (to answer the question and click 'next question') until they get to the end of the quiz and can submit their answers.

![Landing Page](assets/images/landing-page2.jpg)

Each subsequent page then has another question, and a 'previous question' or 'next question' option.

![Next Question](assets/images/previous-question-next-question.jpg)

The layout, fonts and colours used are very basic, which allows for easy navigation, future projects will be enhanced significantly as my confidence and knowledge grows.

# Technologies Used

- Javacsript
- CSS
- HTML

# Issues

1. The very basic nature of the website is due to my lack of ability to create both a visually pleasing and responsive project at this stage of my learning
2. I struggled with the Javascript language and often came up against issues where content disappeared (i.e the list of questions) and it took significant time and effort to resolve these issues, which generally was to do with grammar, spacing and layout errors within my code
3. I would have preferred to have had an option for a participant to add their username, but after multiple attempts this would not work and could not be resolved
4. There was 'overlapping' of the button and text on smaller devices, this has now been resolved through the use of media queries and amending font size
5. The title has now been changed to 'The Movie Quiz App' as it was previously showing as 'Document'
6. The initial font has been changed to Roboto for improved readability
7. All broken links and images now fixed in the README file

# Testing

The site has been tested in multiple search engines (Safari, Google Chrome and Firefox)

Validator Testing

- 23 issues were flagged via JSHint but I was unable to resolve them, however, an undefined variable was also detected and amended relating to the use of the 'let' keyword.

- W3C HTML Validator Result - no errors

![W3C HTML Validator Result](assets/images/w3c-html-validator-result2.jpg)

- Jigsaw Validator Result - no errors

![Jigsaw Validator Result](assets/images/w3c-jigsaw-validator-result.jpg)

- Lighthouse results - accessibility at 100%

![Lighthouse Results](assets/images/lighthouse-results5.jpg)

# Deployment

I used Github to deploy the site by completing the below

- Clicking on the relevant repository from the GitHub homepage
- Clicking 'settings'
- From the dropdown, changing the branch from 'none' to 'main'
- Clicking 'save'
- When the page was refreshed the link was provided to be used for deployment

## Credits

- Fonts taken from Google Fonts
- A significant portion of my code can be attributed to the structure of the quiz on sitepoint.com/simple-javascript-quiz/. My knowledge and understanding of this module was severely limited, and much of my submitted project was replicating an existing template and amending it as needed for my content to be unique
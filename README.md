This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Org Zero Humu
A visual breakdown of company info organized by departments


## Getting Started
- Change the file extension from `text-converter.txt` to `text-converter.js` before getting started

- Then convert all files from `.txt` and `test.txt` to `.js` and `test.js` by running `yarn convert`

- Install all dependencies by running `yarn add`

- Start the application by running `yarn start`


## Test
- To run all test in the application `yarn test`

- To run test and get coverage for all files `yarn test -- --coverage`


## Questions
1. Are there any questions would you ask to a designer who sent this mockup and spec?

Yes, and my questions are as followed:
- Why was this user interface chosen?
- Why was the organization department represented this way? Why not in an `accordion`?

2.  Did you make any assumptions while developing this page?

Yes. I made the following assumptions:
- I assumed that the width of each department `Box` represented is based on the size of its employees
- I assumed that the space at the top of each box (`padding-top`) is based on the height of the content multiplied by the index of the department
- I assumed that if the data count grows more than the provided colors, I'll have to recycle the colors

3. You don’t need to make this responsive but if given more time, how would you make it responsive?
- I'll make it responsive by stacking the boxes (vertically) on one another and making the scroll move from top to bottom, also I'll reduce the padding top for all boxes so their wouldn't be excess space on screens with max width of `600px`

4. If given more time, how would you improve readability and accessibility?
- I'll provide an alternative view for screen readers e.g representing it in a table. I would then hide the current UI by setting `aria hidden` to `true`,
so screen readers don't announce the content twice

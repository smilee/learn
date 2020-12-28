# December 28, 2020

## Define components as either presentational or container
The `Gachapon` component carried most of the code before the refactoring took place. To practice the separation of concerns, a move of the code about the machine's logic to the container component took place. Additional tests, as well as a reorganization to further separate concerns, would be ideal.

## Remove `pointer-events: none` from CSS
`pointer-events: 'none';` was removed from CSS. Bugs fixed with the trick popped up again. Kent C. Dodds recommends that we use `pointer-events: 'none';` and trust the browser with its execution. The focus on making the logic testable led to removing the code, although the details are uncertain. Additional work is required to fix bugs introduced by this code change.

## Handle states as props
States were passed down as props rather than as dynamic classes. It is uncertain whether these changes introduce new bugs. The new code seems to take better advantage of React and Emotion, however. Additional test code for CSS animations is needed.

## Resources
- [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- [Pointer events](https://javascript.info/pointer-events)
- [Setting pointer-events to 'none'](https://github.com/testing-library/react-testing-library/issues/356)
- [@emotion/jest](https://emotion.sh/docs/@emotion/jest#gatsby-focus-wrapper)

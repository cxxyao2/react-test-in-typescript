## setup test environment

- attention: keep the versions of all libraries the same as in package.json
- use google search and javascript knowledge if a target to test or a property is not found
- yarn install

## package.json

```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "test:cover": "react-scripts test --coverage src",
    "eject": "react-scripts eject"
  },

```

## commands

```
yarn add package-name
yarn add pakcage-name --dev
yarn create react-app my-app --template typescript
yarn test
yarn test -- ./LoginForm.test.

```

skipping test with test.skip
`test.skip('some description', ()=>{})`

when a test fail, try using test.only
`test.only('...',()=>{})`

restore references
`jest.spyOn() ... jest.restoreAllMocks()`
mockImplementation is global, so we should restore the previous implementation
`Math.abs = jest.spyOn(Math,'abs').mockImplementation((x)=>x+1) ... ... Math.abs.mockRestore()`

## libraries

- Typescript
- React + Redux
- jest + @testing-library/react
- React Router
- React-transition-group
- msw

## tested

- value-based elemnt, e.g <CustomCompnent />
- intrinsic element , e.g <div >
- hooks, e.g. setState
- test async API call
- test async Function call
- custom hook
- Redux
- HTML elements: select, checkbox,
- Custom Context
- router
- transition group
- test converage
- Test input in login form
- partial matching

## Proofs

![test-result](./public/screenshot.jpg)

![async-test](./public/async-function-test.jpg)

![coverage](./public/test-coverage.jpg)

## References

[1. react samples](https://testing-library.c
om/docs/example-codesandbox)

[2. fake timers](https://onestepcode.com/testing-library-user-event-with-fake-timers)

[3. test select](https://cathalmacdonnacha.com/how-to-test-a-select-element-with-react-testing-library)

## JSX.IntrinsicElements

```

JSX.IntrinsicElements["div"]; // All properties of a "div"
JSX.IntrinsicElements["span"]; // All properties of a "span"

```

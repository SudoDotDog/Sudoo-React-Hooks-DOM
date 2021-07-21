# Sudoo-React-Hooks-DOM

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-React-Hooks-DOM/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-React-Hooks-DOM/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-React-Hooks-DOM/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-React-Hooks-DOM)
[![npm version](https://badge.fury.io/js/%40sudoo%2Freact-hooks-dom.svg)](https://badge.fury.io/js/%40sudoo%2Freact-hooks-dom)
[![downloads](https://img.shields.io/npm/dm/@sudoo/react-hooks-dom.svg)](https://www.npmjs.com/package/@sudoo/react-hooks-dom)

React Hooks DOM

## Install

```sh
yarn add @sudoo/react-hooks-dom
# Or
npm install @sudoo/react-hooks-dom --save
```

## Usage

Call multiple hook update function normally only cause a single re-render.

```ts
export const MyComponent = () => {
    setA();
    setB();
};
```

In case of update functions are called within a promise, the following path will also only trigger single component re-render.

```ts
import { batchUpdate } from "@sudoo/react-hooks-dom";

export const MyComponent = () => {

    new Promise((resolve: () => void) => {

        batchUpdate(() => {
            setA();
            setB();
        });
        resolve();
    });
};
```

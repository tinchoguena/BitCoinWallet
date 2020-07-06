# BitCoinWallet

This is wallet that allows you to see your bitcoin current balance and histroy.

## Prerequisites

- Node and npm
- Watchman brew install watchman
- React Native CLI npm install -g react-native-cli
- XCode > 9
- JDK > 8
- Android Studio and Android SDK

## Base dependencies

- [React-Navigation](https://reactnavigation.org/) navigation library.
- [Redux](https://redux.js.org/) for state management.
- [Redux-Thunk](https://github.com/reduxjs/redux-thunk) to dispatch asynchronous actions.
- [Redux devtools](https://extension.remotedev.io/) extension for debbuging.
- [Styled](https://styled-components.com/) components for styling.
- [React Native Vector Icons](https://oblador.github.io/react-native-vector-icons/)
- [Jest](https://jestjs.io/) for testing.

## Installation

- Clone the repository into your computer.

- Then:

```bash
cd BeetrackChallenge

npm install

cd ios

pod install

cd ..
```

iOS

- Open xCode, open project, go to BeetrackChallenge/ios and select .workspace file. Wait for it to build, hit play (will open the simulator).

Android

- Open Android studio, open project, select BeetrackChallenge/android wait for the gradle to finish build and hit play (will open the simulator).

## Usage

Click the "add new address" button, then the "save address" button and it will take you to your wallet when you can see your current balance. You can check the transaction history on both add new address and wallet screen. 


## Author

[Martin Guena](https://www.linkedin.com/in/martinguena/)

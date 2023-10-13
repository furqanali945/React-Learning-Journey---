# Namaste React Course

## Parcel

- Zero Config
- Dev Build
- local server
- HMR - Hot Module Replacement
- File watching algorithm - written in c++
- Caching - Faster Build
- image optimization
- Minifcation incase of production build.
- Bundling.
- Compressing
- Consistent Hashing
- Code Spliting.
- Differential Bundling. Support older browsers.
- Diagnostic.
- Error handing.
- Htpps
- Tree shaking - remove unused code for us.
- Different build for dev and production.

## Food Ordering System

- Header Component
  - logo component
  - Nav items
- Body Component
  - search component
  - Restaurant container
    - restaurant card
      - img, restaurant name, star rating, cuisine, delivery time
- footer component

  - copyright
  - links
  - Contact Info

  There are 2 types of export and import:

  - Default export/import.

    - export default component;
    - import component from "path";

  - Named export/import.
    - export {component};
    - import {component} from "path";

# React Hooks

(Normal JS utility functions)

- useState() - function provided by react - super powerful state variables in react
- useEffect() - function provided by react - 2 arguments - 1st callback function - 2nd dependency array
- If you want to do something after render you need to use useEffect.
- Whenever a state variable changes such as useState react will re render the component so it can update the UI based on the updated value. You can't do this with normal variable as react will not know it has been changed and needs to re render.
- useEffect() has only 1 mandatory requirmeent which is a callback function.
- If the dependency array is not provided it will re render on every time the component renders.
- If the dependency array is empty {} then it will only render once after the initial render.
- If the dependency is provided in the array such as setButton then it will also re render when their is any change to that variable.
- Never update state variables directly like count = 2 etc.

# Monolith & micro services architecture

In monolith architecture, we have everything at the same place:

- DB
- API
- UI Code
- Authentication Code
- OTP code etc

In micro service we have different services for every parts together they form a big app. It provides separation of concern also
provide single responsibility principle. Different team can confortably work on their service and different repo.

## How are they deployed?

- Suppose our react project is a Ui microservice.
- You can have different tech stack for different service.
- Just like our project it is deployed on 1234 port all the other services run on their own port.
- / -> 1234 - UI
- /api -> 1000 - BE
- /sms -> 3000 - SMS
- All these ports can be mapped to a domain name.
- Now we will how our react app will explore different services.

# 2 approaches to get data from the backend.

- 1st approach When the app loads -> api -> render.
- poor user experience.

- 2nd approach load -> render -> api -> re render the data.
- In react, we will always use 2nd approach. This is a better approach.
- It will also give you better user experience.
- React has best render mechanism so we shouldn't worry about re render in 2nd approach.

## Look into shimmer UI and why we use it.

We use shimmer Ui to provide something to the user and it improves the overall user experience.

# Router in react

- To be able use routing in react you can install the "react-router-dom" using NPM.
- Also, your routes should be in the App.js file and you can create the routes using createBrowserRouter and it takes an array
  of objects.
- Also, you can make your own 404 page using errorElement: <Error /> in your createBrowserRouter App object.
- Also, you can show better error messages on your 404 page using "useRouteError" hook in your error component.

# Types of Routing in web application:

- Server side routing
  - In case of server side routing and we are navigation to other page such as about it it will fetch the about us page from server with a network call. The page is coming from server.
- Client side routing

  - In case of client side routing it doesn't make the server call after the initial call and the components only changes based on click such as in case of click on about us page.

  # Graphql

  It basically helps you in fetching the right amount of data as you see when you make an api call you get a lot of data it basically solves the problem of over fetching data. It is the major purpose of GRAPHQL.

  # Class Based Components

  - For making a class based component work you need to first import React from "react".
  - Secondly you need to use the key word "class" and your class will extend React.Component.
  - For using props in your component you need to pass the props in constructor of your class.
  - Also pass the props to super method of your class.
  - Without passing it super method you will not be able to use your props in your component.
  - lastly you need to use render method to return jsx and defining your state variables.
  - Also, every state variable is defined in a object of "this.state" and there you can define your state variables like:
    - this.state{
      count: 0,
      }
  - You can de constructure your state variable in your render method by:
    - const{count} = this.state;
  - state is a reserved keyword in your class based component.
  - To update a class based component's state you need to use this.setState() method where you pass the updated value for the state as we do in set function of a functional based component.

  # Life cycle of class based component

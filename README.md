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

- useState() - super powerful state variables in react
- useEffect() -

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

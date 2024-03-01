# IspPlanesTestChallenge

During this test task, I focused on creating reliable applications with services separated based on their objectives. I created abstract components like DestroyableDirective, ListPageComponent, and abstract service APIInternetProvider. These components help to build applications with reusable generic components. Additionally, I focused on the proper (simulation of proper) implementation of sorting for this list. I created query params properties that are part of ListPageComponent and, based on these properties, simulated filtration on the server side.

Tasks such as filtration and sorting should be implemented with server-side resources. The client-side doesn't have the full picture, and we do not know how many records we have on the server. (We cannot properly sort 100 items on the client when we have much more, like 1000 or 10000, on the server.)

As a result, I implemented the first variant of a page with tariffs that can be extended with additional functionalities like pagination, propagation of parameters to the router (and the ability to send filtered results to other users), etc.

## List of Challenge tasks:

- ([x]) Angular app
- ([x]) App configuration with Prettier and ESLint
- ([x]) SCSS preprocessor (with configuration to have access to variables using @import 'all')
- ([x]) List of internet provider plans
- ([x]) List based on mocked data
- ([x]) Loading state
- ([x]) Separate services for:
  - ([x]) Sorting (price / upload speed / download speed)
  - ([x]) State of Tarifes
  - ([x]) API for requests
- ([x]) Created abstract component for "list" pages. Create abstraction over page with pagination.
- ([x]) Page pagination and send all required information to the server (if we had it);
- ([x]) Created abstraction for ApiService => can be replaced with another implementation (we need to change only the provider value in the module);
- ([x]) Adaptive design according to wireframes
  - ([x]) Desktop
  - ([x]) Tablet
  - ([x]) Mobile

What I would do next:

- ([ ]) Pagination or infinite scroll to handle much more records;
- ([ ]) Set query params from the list page to the router
- ([ ]) Subscribe to query params from the router to update the list when the user changes the URL
- ([ ]) Improvements in layouts (I didn't spend too much time on it)
- ([ ]) Improvements with fonts
- ([ ]) Unit-test coverage
- ([ ]) Page with Tarif's detail information
- ([ ]) More granular separation to components in (internet-plan-component). Move repetitive code to components;

## Development server

Run `npm install` (node version v20.11.1);
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

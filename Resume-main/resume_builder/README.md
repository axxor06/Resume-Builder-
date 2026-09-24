# Resume Builder
- Build a project using vite+react
npm create vite@latest resume-builder
remove unwanted elements from component
- intstall packages for styling
->install material ui
-> google fonts
->bootstrap cdn link
-> react icons
- project structuring (component creation)
 ->react router dom for routing 
 ->wrap app jsx with browserroute and make path using router inside routes inside routes on app component
-> collect resumes details from userinputs using state(onchange) and sorted as a object in parent component 
->display resume preview using state lifting because react only support undirectional data flow
->send resume data to json server
->create an instance using axios 
->create request response cycle
->create apiService file for configuring axios interceptors 
-> connected with base-url
->make api call for multiple request using httpmethod (GET,POST,PUT,DELETE)
->make changes in resume after displaying id and put menthod 
->download resume and post resume 




- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

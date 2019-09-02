# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a javascript library created by Facebook in order to help create a more efficient way to create applications that requires repeated types of code. Instead of constantly repeating your code using the DOM API, React creates a virtual DOM and allows you to code in JSX that combines all HTML, CSS, and Javascript into one file, making it extremely easy for users. Using the components concept as the back-bone of it's technology, React Developers are able to create small pieces of code that represent certain features and reuse them as a whole when the feature is needed in other applications. 

2. What does it mean to think in react?

Thinking in react means thinking in small components. You break the project/task down to smaller pieces so that you could work on each features individually. When you are done working with these components, you will have small separated features that could be easily integrated into larger apps. 

3. Describe state.

State is a javascript object that data that is passed into the virtual DOM. States are only passed into the component that it exists in. 

4. Describe props.

Props are objects that could be passed down unilaterally from parent to child components. They are data with key value pairs, and it is the only way that you could pass data in react without using some sort of hack. 

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are events that could have an external effects on your components. These event could occur during instances like fetching an API, manipulating the DOM, subscriptions etc.. You use "useEffect" to sync effects in React component to state or prop change. useEffect() allows you to perform side effects within a component. 

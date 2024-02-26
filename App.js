//const element = document.createElement("h1");
//element.innerHTML = "Hello World from javascript";
const root = document.getElementById("root");
//root.append(element);

const reactele = React.createElement("div", {}, "hello world from React");
ReactDOM.createRoot(root).render(reactele);

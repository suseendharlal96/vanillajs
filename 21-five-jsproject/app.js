const routes = {
  "/": Home,
  "/blur": Blur,
};
const root = document.getElementById("root");
root.innerHTML = routes[0];
const navigate = (path) => {
  console.log(location.origin);
  console.log(location.pathname);
  history.pushState({}, "", location.origin + path);
  root.innerHTML = routes[location.pathname];
};

onpopstate = () => {
  root.innerHTML = routes[location.pathname];
};
onload = () => {
    console.log('in');
  history.pushState({}, "", location.origin + '/');
  root.innerHTML = routes[location.pathname];
};

// This  function  is  responsible for fetching the data
async function fetchData() {
    const usersResponse = fetch('https://jsonplaceholder.typicode.com/users');
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const todosResponse = fetch('https://jsonplaceholder.typicode.com/todos');
// -try  catch  block  used to handle errors

    try {
    //  promise will fetch  data from all ends
        const [usersRes, postsRes, todosRes] = await Promise.all([usersResponse, postsResponse, todosResponse]);
        const users = await usersRes.json();    /* json  function  is cqalled in order to convert data into json*/ 
        const posts = await postsRes.json();
        const todos = await todosRes.json();

        renderData(users, posts, todos);    /* now data would be  rendered  */
    } catch (error) {
        console.error('Error fetching data:', error);      /*used to display errors*/
    }
}

function renderData(users, posts, todos) {                     /*used to displaymdataonto web`*/
    const usersDiv = document.getElementById('usersPlaceholder');
    const postsDiv = document.getElementById('postsPlaceholder');
    const todosDiv = document.getElementById('todosPlaceholder');

    usersDiv.innerHTML = '<h2>Users</h2>' + getUsersHTML(users);
    postsDiv.innerHTML = '<h2>Posts</h2>' + getPostsHTML(posts);
    todosDiv.innerHTML = '<h2>Todos</h2>' + getTodosHTML(todos);

}
function getUsersHTML(users) {
    return users.map(user => `<div>${user.id}: ${user.name}</div>`).join('');   /*map funvtion isiused to iteratye over each loop and  join  is  used to join  the html string */
}

function getPostsHTML(posts) {
    return posts.map(post => `<div>${post.id}: ${post.title}</div>`).join('');
}

function getTodosHTML(todos) {
    return todos.map(todo => `<div>${todo.id}: ${todo.title}</div>`).join('');
}

fetchData();

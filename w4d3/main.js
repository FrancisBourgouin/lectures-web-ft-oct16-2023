// é
// &eacute;
// è
// &eagrave;

// More secure!
// Add event listener, css properties, etc easily
const createPostElementGood = (post, users) => {
  const user = users.find((user) => Number(post.userId) === user.id);

  const $li = $("<li>"); // Create an element li
  const $h1 = $("<h1>"); // Create an element h1
  const $pBody = $("<p>"); // Create an element p
  const $pAuthor = $("<p>"); // Create an element p

  $h1.text(`Blog Post #${post.id}: ${post.title}`);
  $pBody.text(post.body);
  $pAuthor.text(`By: ${user.name}`);

  $li.append($h1);
  $li.append($pBody);
  $li.append($pAuthor);

  $li.on("click", (event) => {
    $(event.currentTarget).css("background-color", generateRandomColor());
  });

  return $li;
};
// const createPostElementGoodOld = (post) => {
//   const $li = $("<li>"); // Create an element li
//   const $h1 = $("<h1>"); // Create an element h1
//   const $p = $("<p>"); // Create an element p

//   $h1.text(`Blog Post #${post.id}: ${post.title}`);
//   $p.text(post.body);

//   $li.append($h1);
//   $li.append($p);

//   $li.on("click", (event) => {
//     $(event.currentTarget).css("background-color", generateRandomColor());
//   });

//   return $li;
// };

const createPostElementBad = (post) => {
  const postStructure = `
  <li>
    <h1>Blog Post #${post.id}: ${post.title}</h1>
    <p>${post.body}</p>
  </li>
  `;

  return postStructure;
};

const appendAllPosts = (posts, users, postCreation) => {
  for (const post of posts) {
    const newPost = postCreation(post, users);
    $("main ul").append(newPost);
  }
};
// const appendAllPostsOld = (posts, postCreation) => {
//   for (const post of posts) {
//     const newPost = postCreation(post);
//     $("main ul").append(newPost);
//   }
// };

const generateRandomColor = () => {
  // #AABBCC => rgb(255,255,255)

  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  console.log("New color generated: ", `rgb(${r},${g},${b})`);

  return `rgb(${r},${g},${b})`;
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const formData = $(event.currentTarget).serialize();

  // console.log(formData);

  $.ajax({
    method: "POST",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: formData,
  })
    .then((newPostData) => {
      console.log(newPostData);
      $.get("https://jsonplaceholder.typicode.com/users").then((users) => {
        const newPost = createPostElementGood(newPostData, users);
        $("ul").prepend(newPost);
      });
    })
    .catch((err) => console.log(err));
};

$(document).ready(() => {
  $("form").on("submit", handleFormSubmit);

  const ajaxPosts = $.get("https://jsonplaceholder.typicode.com/posts");

  const ajaxUsers = $.ajax({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
  });

  Promise.all([ajaxPosts, ajaxUsers])
    .then((res) => {
      const [posts, users] = res;

      appendAllPosts(posts, users, createPostElementGood);
    })
    .catch((err) => console.log(err));
  // appendAllPosts(postData, createPostElementGood);

  // $("li").on("click", (event) => {
  //   $(event.currentTarget).css("background-color", generateRandomColor());
  // });

  // appendAllPosts(postData, createPostElementGood);

  // $("li").on("click", (event) => {
  //   $(event.currentTarget).css("background-color", generateRandomColor());
  // });

  // METHOD : GET / POST / PUT / DELETE / PATCH / ..
  // $("li").on("click", doSomething)
  // $("li").click(doSomething)

  // const ajaxPosts = $.ajax({
  //   method: "GET",
  //   url: "https://jsonplaceholder.typicode.com/posts",
  // });

  // let postData = undefined
  // $.ajax({
  //   method: "GET",
  //   url: "https://jsonplaceholder.typicode.com/posts",
  // }).then(posts => {
  //   postData = posts
  //   return $.ajax({
  //     method: "GET",
  //     url: "https://jsonplaceholder.typicode.com/users",
  //   })
  // })
  // .then()

  // Promises => Run multiples promises at the same time?
});

// AJAX!

// Asynchronous Javascript And XML

// XML = eXtensible Markup Language => HTML
// JSON => JavaScript Object Notation

// HEY! Can I fetch some JSON or XML from a remote computer

// JAM Stack! JavaScript Api Markup

// $.ajax() => 404 / 500 => Error
// fetch is weird sometimes

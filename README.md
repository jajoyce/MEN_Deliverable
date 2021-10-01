# MEN Stack CRUD

# Part One. Create and Read.

Come up with something to CRUD that has at least two properties. Don't get carried away (this time).

1. Initialize a git repo.
2. Initialize a Node project. Make an initial commit.
3. Make an express app that runs. Commit.
4. Make it render a page for "new". Commit.
5. Make a "create" route. Commit.
6. Have the form on "new" page post to the "create" route. Commit.
7. Connect express to mongo by installing and setting up mongoose. Commit once it logs a successful connection message.
8. Create the schema and model for your thing that you are CRUDding. Commit.
9. Make sure you can concisely and precisely answer these questions:
    - What is a schema?
    - What is a model?
    - What is the difference?
    - What is the relationship between them?
10. In the "create" route, use mongoose to add a document to your databse (`.create()`) based on what is in `req.body`. If you're having issues, check: is your `req.body` `undefined`? Where does `req.body` come from? Is there something you need to add to your app to make `req.body` be defined? (Yes, there is.) Commit.
11. Make an "index" page which displays all the models created by the app so far. Commit.
12. The "create" route redirect to the index page *after* the model has been created. Commit.
13. Give your app the ability to render a "show" page. Commit.
14. Each item on the index page should link to the "show" page for that item. Commit.

# Part Two. Update and Delete.

## **Warmup:**

1. Make sure you can answer this question: What does it mean to say that you are building a RESTful server?
2. Make sure you can answer this question: What is the difference between REST and HTTP?

## **Destroy:**

1. Make a delete button.
2. Make a "destroy" route.
3. Have the delete button send a DELETE request to the server.
4. Make the "destroy" route delete the item from the database.

> You should now have at least 15 commits.

## **Edit/Update:**

1. Make an "edit" route that renders an edit page with the data already in it for that item.
2. Make a link to the "edit" route.
3. Make an "update" route.
4. Have the edit page send a PUT request to the "update" route.
5. Make the "update" route update the model in the database.
6. Make the "update" route send a redirect to the index page after the model has been updated.

> You should now have at least 20 commits.

## **Controllers**

1. If you set up your app with a controller already, great job! You can probably skip all these steps.
2. Create a controller and `require` it and `app.use()` it in `server.js` if you haven't already.
3. `require` your model in controller file if you haven't already.
4. Move your RESTful routes from `server.js` to your controller file if you haven't already. Make sure it works.
5. Remember: In each route, you no longer need the first part of the path. So like if your CRUDdable item is photos, then in your photo controlller, your URLs in your routes will no longer have `/photos` in front of them since the `app.use('/photos', photoController)` in `server.js` will "strip it out" of the URL.

## **Hungry for more:**

### **[Bootstrap](https://getbootstrap.com/)**

Add bootstrap to your project and use some of the basic styling for layout.

At a basic level, most layout challenges can be solved with [the info on this page](https://getbootstrap.com/docs/4.3/layout/overview/) and [this page](https://getbootstrap.com/docs/4.3/layout/grid/).

Also in the docs, check out the Components section and some of the subsection. There's a nice collection of other styles you can use to easily get great professional default styling for things like [forms](https://getbootstrap.com/docs/4.3/components/forms/) or [buttons](https://getbootstrap.com/docs/4.3/components/buttons/)

### **Partials (or "Includes")**

Check out a branch and experiment with using partials/(`"includes"`) to make your templates more DRY. Google "EJS partials" and see if you can find some documentation that helps. Remember, info from the internet may be somewhat old or outdated or not exactly what you want but still contain useful information. Focus on honing your ability to extract useful information from internet resources.

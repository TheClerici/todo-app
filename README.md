# To Do App

Hello! For you to get started I'd recommend to first get yourself that same versions as we do.

* Node v18.12.0
* npm 8.19.2
* IDE: Visual Studio Code

## Get Started

Open the terminal on VSC, and run `npm install` to get your packages installed.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.\
Every time you try to make an invalid request, an error with the status and message will appear in the console, as well with an Error Modal explaining what happended.

### `npm test`

Launches the test runner in the interactive watch mode.\
Make sure to run all test by pressing `a`.\
Already has some tests but it's still a WIP. Feel free to test some of the code!

# Functionality

<p align="center">
    <img width="600" src="https://github.com/TheClerici/todo-app/blob/main/app.jpg?raw=true">
</p>
<div align="center">
    <h5><strong>Fig 1. App</strong></h5>
</div>

Available features:

## CRUD endpoints

This will agilize the way we work with the front-end since the API is already awaiting our requests.

## Search box

Need to search for an item? Get a quick search with the search box. Use the filters as you may need.

## Add task

Huge button that opens up a modal for you to fill your new task.

## Delete all tasks

Already done with everything? Perfect! You are two clicks away to empty all of your tasks.

## Information Table

Displays all of the tasks and let you set as done, edit or delete each task. They can also be sorted in certain order that you choose.

## Done/Undone checkmark

Already done? Just check in the first column the corresponding task that is already finished. 

Forgot something? You can always uncheck the task if needed.

## Sort by parameter

Sort by the desired parameter for priority or due date at the top of the table.

## Delete Task

If needed, when lookin through your tasks you can decide to delete the desired item.

## Edit Task

Forgot to add something to your task? Click on edit to help you out, make sure you fill something at least, or you will get the error modal.

## Error Modal

Every time you make an invalid request, an error modal will appear, this can from no body while adding a Task to trying to delete something that does not exist!

## Pagination

Displays a fixed amount of tasks (10 max) so we don't overload your browser.

## Metrics Box

Displays the average time for task to be done and also displays the average time filtered by priority.
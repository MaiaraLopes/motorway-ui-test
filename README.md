
# Motorway UI Test


Welcome to the Motorway UI technical test. This test focuses on user experience, and your skills with HTML, CSS, a11y and leveraging browser APIs.


## Set up

This repo is a slightly modified Create React App and an Express server which serves a JSON feed of images.

- Clone the repo and run `npm install`

- `npm run serve` will run the server

- in another terminal window `npm run start` will start CRA

After this, CRA will open a tab with the app running, usually `localhost:3000`. If you look in `src/App.js` you'll see the API call to the server is already made and will console log out the results.

#### Note

- The server and CRA are watching the relevant files and will hot reload if any changes are made.

- Feel free to modify or install whatever code you feel is necessary. If installing packages which are wrappers for native browsers APIs please leave a comment explaining why.


## Tasks

### 1. UI development

Create a responsive UI to display the images returned by the API.

The aim is to demonstrate your experience and knowledge of HTML, CSS, JS and React features; and demonstrate creative thinking in how images can be presented and manipulated.

Images aren't optimised and their dimensions are varied, there are .jpg and .webp versions on s3, so you will need to take this into account.

#### Inspiration:

https://twitter.com/andybarefoot/status/1251844621262602242

http://www.artist-developer.com/

#### Some ideas to get you started:

Resizable thumbnails

Modal to review full size images

Image effects or filters


### 2. Performance

The API that is returning images is rather slow. Show how it can be sped up, and show how you would measure the improvement in performance.


### 3. Forms

One of the oldest yet trickiest parts of web development is forms, so we’d like to see how you handle them.

Add a form to your app with the following fields. The form doesn't need to submit to anywhere, but must validate on the client.

- [ ] Name
- [ ] Email
- [ ] Date of birth
- [ ] Favourite colour
- [ ] Salary (using a range input)


## Time allowed

We appreciate that your time is valuable and recommend you not spend more than 2 hours on these tasks.


## Notes

The goal of the test is to prove your understanding of the concepts of modern HTML/CSS/JS, but not to produce something production ready or pixel perfect.
Your work will be tested in the browser of your choice, so please specify this when submitting. This can include pre-release browsers such as Chrome Canary or Safari Technology Preview if you want to work with experimental features.

## Maiara's Notes

Thank you for the opportunity to take this test. I had a lot of fun working on it and it gave me the chance to revisit some concepts and learn new ones. I did my best and hope you like the result.

I installed React Bootstrap to work with the images and the forms. I like Bootstrap because it already has built-in functionality and styles and helps the result be responsive and neat.

### 1. UI Development

I set the images in two columns and made them smaller to fit the screen. I also added transitions and filters to show some CSS work.

### 2. Performance

A good way to improve the API's performance would be caching the images so that they don't need to be queried from the database every time. We can measure the improvement in performance by checking the API's metrics using a monitor or tracker. We should pay special attention to its response time, latency, how it responds to the amount of current users at one time, and its availability.

### 3. Form

I used a Bootstrap form in a card. It doesn't submit anwywhere, but it validates the inputs. The salary range will be input using a simple slider.

If you have any questions or comments, please do not hesitate to contact me on maiglopes@gmail.com.

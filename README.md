# Pollidify
Pollidify is a global web application that allows users to create and respond to polls.

# Background and Overview
Ever wondered what everyone's stance is on a specific issue? Well now you can. With Pollidify you can create polls that everyone 
around the world can participate. You can visualize your statistics on each poll you create, with in-depth analysis.

Pollidify is a minimal application created in one week. 

# Functionality & MVP
* user authentication
* creating Polls
* participating in polls
* as the owner of the poll, owners can view statistical analysis
* automated deletion of polls past capacity
* automated closure of polls past expiration date
* production README

**Bonus features**
* notifications
* private poll vs. public poll results
* categories/tags
* demographics
* subscriptions via notifications

# Technologies & Technical Challenges
**MERN stack**
* MondoDB
* React/Redux
* Javascript
* Express 
* Node

**Technical Challenges:**
* Displaying statistical data in a graphical and intuitive way
* Ensuring all polls are anonymous and one-time answer only

# Group Members and Work Breakdown
**Chang Ho Lee, Asaf Mohammad, Pavel Aparcana**

**Day 1**
* Discuss structure and basic functions of application - **All**
* Create `users` model and validations - **Asaf**
* Create `users` routes and passports - **Pavel**
* Create `root` component and React skeleton - **Chang**
* Create `session` util and `route` util in frontend - **Chang**
* Create `session` actions in frontend - **Asaf**
* Create `session` reducer and `session-errors` reducer in frontend - **Pavel**
* Create `login-form` component - **Asaf**
* Create `signup-form` component - **Pavel**
* Create `main` component and `nav` component - **Chang**

**Day 2**
* Discuss styling of main page and user auth pages - **All**
Root component
User frontend

**Day 3**
Poll Model and Validations
Poll Routes
Begin Poll frontend

**Day 4**
Finish Poll frontend 
Choices Model and Validations
Choices Routes

**Day 5**
Choice Frontend
Planning and implementing wireframes
Styling - **All**

# Scripts

* `npm run start`: starts app as normal, does not watch for changes
* `npm run server`: starts app, watches for changes and logs success messages

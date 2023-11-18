# This is CS 260
[Notes](https://github.com/MarySeeley/cs260Fall2023/blob/main/notes.md) for this class

## Start Up Specification
### Elevator Pitch
Have you ever wanted to plan something? With friends, family, work colleagues, classmates, or acquaintances? Tried planning through a text thread of everyone saying when they could or when they couldn't get together and everything got jumbled together making it difficult to get together. With Let's Get Together you can tell Let's Get Together when you are free and when you are not and instead of the poor planner. Let's Get Together will then show you the best times to get together so you can focus on hanging out, instead of planning.

### Key Features
- Logs all available times of participants
- Let the planner and participants know what times are best for getting together

### Technology
- HTML - Use HTML structure with 5 HTML pages. The different pages are for home, About Us, log in, joining a group, and starting a group
- CSS - Give the webpage style by making it work on different-sized screens and have colors that contrast well with each other.
- JavaScript: Puts people's available time on the calendar, displays other's available time on the calendar, and provides login.
- Service: Backend service with endpoints for:
  - Logging in
  - Accepting available times
  - Push available times to the calendar
  - Retrieve available times
- Database data: Stores participants, data of when each participant is available, and time best for all participants
- Login: Register and login users. Authenticates users and groups that they join.
- WebSocket data: Shows other users times that are best for all the participants
- React: Import application to React web framework

### Design Images
![Start up Specification Design Images](https://github.com/MarySeeley/cs260Fall2023/assets/128410544/b63a26be-f03a-4bda-a52b-debdbefc2e9a)

### HTML Deliverables
- **HTML pages:** Eight HTML pages to deal with the home, about, your group, joining a group, starting a group, looking at times, submitting times, and results
- **Links:** At the top of the page are links to home, about, your group, joining a group, and starting a group. Different buttons lead to the pages looking at times, submitting times, and results.
- **Text:** There is text giving directions, saying what time is best, and in the about us section.
- **Images:** Calendar image on About Us page.
- **Login:** Log in box on the main page.
- **Database:** Each person's available time is stored when they submit it.
- **WebSocket:** Shows what time is best for everyone in real time.

### CSS Deliverables
- **Header, footer, and main content body:** Used flex display.
- **Navigation Elements:** Added a colorful header with links to different pages without the underline.
- **Responsive to window resizing:** Using flex display my website works on different-sized devices
- **Application Elements:** Different elements are styled differently to match the color scheme and purpose. Has good color contrast and whitespace.
- **Application text content:** All of the fonts are the same and easy to read.
- **Application images:** Images have rounded edges and are centered.

### JavaScript Deliverables
- JavaScript works for a single user and there are placeholders for future technologies
- **Login:** Login form with a button leading you to your groups' page.
- **Database:** When the person is available and their group information is currently stored in local storage and will be put into a database in the future.
- **WebSocket:** I have a place on the results page where it will show other user's available times.
- **Application Logic:** The results table turns green, yellow, or red based on when you are available. The table is also created based on the times that you submit.

### Service Deliverable
-Added backend endpoints that received and returned group data, days and hours array, and when the person was available.
-**Node.js/Express HTTP service:** Done
-**Static middleware for fronted:** Done
-**Calls to third-party endpoints:** Pulled quotes from an API for the About page.
-**Backend Service Endpoints:** There are placeholders for the user. There are endpoints for group information, days and hours for the group, and when they are available.
-**Frontend calls service endpoints:** Used fetch functions for frontend service calls.


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


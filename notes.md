Notes for CS 260

GitHub
- You can pull down repositories
- When you make edits you commit it to save them with notes
- To merge it with the main branch you push it to the main branch
- If there is a conflict you need to fix the conflict before merging
- You can also create a branch and work on it. When you are ready you can merge the branches together.
1. In the following code, what does the link element do?
	• You can have links to media with src with the tags img, audio, and video
	• Example:
		○ <a href = "https://byu.edu">Go to the Y </a>
2. In the following code,  what does a div tag do?
	• Div tag used to define division.
	• Use classes to help define things in CSS
		○ <div class = "myDiv"></div>
		○ .myDiv{color: red}
3. In the following code, what is the difference between the #title and .grid selector?
	• Class selector
		○ <p class = "grid"></p>
		○ .grid{}
		○ P.summary{}
			§ All paragraphs with class summary
	• Id selector
		○ <section id = "title"></section>
		○ #title{}
		○ All IDs should be unique within an HTML document and select targets of a specific element
		○ Specific things
4. In the following code, what is the difference between padding and margin?
	• Margin is the space around an element's border, padding is the space between an element's border and the element's content
5. Given this HTML and this CSS how will the images be displayed using flex?
	• header - flex: 0 80px - Zero means it will not grow and 80px means it has a starting basis height of 80 pixels. This creates a fixed size box.
	• footer - flex: 0 30px - Like the header it will not grow and has a height of 30 pixels.
	• main - flex: 1 - One means it will get one fractional unit of growth, and since it is the only child with a non-zero growth value, it will get all the remaining space. Main also gets some additional properties because we want it to also be a flexbox container for the controls and content area. So we set its display to be flex and specify the flex-direction to be row so that the children are oriented side by side.
6. What does the following padding CSS do?
	• Padding: 1em 2em;
	• Em: A multiplier of the width of the letter m in the parent's font
	• You can do padding on individual sides padding-top/right/bottom/left
	• Padding: 25px, 50px, 75px, 100px;
		○ Top padding is 25, right is 50, bottom is 75, left is 100
	• You can use 
		○ length: px, pt, cm, ect
		○ % - specifies a padding in % of the width of the containing element
		○ Inherit: specifies that the padding should be inherited from the parent element
7. What does the following code using arrow syntax function declaration do?
	• () => 3;
		○ This takes no parameters and always returns 3
	• Next, arrow functions inherit the this pointer from the scope of where it is created. This makes what is known as a closure. A closure allows a function to continue referencing its creation scope, even after it has passed out of that scope.
	• (a,b) => a-b
8. What does the following code using map with an array output?
	• Map runs a function to map an array to a new array
		○ A.map(k => k+k)
	• Const a = [1,2,3]
	• Consol.log(a.map((k) => k +k));
	• //OUTPUT: [2,4,6]
9. What does the following code output using getElementByID and addEventListener?
	• Document.getElementByID()
		○ The parameters would be the id of the element
			§ <p id = "para"> hello world</p>
			§ Const elem = document.getElementByID("para")
		○ Returns an element with a specified value
		○ Returns null if the element does not exist
		○ Used almost every time you want to read or edit an HTML element
	• Document.addEventListner()
		○ It has two parameters, the action that triggers it and the function that runs when that action is done
10. What does the following line of Javascript do using a # selector?
	• With the document.querySelector('#idname') you can put the # id or the . Class or 'div' to grab the elements
11. Which of the following are true? (mark all that are true about the DOM)
	• Notes here!!!
12. By default, the HTML span element has a default CSS display property value of: 
	• Inline: Display this element with a width that is only as big as its content. A b or span element has inline display by default.
	• Inline they are all centered next to each other
13. How would you use CSS to change all the div elements to have a background color of red?
	• Div{ background-color: red;}
14. How would you display an image with a hyperlink in HTML?
	• <img alt="Description of image" src="image link" />
15. In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
	• Content: The content of the box, where the text and images appear
	• Padding: Clears an area around the content. The padding is transparent
	• Border: A border that goes around the padding and content
	• Margin: Clears an area outside the border. The margin is transparent
16. Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
	• Set IDs maybe with div
17. What will the following code output when executed using a for loop and console.log?
	for (let i = 0; i < 2; i++) {
	  console.log(i);
	}
	// OUTPUT: 0 1
18. How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
	• Element = Document.getElementbyID("byu")
		○ Element = document.querySelector("#byu")
	• Element.style.color = "green"
19. What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
	• Paragraph: <p>
	• Ordered list: <ol>
	• Unordered list: <ul>
	• Second level heading: <h2>
	• First level heading: <h1>
	• Third level heading: <h3>
20. How do you declare the document type to be html?
	• <!DOCTYPE html>
21. What is valid javascript syntax for if, else, for, while, switch statements?
	• If, else
		○ If(a ===1){
		○ //
		○ }else if (b ===2){
		○ //
		○ } else {
		○ //
		○ }
		○ Compact version
			§ a === 1 ? console.log(1) : console.log('not 1');
	• For
		for (let i = 0; i < 2; i++) {
		  console.log(i);
		}
		// OUTPUT: 0 1
	• While
		let i = 0;
		while (i < 2) {
		  console.log(i);
		  i++;
		}
		// OUTPUT: 0 1
	• Switch
		switch(expression) {
		  case x:
		    // code block
		    break;
		  case y:
		    // code block
		    break;
		  default:
		    // code block
		}
		
		○ The switch expression is evaluated once.
		○ The value of the expression is compared with the values of each case.
		○ If there is a match, the associated block of code is executed.
		○ If there is no match, the default code block is executed.
22. What is the correct syntax for creating a javascript object?
		const obj = new Object({a:3});
		obj['b'] = 'fish';
		obj.c = [1, 2, 3];
		obj.hello = function () {
		  console.log('hello');
		};
		
		console.log(obj);
		// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}
	• Constructor:
		function Person(name) {
		  return {
		    name: name,
		  };
		}
		
		const p = new Person('Eich');
		console.log(p);
		// OUTPUT: {name: 'Eich'}
	• Classes
		class Person {
		  constructor(name) {
		    this.name = name;
		  }
		
		  log() {
		    console.log('My name is ' + this.name);
		  }
		}
		
		const p = new Person('Eich');
		p.log();
		// OUTPUT: My name is Eich
	• With inheritance use class Employee extends Person
23. Is is possible to add new properties to javascript objects?
	• Yes, either use the dot (obj.prop) or bracket notation (obj['prop'])
		const obj = new Object({a:3});
		obj['b'] = 'fish';
		obj.c = [1, 2, 3];
		obj.hello = function () {
		  console.log('hello');
		};
		
		console.log(obj);
		// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}
24. If you want to include JavaScript on an HTML page, which tag do you use?
	• <script src = "index.js"></script>
		○ Linking to your JavaScript page
	• <script> myfunc("Hello World")</script>
		○ In html
25. Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
	• Set animal in side a span element setting the id
	• In JavaScript grab the element with 
		○ Let animalElment = document.getElementBYID("Idname");
	• Then change it
		○ animalElement.textContent = "crow";
26. Which of the following correctly describes JSON?
	• JSON is a document that easily convertible to and from, JavaScript objects
	• Most commonly, a JSON document contains an object. Objects contain zero or more key value pairs. The key is always a string, and the value must be one of the valid JSON data types. Key value pairs are delimited with commas. Curly braces delimit an object, square brackets and commas delimit arrays, and strings are always delimited with double quotes.
	• JSON document:
		{
		  "class": {
		    "title": "web programming",
		    "description": "Amazing"
		  },
		  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
		  "start": "2025-02-01",
		  "end": null
		}
	• Converting to JavaScript
		const obj = { a: 2, b: 'crockford', c: undefined };
		const json = JSON.stringify(obj);
		const objFromJson = JSON.parse(json);
		
		console.log(obj, json, objFromJson);
		
		// OUTPUT:
		// {a: 2, b: 'crockford', c: undefined}
		// {"a":2, "b":"crockford"}
		// {a: 2, b: 'crockford'}
27. What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
	• Chmod: used to change the mode of a file or directory (or change access or permissions)
	• Pwd: You can see which directory you are in with the pwd (present working directory) command.
	• Vim: runs vim on a file
	• Nano: another text editor for the command line, designed to be more user-friendly than vim
	• Wget: Used to downloead files form the internet via the command line. You provide the URL of the file you want to download
	• Sudo:Stands for "Superuser Do." It Is used to execute a command with superuser or root privileges, often used for administration tasks
	• echo - Output the parameters of the command
	• cd - Change directory
	• mkdir - Make directory
	• rmdir - Remove directory
	• rm - Remove file(s)
	• mv - Move file(s)
	• cp - Copy files
	• ls - List files
	• curl - Command line client URL browser
	• grep - Regular expression search
	• find - Find files
	• top - View running processes with CPU and memory usage
	• df - View disk statistics
	• cat - Output the contents of a file
	• less - Interactively output the contents of a file
	• wc - Count the words in a file
	• ps - View the currently running processes
	• kill - Kill a currently running process
	• sudo - Execute a command as a super user (admin)
	• ssh - Create a secure shell on a remote computer
	• scp - Securely copy files to a remote computer
	• history - Show the history of commands
	• ping - Check if a website is up
	• tracert - Trace the connections to a website
	• dig - Show the DNS information for a domain
	• man - Look up a command in the manual

	• | - Take the output from the command on the left and pipe, or pass, it to the command on the right
	• > - Redirect output to a file. Overwrites the file if it exists
	• >> - Redirect output to a file. Appends if the file exists

28. Which of the following console command creates a remote shell session?
	• ssh
29. Which of the following is true when the -la parameter is specified for the ls console command?
	• ls can list all files (even hidden ones) in a long format if you provide the parameter -la.
30. Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
	• Subdomain.secondary.top
	• Subdomain: banana.fruit
	• Root domain: bozo.click
	• Secondary: bozo
	• Top level: click
31. Is a web certificate is necessary to use HTTPS.
	• Yes, you need a SSL or TLS certificate installed on your website
32. Can a DNS A record can point to an IP address or another A record.
	• DNS A is used to point to an IP adress. In other words it points the domain name to an IP adress
	• DNS A can not point to another A record
		○ It is only used to point a domain name to an IP adress not another A record
33. Port 443, 80, 22 is reserved for which protocol?
	• Port 80: HTTP
	• Port 443: HTTPS
	• Port 22: SSH
What will the following code using Promises output when executed?

![image](https://github.com/MarySeeley/cs260Fall2023/assets/128410544/0fc3c259-a4aa-4ce4-8296-1114bc0a51a4)

***DOM Notes***
# Document Object Model

📖 **Deeper dive reading**:

- [MDN Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [W3C DOM specification](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html) - This official specification is only for reference

The Document Object Model (DOM) is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.

The browser provides access to the DOM through a global variable name `document` that points to the root element of the DOM. If you open the browser's debugger console window and type the variable name `document` you will see the DOM for the document the browser is currently rendering.

```html
> document

<html lang="en">
  <body>
    <p>text1 <span>text2</span></p>
    <p>text3</p>
  </body>
</html>
```

```css
p {
  color: red;
}
```

For everything in an HTML document there is a node in the DOM. This includes elements, attributes, text, comments, and whitespace. All of these nodes form a big tree, with the document node at the top.

<img src="dom.jpg"/>

## Accessing the DOM

Every element in an HTML document implements the DOM Element interface, which is derived from the DOM Node interface. The [DOM Element Interface](https://developer.mozilla.org/en-US/docs/Web/API/Element) provides the means for iterating child elements, accessing the parent element, and manipulating the element's attributes. From your JavaScript code, you can start with the `document` variable and walk through the every element in the tree.

```js
function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);
```

You can provide a CSS selector to the `querySelectorAll` function in order to select elements from the document. The `textContent` property contains all of the element's text. You can even access a textual representation of an element's HTML content with the `innerHTML` property.

```js
const listElements = document.querySelectorAll('p');
for (const el of listElements) {
  console.log(el.textContent);
}
```

## Modifying the DOM

The DOM supports the ability to insert, modify, or delete the elements in the DOM. To create a new element you first create the element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree.

```js
function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
```

To delete elements call the `removeChild` function on the parent element.

```js
function deleteElement(elementSelector) {
  const el = document.querySelector(elementSelector);
  el.parentElement.removeChild(el);
}

deleteElement('#courses div');
```

## Injecting HTML

The DOM also allows you to inject entire blocks of HTML into an element. The following code finds the first `div` element in the DOM and replaces all the HTML it contains.

```js
const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';
```

However, directly injecting HTML as a block of text is a common attack vector for hackers. If an untrusted party can inject JavaScript anywhere in your application then that JavaScript can represent itself as the current user of the application. The attacker can then make requests for sensitive data, monitor activity, and steal credentials. The example below shows how the img element can be used to launch an attack as soon as the page is loaded.

```html
<img src="bogus.png" onerror="console.log('All your base are belong to us')" />
```

If you are injecting HTML, make sure that it cannot be manipulated by a user. Common injection paths include HTML input controls, URL parameters, and HTTP headers. Either sanitize any HTML that contains variables, or simply use DOM manipulation functions instead of using `innerHTML`.

## Event Listeners

All DOM elements support the ability to attach a function that gets called when an event occurs on the element. These functions are called [event listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener). Here is an example of an event listener that gets called when an element gets clicked.

```js
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
```

There are lots of possible events that you can add a listener to. This includes things like mouse, keyboard, scrolling, animation, video, audio, WebSocket, and clipboard events. You can see the full list on [MDN](https://developer.mozilla.org/en-US/docs/Web/Events). Here are a few of the more commonly used events.

| Event Category | Description           |
| -------------- | --------------------- |
| Clipboard      | Cut, copied, pasted   |
| Focus          | An element gets focus |
| Keyboard       | Keys are pressed      |
| Mouse          | Click events          |
| Text selection | When text is selected |

You can also add event listeners directly in the HTML. For example, here is a `onclick` handler that is attached to a button.

```html
<button onclick='alert("clicked")'>click me</button>
```

## ☑ Assignment

This [CodePen](https://codepen.io/leesjensen/pen/RwJJZBb) dynamically manipulates the DOM using JavaScript. Create a fork of the pen and take some time to experiment with it. Then complete the following:

1. Add a new table that represents the seven peaks of Utah County.

   - name: "Timpanogos", height: 11750, quality: 4.8
   - name: "Santaquin", height: 10687, quality: 3.8
   - name: "Lone Peak", height: 11253, quality: 5
   - name: "Provo Peak", height: 11068, quality: 4.1
   - name: "Cascade", height: 10908, quality: 3.2
   - name: "Nebo", height: 11928, quality: 4.8
   - name: "Spanish Fork", height: 10192, quality: 3.4

1. Sort the table when a header is clicked on

When you are done submit your CodePen URL to the Canvas assignment.

Don't forget to update your GitHub startup repository notes.md with all of the things you learned and want to remember.

### 🧧 Possible solution

If you get stuck here is a [possible solution](https://codepen.io/leesjensen/pen/yLRgpej).

***Promise Notes***
# Promises

📖 **Deeper dive reading**:

- [MDN Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [MDN Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

JavaScript executes as a single threaded application. That means there is only ever one piece of code executing at the same time. However, the fact that it does not execute concurrently does not mean that it does not execute in parallel. You can asynchronously execute code with the use of a JavaScript `Promise`. Because the execution is asynchronous the promise object can be in one of three states at any given point in time.

1. **pending** - Currently running asynchronously
1. **fulfilled** - Completed successfully
1. **rejected** - Failed to complete

You create a promise by calling the Promise object constructor and passing it an executor function that runs the asynchronous operation. Executing asynchronously means that promise constructor may return before the promise executor function runs.

We can demonstrate asynchronous execution by using the standard JavaScript `setTimeout` function to create a delay in the execution of the code. The setTimeout function takes the number of milliseconds to wait and a function to call after that amount of time has expired. We call the delay function in a for loop in the promise executor and also a for loop outside the promise so that both code blocks are running in parallel.

```js
const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2
```

## Resolving and rejecting

Now that we know how to use a promise to execute asynchronously, we need to be able to set the state to `fulfilled` when things complete correctly, or to `rejected` when an error happens. The promise executor function takes two functions as parameters, `resolve` and `reject`. Calling `resolve` sets the promise to the `fulfilled` state, and calling `reject` sets the promise to the `rejected` state.

Consider the following "coin toss" promise that waits ten seconds and then has a fifty percent chance of resolving or rejecting.

```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
```

If you log the coinToss promise object to the console immediately after calling the constructor, it will display that it is in the `pending` state.

```js
console.log(coinToss);
// OUTPUT: Promise {<pending>}
```

If you then wait ten seconds and the log the coinToss promise object again, the state will either show as `fulfilled` or `rejected` depending upon the way the coin landed.

```js
console.log(coinToss);
// OUTPUT: Promise {<fulfilled>}
```

## Then, catch, finally

With the ability to asynchronously execute and set the resulting state, we now need a way to generically do something with the result of a promise after it resolves. This is done with functionality similar to exception handling. The promise object has three functions: `then`, `catch`, and `finally`. The `then` function is called if the promise is fulfilled, `catch` is called if the promise is `rejected`, and `finally` is always called after all the processing is completed.

We can rework our coinToss example and make it so 10 percent of the time the coin falls off the table and resolves to the rejected state. Otherwise the promise resolves to fulfilled with a result of either `heads` or `tails`.

```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});
```

We then chain the `then`, `catch` and `finally` functions to the coinToss object in order to handle each of the possible results.

```js
coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
```

## The observer pattern

Promises are the standard way to do asynchronous processing in JavaScript, but they are not the only way. The `Observer` pattern, popularized by web programming frameworks such as `Angular`, use a model called `Observer`. The major difference between Observers and Promises is that Promises immediately begin to execute when the Promise is created, but Observers form a pipeline that you then pass an execution object into. This allows Observers to be reused, and the result of executing an Observable to be saved as a history of a particular execution.

## ☑ Assignment

This [CodePen](https://codepen.io/leesjensen/pen/RwJJKwj) uses promises to order pizzas. Create a fork of the pen and take some time to experiment with it. Modify the CodePen to include a new function that makes the pizza and include it in the promise chain.

When you are done submit your CodePen URL to the Canvas assignment.

### 🧧 Possible solution

If you get stuck here is a [possible solution](https://codepen.io/leesjensen/pen/vYVgpyL).

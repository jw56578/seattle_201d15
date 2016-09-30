# Class 10: JS Debugging and More CSS Layout

# Today's Plan: Week 2, Friday Lecture

#### Reminder: Quiz 5 is due at 11:59pm tonight!!!

#### Quiz 6 will be published this afternoon, will be due at 11:59 pm Sunday night.

- Announcements
  - Any general questions?
  - We'll finish 1-on-1 meetings this afternoon during lab time
  - The original plan was to do a team exercise in lab today, but given that there seems to be a bug going around the class (Aliza has been out, Michael was out yesterday and will be today, and Sam is also fighting it), we'll NOT have teams working in close quarters today and just work solo.
  - WASH YOUR HANDS!
  - STAY HYDRATED!
  - GET GOOD SLEEP!
  - TAKE ZINC AND VITAMIN C!
  - EAT PHO!
  - You have a fair amount of work for lab time today and the weekend. There's three parts:
  		1. Finish the Salmon Cookie project
  		2. Complete the wireframe exercise that we start in class today
  		3. Complete the design comp lab assignment that you'll get this afternoon

---

- [Presentation by iOS instructor Adam Walraff)](#ios) *[45 minutes]*

- [JS Debugging ](#debugging) *[30 minutes]*

*15-minute break*

- [CSS Wireframe Exercise](#debugging) *[60-75 minutes]*

- Discussion on today's lab assignment [15 minutes]

---

**Learning Objectives**

As a result of completing Day 10 of Code 201, students will:

- Have nailed down the functionality of their retail/data/table app, as measured by successful completion of the daily code assignments of the previous four days.
- Demonstrate understanding of fundamental CSS layout principles including block, inline, normal, relative, absolute, float, and fixed, as measured by successful completion of the daily code assignment and on a quiz administered in Canvas
- Be able to engage in discussion and demonstrate understanding of advanced CSS layout topics such as frameworks or responsive design, as measured by observation of the instructional staff.
- Be able to engage in discussion and demonstrate understanding of a variety of JS debugging techniques, including using console messages, the debugger statement, and debugging methodology as measured by observation of the instructional staff.

- JS book, Chapter 10: Error Handling & Debugging

[-top-](#top)

<a id="css"></a>
## Presentation by iOS instructor Adam Walraff

- adam@codefellows.com
- XCode
- iPhone, iPad, Apple Watch, Apple TV, ...Apple????...
- Swift and Objective C

[-top-](#top)

<a id="debugging"></a>
## JS Debugging

**JS book, Chapter 10: Error Handling & Debugging (pp.449-486)**

- You know the old saying to 'Better to work smart than work hard'? This chapter is all about the 'working smart' part of things.

- Of course, keep in mind that you're up against a lot of people who work smart ***and*** work hard.

- We're only going to focus on the most important parts of this chapter, and cook it down to the most basic things that will help you to keep moving forward when you code.

- There's a lot of techniques you can use for debugging that are outlined in this chapter, and you should take time to experiment with all of them and see which ones work best with your cognitive workflow.

- Ultimately, you'll develop a favorite set of tools and trick that mesh with your cognitive processes, or you might have to fall in line with the standard debugging practices of an employer. There's many possible ways to do things, and none are really more 'right' or 'wrong' than any other in concept, but only in application and workflow efficiency.

- General remark: error messages are only useful to you when you actually look into the console. So, if that's not a regular part of your workflow, make it one.

- It's important to learn how to treat error messages as valuable pieces of information, not just red garbage that appears in your console. Learning to decode error messages points you to not only where they are, but also the most likely part of that line to cause the problem. The more practice you get, the more you can rapidly interpret messages and debug effectively.

- p.452: Order of execution (declarations vs. calls)
- p.453: Execution contexts (context vs. scope)
- p.454: The Stack
- p.456: Hoisting
- p.457: More on scope
- p.458: Understanding errors
- p.459: Error Objects [IMPORTANT!]
  - Error (general)
  - SyntaxError
  - ReferenceError
  - TypeError
  - RangeError
  - URIError
  - EvalError
- p.463: Debugging workflow
- p.472: More console methods *(Aside: console messages can get clunky, and you don't want to pollute production code with a lot of them, but they're very useful when constructing code. In particular, they provide a window into code that is executing in some local scope that cannot be inspected by hand in the globally-scoped console.)*
- p.472: Grouping messages
- p.475: console.assert()
- p.476: Breakpoints
- p.479: Debugger keyword
- p.480: Handling exceptions with `try`, `catch`, and `finally`
- p.484: Debugging tips [IMPORTANT!]
- p.485: Common errors [IMPORTANT!]

[-top-](#top)

<a id="css"></a>
## CSS Wireframe Exercise

Let's take a look at a workflow commonly used by professional front-end developers by getting started on a wireframe exercise.

[-top-](#top)

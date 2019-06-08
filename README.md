# sustainabilityWebsite

# _You can change whatever you want_

# Left-most Column

The following (until mobile) is my idea of the left-most column of the mock's I have shown you.

### Pledge Score and Buttons

- The goal of this website was to basically let a user increment their "pledge score" whenever they do something related with their pledge. Basically, be able to display a number (counter) and be able to increment and decrement it.
- Thoughts: This in my opinion is hard as fuck because it is so simple. How do I make a number, and two buttons look really good, and follow the flow that I already have? I have no idea

### Extra Pledge Information

Because I don't know how to fill up this much space with a number and two buttons, I thought about adding the following: NOTE: If you can think of ways to not need to add this stuff, feel free to not add it. I am only adding it cause I dont know what to do with the space.

- Table: Like the tables in the middle column, I wanted to add basically the same exact things, which are:

  - A table that displays username, pledge score, goals completed.
  - Ability to sort when clicking "Username", "pledge score", "goals completed"
  - However looks completely different, I kinda like the mock table I already made, so I think that is a good start. Therefore, you could implement, see what you like, and change whatever you want.

- (Optional) Graph: Graphs that displays the change in the user's/group's change in pledge score/goals completed over X amount of time. You can decide which to show of the 4 potential graphs (can show all if you want) You need to add significant backend NoSQL/MongoDB logic for this to work cause I have no idea how to store the change in time of when a user increments their score/goals completed.

- User's goals completed: Along with the user's pledge score, you should display the number of goals completed. The user's goal score is incremented or decremented when the checklist in the rightmost column changes. You need to add backend NoSQL/MongoDB logic for this to work, but shouldnt be too bad. You are literally jsut displaying and changing a number with like simple queries.

- Thoughts:

# Mobile-Styling

You need to make everything fit on mobile too. In order to do this you add something called media-queries. Google them, but basically one functionality allows you to add different css based on the screen size. I currently made it kinda easy to transition already, all you have to do is:

- Change the display grid property of the div that holds the 3 columns. Basically currently it is like this.
- display: grid; grid-template-columns: 1fr 1fr 1fr;
- This means 3 columns of equal width based on the width of the parent container. - You just need to add a media query and change to something like
- display: flex; flex-direction: column;
- I am definitely missing things, so this is only an outline.

# Extra CSS stuff (OPTIONAL)

- Add transitions that make the items in the checklist not just suddenly disappear when you change its 'filter'. It is currently doing that becuase I'm basically completely removing the component, so google something called CSSTransitionGroups.

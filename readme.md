<!-- with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, any other useful information etc. -->

## The Sewer King

### What is the Sewer King? 

With the Sewer King my intention was to turn a short story into an immersive gaming experience. The immersive elements of the game come in the form of the artwork and sound which change every time the story changes setting. However, the most interactive feature of the webpage is the user's ability to change the outcome of the story depending on the decisions that they make. The idea was born out of a character that me and my brothers created about seven years ago! It was exciting to see the story finally come to life.

### Requirements

Include separate HTML / CSS / JavaScript files.
Use JavaScript and/or jQuery for DOM manipulation.
Deploy online.
Use semantic markup for HTML and CSS.
Have well-formatted, and well-commented code.

### Process

This project took far more than just writing code. I had to find audio, create images, and write the story. Fortunately, I had already begun writing a ‘choose your own adventure’ story which I could adapt to turn into a text adventure application.  I didn’t want to spend valuable coding time working on the artwork and storyline so I decided to write the code throughout normal working hours then work in the artwork in the evenings.  In my spare time I wrote 4000 words of storyline!

I started the development process by using HTML and jQuery to create dynamic buttons and P tags so that to make the site interactive then I got to work on implementing the storyline into the application. The program is essentially a near-endless stream of ‘if statements’ which reassign the buttons on screen to perform different functions which alter audio, text, and image. In hindsight, creating different files for different stages of the story, as well as the use of ‘switch statements’ would have gone a long way in cleaning up my code, and definitely something I would implement if I could start over. By comparison styling I didn’t find to be challenging at all, so I would write CSS whenever the bugs were feeling a little overwhelming! 

### Challenges 

Facilitating this feature of the game, the user's ability to choose their own outcome was by far the most difficult part of creating the game. In theory, a simple text adventure  game could be made entirely using HTML, using links to separate HTML files to progress through the story however there are three drawbacks to this approach. Firstly, this requires a lot of repeating code. Secondly, there would be a gap every time the user clicked to jump to the next page. And finally, there would be no way to store data about the user's decisions and mimic the roll of dice with probability functions.

Using Javascript however had one major challenge: reassigning a single button to do different things many, many times. To do this, I had to create an if statement with a huge amount of else if statements tagged onto the end so that the story could unfold. On top of this I had to keep track of different user decisions to made so staying on top of what the program should do next became a huge challenge. However, with the help of a flowchart I was able to map out where exactly the story should develop from where it was and this flowchart proved a vital resource in keeping track of where the user was at any given point in the narrative.

Unfortunately, due to the length of the story I was unable to finish the full story in time. However, I have presented a functioning demo which eventually leads to a 'to be continued...' page when the user reaches the end of what has been created so far.

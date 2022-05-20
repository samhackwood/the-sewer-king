//UNIVERSAL CODE 

const btnOne = $('#btnOne');
const btnTwo = $('#btnTwo');
const btnThree = $('#btnThree');
const btnFour = $('#btnFour');
const btns = $('.btn');
const next = $('#next');
const nextTwo = $('#nextTwo')
const img = $('img');
const text = $('#text');
const slideClick = new Audio('slideclick.mp3');
const office = new Audio('office.wav');
const farm = new Audio('farm.wav');
const sewerSound = new Audio('Sewer Ambience.m4a')
farm.volume = 0.1;
office.volume = 0.1;
sewerSound.volume = 0.1;

function loopOffice() {
    if (typeof office.loop == 'boolean')
{
    office.loop = true;
}
else
{
    office.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}
office.play();
}

function loopFarm() {
    if (typeof farm.loop == 'boolean')
    {
        farm.loop = true;
    }
    else
    {
        farm.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
    farm.play();
}

btns.click(async function(){
    // slideClick.muted = true;
    await slideClick.play();
})

next.click(async function(){
    await slideClick.play();
})

const disappear = () => {
    btns.hide();
    next.show();
}

const appear = () => {
    btns.show();
}

const showTwo = (text, secondText) => {
    btnOne.show();
    btnTwo.show();
    btnOne.text(text);
    btnTwo.text(secondText);
}

const showFour = (text, secondText, thirdText, fourthText) => {
    btnOne.show();
    btnTwo.show();
    btnThree.show();
    btnFour.show();
    btnOne.text(text);
    btnTwo.text(secondText);
    btnThree.text(thirdText);
    btnFour.text(fourthText);
}
//^^UNIVERSAL CODE^^

//STARTING SCREEN
disappear();
next.text("begin...")






//^^STARTING SCREEN



    
    
    //POLICE STATION
    
// disappear();
// next.hide();
   
const beign = () => {
text.text("Shepshed Police Station: It's 9am on a Monday morning as you sit down at your desk");
disappear();
img.attr("src","station.png")
loopOffice();
next.text("next...")
}


    
const handleSayThanks = () => {
    disappear();
    text.text("Sue smiles and says 'Man, I'm drowning in paperwork.' You roll your eyes in agreement and turn back to your desk.")
}

const handleSayNothing = () => {
    disappear();
    text.text("You say nothing. Monday mornings are not for you! Sue rolls her eyes and starts typing passive aggressively on her keyboard, clearly annoyed.")
}


btnOne.click(function(){
    if (text.text().includes("milky brew")) {
    handleSayThanks()
    }
})

btnTwo.click(function(){
    if (text.text().includes("milky brew")) {
    handleSayNothing()
    }
})


next.click(function(){
    console.log("next");
    
    if (text.text().includes('Station')) {
    text.text("'Morning George.' DC Sue King yawns, placing a milky brew on your desk and handing you a chocolate digestive. Do you?")
    showTwo("Say Thanks", "Say Nothing");
    next.hide();
    office.play();
    } 

    else if(next.text().includes("begin")){
        beign();
    }

    else if (text.text().includes('annoyed')) {
        text.text("In silence, you sip your tea. Feeling awkward you turn to apologise to Sue but stop when you see the Gaffer walk in - he does not look happy.")
    }

    else if (text.text().includes('awkward you turn')) {
        text.text("'Alright boss?' You ask. He shoots you a weary look.")
    }

    else if (text.text().includes('weary')) {
        text.text("'There's been another sighting at Dartmouth Park Farm. I'm going to need you and DS King to get down there right away.'")
    }
    
    else if (text.text().includes('you and DS King')) {
        text.text("'Sighing, you grab the car keys and motion for Sue to join you.")
        next.click(function(){
            office.pause();
            farm.play();
            handleNext();
        })

    }

    else if (text.text().includes('paperwork')) {
        text.text("A voice behind you says, 'I need you to go up to Dartmouth Park Farm, there's been another report of a strange figure lurking around.'")
    }

    else if (text.text().includes('another report of a strange figure')) {
        text.text("'Good morning to you too boss!' you say. 'We'll get down there right away.' The Gaffer nods and goes back into his office.")
    }

    else if (text.text().includes('The Gaffer nods')) {
        console.log("test");
        text.text("'Grumpy git' you think before grabbing the car keys and turning to Sue, 'So it begins.'")
        next.click(function(){
            office.pause();
            loopFarm();
            handleNext();
        })
    }
})


//^^POLICE STATION

//FARM 


let illGo = true;

const handleIllGo = () => {
    disappear();
    text.text("Sue hands you a torch and gestures to the hole. 'Be my guest' she laughs.")
} 

const handleYouFirst = () => {
    illGo = false;
    disappear();
    text.text("Before you can react, Sue shoves you into the hole and, laughing maniacally, pulls the manhole cover shut.")
}

const handleInspectFragment = () => {
    showTwo("Wait for results", "Return to Farm")
    text.text("Due to budget cuts, the lab is dealing with a massive backlog and the test results won't come back for at least 15 working days.")
}

const handleFollowFootprints = () => {
    disappear();
    text.text("You follow the footprints along a dirt track until, at last, you reach the main road, and the footprints suddenly stop. You look around confused. There's no sign of anyone else.")
}

const handleWaitResults = () => {
    disappear();
    text.text("A month later the test results come back. The results are inconclusive.")
}



// next.click(function(){ 
    let handleNext = () => {
if (text.text().includes('keys')) {
    text.text("DARTMOUTH PARK FARM")
    img.attr("src","spooky-farmhouse.jpeg")
}

    else if (text.text() == "DARTMOUTH PARK FARM") {
        text.text("You arrive at Dartmouth Park Farm. This is not the first time you've been called out by Farmer Damien. He has a reputation for 'seeing' strange figures lurking around the farm.")
    }

    else if (text.text().includes("'seeing'")) {
        text.text("'Thank goodness you're 'ere! Farmer Damien cries. That man was 'ere again! 'E's got 'uge eyes, a great bushy beard an' long matted 'air")
    }

    else if (text.text().includes("'air")) {
        text.text("E' was at least two foot taller than myself. I saw 'im with a large sack an' 'e's always wearing that cloak. This time I grabbed him and managed to ge' some of 'is cloak.")
    }

    else if (text.text().includes("cloak")) {
        text.text("He hands you the fragment of the strange man's cloak as Sue shouts 'Look, there's some footprints over here.")
        showTwo("Inspect Fragment", "Follow Footprints")
        next.hide();
    }

    else if (text.text().includes("results are inconclusive")) {
        text.text("Congratulations, you have wasted police time and money. Better head back to the farm and see if those footprints are still there.")
    }

    else if (text.text().includes("footprints are still there")) {
        handleFollowFootprints();
    }

    else if (text.text().includes("no sign")) {
        text.text("'Hey, that manhole cover looks odd. Maybe he went down there. Sue says, pulling aside the cover.")
    }

    else if (text.text().includes("manhole cover looks odd")) {
        text.text("You look over at the gaping hole in the ground, the smell of raw sewage wafting up towards you, then you look over at Sue.")
    }

    else if (text.text().includes("raw sewage")) {
        next.hide();
        showTwo("'I'll Go'", "'You First, Sue'");
    }

    else if (text.text().includes("she laughs")) {
        text.text("Taking a deep breath, you clamber awkwardly into the sewer and grimace as the foul water seeps into your socks.")
    }

    else if (text.text().includes("sewer and grimace")) {
        text.text("Suddenly you are plunged into darkness as Sue closes the manhole. You hear her maniac laughter fading as she walks away!")
    }

    else if (text.text().includes("she walks away")) {
        text.text("'Damn,' you think, 'now what?'")
    }

    else if (text.text().includes("now what")) {
        text.text("You pull your mobile phone out of your pocket, time to call for backup")
    }

    else if (text.text().includes("pocket, time to call")) {
        text.text("No signal. Angry, you shove it back into you pocket and turn on your torch and look at your surroundings")
    }

    else if (text.text().includes("manhole cover shut")) {
        text.text("'Shit' you think, 'quite literally!'")
    }

    else if (text.text().includes("quite literally!")) {
        text.text("You grab your mobile phone to call for backup.")
    }

    else if (text.text().includes("mobile phone")) {
        text.text("No signal. At least you can use it as a torch. Grimacing, you turn on the light and look at your surroundings")
    }

    else if (text.text().includes("No signal")){
        // next.click(function(){
        handleSewer();
        // return false;
        // })
    }
    else
    {
        handleSewer();
    }

}

btnOne.click(function(){
    if (text.text().includes("Sue shouts")) {
    handleInspectFragment();
    }

    else if (text.text().includes("15 working days")) {
        handleWaitResults();
    }

    else if (text.text().includes("wafting up")) {
        handleIllGo()
    }
})

btnTwo.click(function(){
    if (text.text().includes("Sue shouts")) {
    handleFollowFootprints()
    }

    else if (text.text().includes("Due to budget cuts")) {
        handleFollowFootprints();
    }

    else if (text.text().includes("wafting up")) {
        handleYouFirst();
    }
})


//SEWERONE

const handleFront = () => {
    disappear();
    text.text("The passage in front of you is long and narrow. You find yourself having to crouch low, trying to avoid thinking about the squelching underfoot")
}

const handleLeft = () => {
    disappear();
    text.text("You turn to your left and begin to make your way through the passageway. It gradually starts to slope downwards");
} 

const handleRight = () => {
    disappear();
    text.text("As you walk, the water seems to recede until you find yourself standing on dry, albeit slippery, ground");
}

const handleBack = () => {
    disappear();
    text.text("You stoop down and squeeze your way through the narrow passageway, no longer caring about the foul liquid soaking into your shoes.")
}

var doorSeen = false;

let handleSewer = () => {
    console.log("text.text():" + text.text())
    if (text.text().includes('No signal')) {
        text.text("THE SEWER")
        farm.pause();
        sewerSound.play();
        img.attr("src","sewer-drawing.jpeg")
    }

    else if (text.text().includes("THE SEWER")) {
        text.text("You find yourself in a large chamber, faint scurrying sounds all around you.")
        console.log("test One")
    }

    else if (text.text().includes("faint scurrying sounds")) {
        text.text("'Rats', you shudder. They have always been your biggest fear.")
        console.log("test two")
    }

    else if (text.text().includes("you shudder. They have")) {
        text.text("There are four passageways, four choices. You need to decide which way to go:")
        showFour("In Front", "Behind", "Left", "Right")
        next.hide();
    }

    else if (text.text().includes("squelching underfoot")) {
        text.text("At last the passage opens out into a dimly lit chamber. From somewhere above, the unmistakable scent of freedom beckons.")
    }

    else if (text.text().includes("freedom beckons")) {
        text.text("You shine your light across the ceiling of the chamber until at last you see it, the manhole cover.")
    }

    else if (text.text().includes("across the ceiling")) {
        text.text("You start banging wildly on the cover, trying to open it")
    }

    else if (text.text().includes("You start banging")) {
        text.text("Eventually, you hear footsteps and then a voice...")
    }

    else if (text.text().includes("then a voice")) {
        text.text("The manhole cover is slowly pulled free and you see your rescuers face...")
    }

    else if (text.text().includes("slowly pulled free")) {
        text.text("'Looks like you took quite a tumble!' Farmer Damien says heaving you to safety.")
    }

    else if (text.text().includes("quite a tumble")) {
        text.text("'Come on, let's get you back to the station")
    }

    else if (text.text().includes("back to the station")) {
        text.text("Congratulations, you have escaped the Sewer. Press refresh to play again.")
    }

    else if (text.text().includes("You turn to your left")) {
        text.text("You stumble and put your hands out to steady yourself. Your hands graze along the slimy wall and you shudder.")
        console.log("test");
    }

    else if (text.text().includes("slimy wall and you shudder")) {
        text.text("Suddenly, your hand touches something cold and sharp.")
    }

    else if (text.text().includes("cold and sharp.")) {
        text.text("You turn your light to see a small brass key sticking out of a crack in the wall")
    }

    else if (text.text().includes("crack in the wall")) {
        if (doorSeen == true) {
        text.text("This must be for the door! You make your way back through the tunnels until you reach the locked door. With trepidation you stick the key in the lock and turn...")
        }
        else {
            text.text("You frown, pulling a key free. 'What is that doing there?' You look around but there's only a dead end. Better head back to the main chamber")
        }
    }

    else if (text.text().includes("albeit slippery")) {
        text.text("This is more like it! You keep making you way along the passage.")
    }

    else if (text.text().includes("more like it")) {
        text.text("You try not to look down as the scurrying gets louder. There has to be a way out somewhere.")
    }

    else if (text.text().includes("down as the scurrying")) {
        text.text("From behind you the scurrying gets louder and louder. With a deep breath, you turn around.")
    }

    else if (text.text().includes("With a deep breath")) {
        text.text("A humongous rat has crept up behind you, red eyes glowing, at least 6 feet long. This is no ordinary rat.")
        //img rat
        //dramatic noise
    }

    else if (text.text().includes("red eyes glowing")) {
        text.text("Thinking fast, you try to remember what you've got on you, what you could possibly use to fight off this beast")
    }

    else if (text.text().includes("Thinking fast")) {
        const ranNum = Math.floor(Math.random()*100);
        if (illGo == true && ranNum > 20) {
            text.text("to be continued...")

        } else if (illGo == false && ranNum > 80) {
            text.text("to be continued...")
        } else {
            text.text("to be continued...")
        }
    }

    else if (text.text().includes("soaking into your shoes")) {
        text.text("As you move down the passageway, you hear a faint metallic rattling...")
    }

    else if (text.text().includes("metallic")) {
        text.text("to be continued...")
    }

    else if (text.text().includes("only a dead end")) {
        text.text("to be continued...")
    }

    else{
        text.text("discontinued...")
    }
}


btnOne.click(function(){
    if (text.text().includes("four passageways"))
    {
    handleFront();
}})

btnTwo.click(function(){
    if (text.text().includes("four passageways")) {
        handleBack();
    }
})

btnThree.click(function(){
    if (text.text().includes("four passageways")) {
        handleLeft();
    }
})

btnFour.click(function(){
    if (text.text().includes("four passageways")) {
        handleRight();
    }
})
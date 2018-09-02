
#begin saving variables to dictionary for text and then continue with chapter functions
import main
import sys
chapter0plot = """Ch. 0 - Well Shit

  Bang... bang .... bang

  What is that? Someone is making a lot of noise. Ugh, what is that noise? You were trying to sleep and you're so tired.
  Bang... Bang..
  Blinking your eyes open you slowly awaken.
  Bang... bang... bang...
  Seriously what is that? You see that you are in a white room, this doesn't look familiar. It's definitely not your bedroom, how did you get here?
  Bang... bang...
  Let's look around. There's some medical equipment lying around and another bed next to you. It's empty. You're definitely in a hospital, but why?
  bang...
  You slowly lift the blanket off yourself and get out of bed. Standing on wobbly legs you walk towards the end of the bed. There's a medical chart next to it hanging on the end. What does it say? (Get user input for name)

        Patient: User_input
        Blood Type: AB
        Age: unknown
        Diagnosis: Patient is victim of hit and run car accident. Has suffered trauma to the head and superficial injuries to arms and legs from collision. Medical induced coma is being implemented to assist in healing.

        What? A car accident? Oh no. Looking down, you notice the healing bruises and cuts on your arms.

        Bang...

        You've been in a coma? What?! No way! That only happens in movies and post-apocalyptic tv shows?

        Ok just stay calm. You can figure this out.

        BANG! BAM!

        You look towards the door, where that ridiculous banging sound keeps coming from. You move closer to it. The banging continues and you hear another sound coming from the other side. Sounds like someone's groaning?

        Do you open it?
            A Open door
            B Hell no don't open that door"""


ch1a = """Ch. 1
Let's open it! What's the worst that could happen?

You slowly walk towards the door, you unlock it placing your hand fully around the door knob when the banging suddenly stops. You hesitate... this is probably a bad idea.

Opening the door you see a dark hallway...

Do you go into the hallway?

    a It's an adventure
    b Maybe I should just hide in here..."""

ch1b = """Ch.1
You decide not to open the door. Someone obviously knows the stranger danger rule!

Looking around the room you see a window. You try to open it but its jammed shut. Darn it! Looks like that door is your only way out.

Ready to venture into the beyond?
    a It's an adventure?
    b I don't want to but obviously the author is trying to create drama, so here I go."""

ch2a = """Ch. 2
Alright! You can do this!

You slowly open the door. Cautiously opening it and carefully peering into the hallway. It's dark and ominous. It kind of feels like a cheap B Horror movie. You proceed into the hallway to meet your fate.

You look right and then left. There's no one in sight. Looks like it's time to choose!

  a RIGHT!
  b LEFT! """

ch2b = """Ch. 2

You hate the author. Damn her! This is not what you wanted. You glare at the door and reluctantly turn the knob. Peering out into the hallway you see nothing but pitch darkness.

Out of nowhere you are attacked by a monster and die.

That's what happens when you fight with the author.

(GAME OVER) """

ch3a = """Ch. 3
Onwards adventurer! To the right... cause the right is always right...right?

Anyway you head down the right side of the hallway. Which looks like any cliche post apocalyptic hospital ever. There are gurney's on their sides, dried blood splatters on the walls. The place is an absolute mess.

You walk cautiously forward, being careful of where you step since you only have socks on.

As you progress one of the rooms in the hallway catches your attention. The door is partially open and there is a light coming from inside.

Should you investigate?
  a: Why do you keep wanting me to investigate suspicious shit!! No I wanna go back to the my hospital room!!

  b: This could be the literal light at the end of this B Horror Film tunnel so yes! """

ch3b = """Ch.3
You decide to turn left. This side of the hallway is almost identical to the right so there is hardly a difference at all to them.

It looks like any cliche post apocalyptic hospital ever. There are gurney's on their sides, dried blood splatters on the walls. The place is an absolute mess.

You walk cautiously forward, being careful of where you step since you only have socks on.

As you progress one of the rooms in the hallway catches your attention. The door is partially open and there is a light coming from inside.

Should you investigate?
  a: Why do you keep wanting me to investigate suspicious shit!! No hell no!!

  b: This could be the literal light at the end of this B Horror Film tunnel so yes! """

ch4a = """Ch. 4

You decide that going out of your way to investigate a creepy room in a hospital is how people die. And no thank you, that's not what you're about.

You turn around to continue your way down the hallway... but which direction where you going? It's difficult to tell when everything looks the same and there isn't any light.

Damnit not this again, which way do you go?

  a: Right
  b: Left """

ch4b = """Ch. 4

You're gonna risk it for the biscuit!

You have to squeeze through the open space of the door since it's jammed partially open and won't move.

Once inside you can see the source of light is in fact a flash light. It's sitting in the lab of a nurse who is well... not alive to put it lightly. She's dead, very very dead as a matter of fact.

She's sitting on the floor facing you, her eyes are clouded over and her arms hang limply at her sides. She's been dead for a while. Which makes you wonder how the flashlight battery isn't dead? (Author: Convenience!)

On the bright side(pun totally intended) she doesn't need it anymore!

Should you take that flashlight?
  a: Well like you said she obviously doesn't need it right? So yea! Sorry Nurse Joy.
  b: Nope not worth it, I've seen this movie and no not happening. I'll just use my night vision thanks. """

ch5a = """Ch. 5
Onwards adventurer! To the right... cause the right is always right...right?

Anyway you head down the right side of the hallway.

You walk cautiously forward, being careful of where you step.

As you progress one of the rooms in the hallway catches your attention. The door is partially open and there is a light coming from inside.

Wait what?! Deja Vu! How did that happen? This doesn't make sense.

Maybe your trapped in an infinite loop?

Should you investigate?
  a: I see what you did their author lady. I don't have a choice again do? (Author:NO!) -_-

  b: Ok I can do this. I'm a Champ! Here I go! BEAST MODE! (Author: ... well I like your enthusiasm) """

ch5b = """Ch. 5
You decide to turn left. This side of the hallway is almost identical to the right so there is hardly a difference at all to them.

You walk cautiously forward, being careful of where you step.

As you progress one of the rooms in the hallway catches your attention. The door is partially open and there is a light coming from inside.

Wait what?! Deja Vu! How did that happen? This doesn't make sense.

Maybe your trapped in an infinite loop?

Should you investigate?
  a: I see what you did their author lady. I don't have a choice again do? (Author:NO!) -_-

  b: Ok I can do this. I'm a Champ! Here I go! BEAST MODE! (Author: ... well I like your enthusiasm) """

ch6a = """Ch. 6

You lean down closer to the corpse. Slowly and making sure to keep an eye on her in case... something happens.

So far there's nothing, she just stares vacantly back at you. Which is creepy but so long as she doesn't actually move it's fine.

Taking a deep breath you begin to reach out with you hand to grab this damn flashlight. You never take your eyes off of her just in case.

Once you have your fingers wrapped around the flashlight you pull back as fast as you can. But the nurse never stirs.

Phew! Guess you were nervous for nothing. :D

You turn around to leave the room and begin squeezing your way back into the hallway. That's when you hear the wheezing, snapping your head back to the room. It's the nurse! Her clouded eyes are locked onto you and she's frantically crawling towards you. Holy Shit! You try to move fully into the hallway, but she grabs you ankle.

You need to think fast! What do you do?
  a: Defend Yourself! Use the flashlight!
  b: Panic and play dead! Maybe she'll leave you alone?"""

ch6b = """Ch. 6
You turn around to leave the room and begin squeezing your way back into the hallway. That's when you hear the wheezing, snapping your head back to the room. It's the nurse! Her clouded eyes are locked onto you and she's frantically crawling towards you. Holy Shit! You try to move fully into the hallway, but she grabs you ankle.

You need to think fast! What do you do?
  a: Defend Yourself! (Author: If only you had something to use as a weapon. Oh well!)
  b: Panic and play dead! Maybe she leave you alone? """

ch7a = """Ch. 7
You turn the flashlight around and begin to beat Nurse Joy on the head with you makeshift weapon. She sputters and snarls but you don't relent.

Once certain that the nurse is dead, you finish crawling back out into the hallway. You live to die another day!

Now... which way were you going? Shit....
  a: Maybe Right?
  b: I need to leave bread crumbs or something. Let's try left. """

ch7b = """Ch. 7
Oh no! Your strategy doesn't work and with a disgusting crunch the nurse has bitten your arm and she crawls your way up your prone, defenseless body.

I'll save you the gory details, but sad to say you didn't make it. Unless you wanted to become a zombie? In that case congrats! Dreams do come true.

GAME OVER """

ch8a = """Ch. 8
Let's keep moving then. Staggering down the hallway with your flashlight clutched in your hands. You continue until you reach the end, where you find an elevator. It's highly unlikely that it's actually working, so you investigate the surrounding area until you find the door to the staircase.

Using your flashlight you look into the stairwell. It's deserted as far as you can tell.
Now its all a matter of which way you wanna go, up or down?

  a: What moron would go up? The exit is obviously down so let's head that way!
  b: Something tells me that I should head upstairs..."""

ch8b = """Ch. 8
Let's keep moving then. Staggering down the hallway with your flashlight clutched in your hands. You continue until you reach the end, where you find an elevator. It's highly unlikely that it's actually working, so you investigate the surrounding area until you find the door to the staircase.

Using your flashlight you look into the stairwell. It's deserted as far as you can tell.
Now its all a matter of which way you wanna go, up or down?

  a: What moron would go up? The exit is obviously down so let's head that way!
  b: Something tells me that I should head upstairs..."""

ch9a = """Ch. 9A

Down into the depths of Moria! Oh wait sorry wrong adventure :D

You head down the stairs using your flashlight diligently to keep an eye out for trouble.

You have no idea what floor you are on, but when you arrive to a level with a big G painted on the wall you can only hope that ground level is above and not below ground.(Author:Cross your fingers kiddo, Mwahahaha!)

Much to your dismay you'll never now since looking over to the door to exit the stair well is jammed shut. Looks like someone blocked it from the other side. You try pushing it open, but you never really worked out and being in the hospital has made you weaker. So you aren't able to force it open.

Well shit, what now?

  a: I guess I'm going upstair? (Author: Damn right you are!)
  b: You did not let me walk all the way down, just to make me go all the way up did you? (Author: It's possible! MWAHAHHAHAHA!!) """

ch9b = """Ch. 9

You start climbing that stairs keeping your ears and eyes open. You climb up numerous floors before you start to wonder how tall this damn hospital is and hope the author doesn't plan on torturing you with a workout before you die.

Just when you think there is no end you reach the end of the stair well. There's the door to the roof. You push on it to see if it will open and amazingly it swings open with only a little effort.

Light pours in and you look outside to the hospital roof. It's day time and hot as hell. You walk out on to the pathway and make your way over to the edge of the roof to look over. The sight you see is not pretty. Cars are pilled up and flipped over. Bodies lie on the ground spread out everywhere and there are a few that still move, shambling around mindlessly.

Looks like its definitely a zombie apocalypse. Which is so cliche and over used you wonder why the author couldn't have been more creative. But you try not to think about that since she's seems merciless and you don't wanna piss her off.

You try to think of you next move, but it feels hopeless. Where can you go? Are there any survivors? Even if they are how are you supposed to get out of this hospital?

Guess you'll have to choose

  a: I will never give up! I'll find a way! Maybe Rick Grimes and the gang are in Alexandria! I will find them and survive!

  b: Nope, Nope, Nope. I am done with your games author lady no more! I refuse to choose. """

ch10a = """Ch. 10

Unfortunately for you the author seems to be too busy to really help and in a case of really bad and lazy writing she decided you made it so far only to be eaten by the zombie that followed you up the stairs. Sorry! Better luck next time!

Game Over! """

ch10b = """Ch. 10

Unfortunately for you the author seems to be too busy to really help and in a case of really bad and lazy writing she decided you made it so far only to be eaten by the zombie that followed you up the stairs. Sorry! Better luck next time!

Game Over! """

def chapterPlot(chNumber, choice):

    x = 'chapter' + chNumber + choice + 'plot'
    #print('x is' + x)
    print(dic[x])

    if x == "chapter2bplot" or x == "chapter7bplot" or x == "chapter10aplot" or x == "chapter10bplot":#this states that if the variable equals this chapter to then run gameOver()
        gameOver()

    else:
        chChoice = raw_input() # request user input and sets it equal to chChoice
        y = main.checkAnswer(chChoice) # call the checkAnswer() passing in the chChoice parameter and set it equal to the variable y

        return(y) # this is returning the variable y to the main function

def gameOver(): #this function calls sys.exit() which exits the program, thus Game Over
    sys.exit()

dic = {
'chapter1aplot': ch1a,
'chapter1bplot': ch1b,
'chapter2aplot': ch2a,
'chapter2bplot': ch2b,
'chapter3aplot': ch3a,
'chapter3bplot': ch3b,
'chapter4aplot': ch4a,
'chapter4bplot': ch4b,
'chapter5aplot': ch5a,
'chapter5bplot': ch5b,
'chapter6aplot': ch6a,
'chapter6bplot': ch6b,
'chapter7aplot': ch7a,
'chapter7bplot': ch7b,
'chapter8aplot': ch8a,
'chapter8bplot': ch8b,
'chapter9aplot': ch9a,
'chatper9bplot': ch9b,
'chapter10aplot': ch10a,
'chapter10bplot': ch10b
}

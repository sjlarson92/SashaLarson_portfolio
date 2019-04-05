
#this file has all the text for the game chapters saved here along with the chapters dictionary

ch1 = """

I'm so happy to see you! Literally you've been in a coma for months!

Who am I?

......

That's not important :D More importantly we happen to be trapped in a hospital surrounded by zombies and need to escape!

I know crazy right? I'll just follow your lead.
    """
q1 = "Shoud we leave the room?"

o1a = "Sure, anything to get away from you"

o1b = "Listen crazy person I'm not going anywhere until you tell me what's going on"

ch2a =  """
That's the spirit! Let's open it! What's the worst that could happen?

Don't answer that question. Anyway go ahead I'm right behind you.

Hmmm just a long deserted and creepy hallway.

Do you go into the hallway?

    a It's an adventure
    b Maybe I should just hide in here...
    """
q2 = "Which way should we go?"

o2a = "Right"

o2b = "Left"

ch2b = """
I already told you the details aren't important. Just open the door you big chicken!

Hmmm it looks like its an empty hallway. I can't see anything in either direction.
    """

ch3 = """
We gotta be sneaky, just tip toe down the hall.

This kind of feels like a cheap B Horror movie.

Hey I see a light coming out of a room up ahead!

  """
q3 = "Should we investigate?"

o3a = "Uh no, I don't think so"

o3b = "Sure, I'm in no rush. Not like we're in the middle of an apocalypse or anything"

ch4a = """
You're no fun you know that. I guess it'll just forever remain a mystery!

Actually no, I hate the unknown so we're going. I've made an executive decision.

Inside we go!

....

I instantly regret this, there's just a nurse corpse. Hey is she holding a flashlight?
"""
q4 = "Grab the flashlight?"

o4a = "Back away slowly there's going to be a jump scare soon"

o4b = "That flashlight would be super useful in the dark hallway"

ch4b = """
Yea! What a dare devil! Let's check out the creepy room!

Ew! No! Creepy room has a creepy nurse corpse!

But hey is she holding a flashlight?
  """

ch5a = """
Ooooh you're smarter than you look.

The flashlight was probably dead anyway. Back to the hallway.
"""

q5 = "Which way should we go now?"

o5a = "Right"

o5b = "Left"

ch5b = """
You're either really brave or really dumb, but either way you are also really dead.

Zombie nurse has taken a bite out of you and I can't say I'm surpirsed. Were you not listening when I said we were in the middle of the ZOMBIE apocalypse. Rick Grimes would be ashamed. """

ch6a = """
Ch. 6

Onwards adventurer! To the right... cause the right is always right...right?

Hmm looks like theres only the broken elevator and the stairway at the end of the hall.

Guess we're walking. Ugh I hate cardio!"""

q6 = "Should we go up or down?"

o6a = "Upward maybe there's an exit from the top"

o6b = "Well the main exit should be downstairs"

ch6b = """
Ch. 6

You decide to turn left. This side of the hallway is almost identical to the right so there is hardly a difference at all to them.

Hmm looks like theres only the broken elevator and the stairway at the end of the hall.

Looks like we're taking the stairs, it's too bad I don't have my pedometer.
"""

ch7a = """
Phew I really wish I had worked out more before the end of the world.

Hey do you hear something? Sounds kind of like the groans of the reanimated dead?

.... You know what we should really pick up the pace!
"""

q7 = "START RUNNING"

o7a = "I HATE RUNNING!!!"

o7b = "AHHHHH ZOMBIES !!!!!!"

ch7b = """
Ch. 7

Unfortunately it's really dark down here and you tripped over your own feet. Better luck next time player! I'll always remember you!"""

ch8a = """
Looks like you skipped leg day one too many times and weren't able to out run the undead. Luckily I survived to tell the tale of your bravery and poor running form"""

ch8b = """
Wow! I've never seen anyone move so quickly before!

Racing to the top of the stairs with the moaning dead right behing us we finally reach the top.

Look the door to the roof!
"""
q8 = "Quick open the door!"

o8a = "Break it down!"

o8b = "Dear lord please don't be locked"

ch9a = """
Oh no! Body slamming is not how you open doors! In your panic you failed at such a simple task and have been eaten. Bummer"""

ch9b = """

God has heard your literal cry for help and answered! Swing that door open quick!

But now we need to barricade the door!"""

q9 = "Quick grab something to block the door"

o9a = " A piece a wood should do the trick!"

o9b = "A chair, I've seen those stop doors in movies!"

ch10a = """
That piece of wood would've done a better job if it had been nailed in place, but alas it's too late for you. I will forever mourn you! """

ch10b = """
Not what I expected, but it works! Chairs are more useful than I thought.

But now we're trapped on the roof and running out of time!
"""

q10 = "Quick what should we do?"

o10a = "I will never give up! I'll find a way! Maybe Rick Grimes and the gang are in Alexandria! I will find them and survive!"

o10b = "Nope, Nope, Nope. This is all just a dream or probably a nightmare and I am done with your games crazy lady! I refuse to choose. "

ch11 = """
Unfortunately while you were trying to decide the door caved in and well.... it's not pretty but I'm afraid you've been eaten.

Sorry! Better luck next time!

"""
# death chapters are: 5b,
chapters = {
'1None': ch1,
'2A': ch2a,
'2B': ch2b,
'3A': ch3,
'3B': ch3,
'4A': ch4a,
'4B': ch4b,
'5A': ch5a,
'5B': ch5b,
'6A': ch6a,
'6B': ch6b,
'7A': ch7a,
'7B': ch7b,
'8A': ch8a,
'8B': ch8b,
'9A': ch9a,
'9B': ch9b,
'10A': ch10a,
'10B': ch10b,
'11A': ch11,
'11B': ch11
}

options = {
'1A': o1a,
'1B': o1b,
'2A': o2a,
'2B': o2b,
'3A': o3a,
'3B': o3b,
'4A': o4a,
'4B': o4b,
'5A': o5a,
'5B': o5b,
'6A': o6a,
'6B': o6b,
'7A': o7a,
'7B': o7b,
'8A': o8a,
'8B': o8b,
'9A': o9a,
'9B': o9b,
'10A': o10a,
'10B': o10b

}

questions = {
1: q1,
2: q2,
3: q3,
4: q4,
5: q5,
6: q6,
7: q7,
8: q8,
9: q9,
10: q10
}

import beachPuppy from './images/beach-puppy.jpg';
import beagle from './images/beagle.jpg';
import puppyInCup from './images/puppy-in-cup.jpeg';

export const prompts = [
  { id: 1, date: "October 11", text: "Puppy" },
  { id: 2, date: "October 12", text: "Kitten" },
  { id: 3, date: "October 13", text: "Birds" }
];

export const promptsImages = [
  {
    id: 1,
    promptId: 1,
    src: beachPuppy,
    name: 'beachPuppy',
    liked: false,
    comments: []
  },
  {
    id: 2,
    promptId: 1,
    src: beagle,
    name: 'beagle',
    liked: true,
    comments: [
      {
        id: 1,
        text: 'puppies'
      }
    ]
  },
  {
    id: 3,
    prompt: 1,
    src: puppyInCup,
    name: 'puppyInCup',
    liked: false,
    comments: [
      {
        id: 1,
        text: 'Love this'
      }
    ]
  },
]

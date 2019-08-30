import heads from './images/heads.jpg'
import tails from './images/tails.jpeg'
import rock from './images/rock.jpg'
import paper from './images/paper.jpg'
import scissors from './images/scissors.jpg'

const styles = {
  image: {
    width: '150px',
    height: '150px'
  }
}

export const rockPaperScissorsTypes = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSORS: 'scissors'
}

export const headsOrTailsImages = [
  {
    id: 1,
    src: heads,
    name: 'heads',
    style: styles.image
  },
  {
    id: 2,
    src: tails,
    name: 'tails',
    style: styles.image
  }
];

export const rockPaperScissorsImages = [
  {
    id: 1,
    src: rock,
    name: rockPaperScissorsTypes.ROCK,
    style: styles.image
  },
  {
    id: 2,
    src: paper,
    name: rockPaperScissorsTypes.PAPER,
    style: styles.image
  },
  {
    id: 3,
    src: scissors,
    name: rockPaperScissorsTypes.SCISSORS,
    style: styles.image
  }
]

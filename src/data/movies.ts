/*export const moviesData = [
  {
    id: 1,
    title: 'Inception',
    description: 'A skilled thief is offered a chance to erase his criminal history.',
    year: 2010,
  },
  {
    id: 2,
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space.',
    year: 2014,
  },

  {
    id: 3,
    title: 'The Dark Knight',
    description: 'Batman faces the Joker in Gotham City.',
    year: 2008,
  },

  { id: 4,
    title: "Tenet",
    description: "A time-inversion action film.",
    year: 2020 },

  { id: 5,
     title: "Dunkirk",
      description: "WWII epic survival.",
       year: 2017 },

  { id: 6,
     title: "Memento",
      description: "Memory-loss mystery.",
       year: 2000 },
];*/

export interface MovieType {
  id: number;
  title: string;
  description: string;
  year: number;
}


export const moviesData: MovieType[] = [
  {
    id: 1,
    title: "Inception",
    description: "A skilled thief is offered a chance to erase his criminal history.",
    year: 2010,
  },
  {
    id: 2,
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space.",
    year: 2014,
  },
  {
    id: 3,
    title: "The Dark Knight",
    description: "Batman faces the Joker in Gotham City.",
    year: 2008,
  },
  {
    id: 4,
    title: "Tenet",
    description: "A time-inversion action film.",
    year: 2020,
  },
  {
    id: 5,
    title: "Dunkirk",
    description: "WWII epic survival.",
    year: 2017,
  },
  {
    id: 6,
    title: "Memento",
    description: "A man with short-term memory loss attempts to track down his wife's murderer.",
    year: 2000,
  },
];

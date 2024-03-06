import { Character } from "../interfaces/entities/character.interface";

export const characterMock: Character = {
    id: 1011334,
    name: 'storm',
    description: 'Ororo Munroe descends from a long line of witch-priestesses. Once worshiped as a goddess of the storm, she is a member of',
    modified: '2014-04-29T14:18:17-0400',
    thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/40/526963dad214d',
        extension: 'jpg'
    },
    resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
    comics: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/comics',
        items: [],
        returned: 0
    },
    series: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/series',
        items: [],
        returned: 0
    },
    stories: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/stories',
        items: [],
        returned: 0
    },
    events: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/events',
        items: [],
        returned: 0
    },
    urls: []
};

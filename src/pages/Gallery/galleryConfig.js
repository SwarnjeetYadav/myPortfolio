// Gallery Configuration
// Add your images to the GalleryImages folder and update this configuration

export const galleryImages = [
    {
        id: 1,
        src: '/src/pages/Gallery/GalleryImages/photo1.png',
        alt: 'Photo 1',
        title: 'Photo 1',
        category: 'portrait' // Update this based on the image content
    },
    {
        id: 2,
        src: '/src/pages/Gallery/GalleryImages/photo2.png',
        alt: 'Photo 2',
        title: 'Photo 2',
        category: 'urban'
    },
    {
        id: 3,
        src: '/src/pages/Gallery/GalleryImages/photo3.png',
        alt: 'Photo 3',
        title: 'Photo 3',
        category: 'art'
    },
    {
        id: 4,
        src: '/src/pages/Gallery/GalleryImages/photo4.png',
        alt: 'Photo 4',
        title: 'Photo 4',
        category: 'urban'
    },
    {
        id: 5,
        src: '/src/pages/Gallery/GalleryImages/photo5.png',
        alt: 'Photo 5',
        title: 'Photo 5',
        category: 'portrait'
    },
    {
        id: 6,
        src: '/src/pages/Gallery/GalleryImages/photo6.png',
        alt: 'Photo 6',
        title: 'Photo 6',
        category: 'urban'
    },
    {
        id: 7,
        src: '/src/pages/Gallery/GalleryImages/photo7.png',
        alt: 'Photo 7',
        title: 'Photo 7',
        category: 'street'
    },
    {
        id: 8,
        src: '/src/pages/Gallery/GalleryImages/photo8.png',
        alt: 'Photo 8',
        title: 'Photo 8',
        category: 'street'
    },
    {
        id: 9,
        src: '/src/pages/Gallery/GalleryImages/photo9.png',
        alt: 'Photo 9',
        title: 'Photo 9',
        category: 'portrait'
    },
    {
        id: 10,
        src: '/src/pages/Gallery/GalleryImages/photo10.png',
        alt: 'Photo 10',
        title: 'Photo 10',
        category: 'street'
    },
    {
        id: 11,
        src: '/src/pages/Gallery/GalleryImages/photo11.png',
        alt: 'Photo 11',
        title: 'Photo 11',
        category: 'art'
    }
];

// Available categories - you can add more based on your photos
export const availableCategories = [
    'nature',
    'urban', 
    'portrait',
    'abstract',
    'wildlife',
    'street',
    'macro',
    'travel',
    'architecture',
    'landscape',
    'people',
    'events',
    'food',
    'art',
    'family',
    'friends',
    'vacation',
    'work',
    'hobby',
    'pets',
    'cars',
    'technology',
    'uncategorized'
];

// Instructions for categorizing your photos:
/*
1. Look at each photo and determine what category it belongs to
2. Update the 'category' field for each image in the galleryImages array above
3. Update the 'title' field with a descriptive title for each photo
4. Update the 'alt' field with a description for accessibility

Example categories you might use:
- 'nature' - for landscapes, plants, animals, etc.
- 'portrait' - for people photos
- 'travel' - for vacation/trip photos
- 'family' - for family photos
- 'friends' - for photos with friends
- 'work' - for work-related photos
- 'hobby' - for hobby-related photos
- 'pets' - for pet photos
- 'cars' - for car photos
- 'technology' - for tech-related photos
- 'events' - for special events, parties, etc.

You can also create custom categories by adding them to the availableCategories array above.
*/

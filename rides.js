/* =====================================================================
   CYCLOUT : YOUR RIDES
   ---------------------------------------------------------------------
   To add a ride: copy one block { ... }, paste it in the list, edit it.
   To remove a ride: delete its block. The website updates by itself.

   FIELDS
   id          short name, no spaces (used for the photo folder)
   date        "YYYY-MM-DD"  (newest rides are shown first)
   title       title of the ride
   level       "easy", "medium" or "hard"
   startPoint  where the ride starts
   distanceKm  distance in km              (number)
   elevationM  elevation gain in metres    (number)
   durationH   duration in hours           (2.5 = 2 h 30)
   summary     one or two sentences shown on the card
   text        the story of the ride; leave an empty line between paragraphs
   photos      number of photos: 5 means images/rides/<id>/1.jpg ... 5.jpg
               (1.jpg is the cover). You can also give a list of file names.
   mapUrl      optional link to the route (Strava, Komoot, Google Maps...)

   PHOTOS: create the folder  images/rides/<id>/  and put 1.jpg, 2.jpg ...

   !! The three rides below are EXAMPLES. Replace the numbers and texts
      with your real rides before publishing. !!
   ===================================================================== */

window.RIDES = [

  {
    id: "valley-loop",
    date: "2026-11-08",
    title: "Valley Loop",
    level: "easy",
    startPoint: "Start point of the ride",
    distanceKm: 25,
    elevationM: 300,
    durationH: 2,
    summary: "A short description of the ride goes here: the terrain, the views, the mood of the day.",
    text: "Write the story of the ride here.\n\nYou can add a second paragraph by leaving an empty line. Talk about the trail, the weather, who rode with you and what you liked most.",
    photos: 4,
    mapUrl: ""
  },

  {
    id: "mountain-climb",
    date: "2026-11-01",
    title: "Mountain Climb",
    level: "hard",
    startPoint: "Start point of the ride",
    distanceKm: 40,
    elevationM: 1100,
    durationH: 4.5,
    summary: "A short description of the ride goes here: the climb, the descent, what to expect.",
    text: "Write the story of the ride here.\n\nAdd tips for other riders: water, food, the best time to start.",
    photos: 5,
    mapUrl: ""
  },

  {
    id: "sunday-trail",
    date: "2026-10-25",
    title: "Sunday Trail",
    level: "medium",
    startPoint: "Start point of the ride",
    distanceKm: 32,
    elevationM: 650,
    durationH: 3,
    summary: "A short description of the ride goes here: a friendly weekend ride with the group.",
    text: "Write the story of the ride here.",
    photos: 3,
    mapUrl: ""
  },
  
  {
    id: "imouzzer",
    date: "2026-10-14",
    title: "imouzzer",
    level: "medium",
    startPoint: "Ait melloul",
    distanceKm: 140,
    elevationM: 2700,
    durationH: 8,
    summary: "A short description of the ride goes here: a friendly weekend ride with the group.",
    text: "Write the story of the ride here.",
    photos: 1,
    mapUrl: "https://www.ninjaone.com/fr/blog/activer-ou-desactiver-microsoft-smartscreen/"
  },
  
  {
    id: "imouzzer",
    date: "2026-10-14",
    title: "imouzzer",
    level: "medium",
    startPoint: "Ait melloul",
    distanceKm: 140,
    elevationM: 2700,
    durationH: 8,
    summary: "A short description of the ride goes here: a friendly weekend ride with the group.",
    text: "Write the story of the ride here.",
    photos: 1,
    mapUrl: "https://www.ninjaone.com/fr/blog/activer-ou-desactiver-microsoft-smartscreen/"
  } 
];

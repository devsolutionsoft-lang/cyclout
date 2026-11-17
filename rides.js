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
   activity: "mtb",    // "trip" | "cycling" | "running" | "other"
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
    id: "imouzzer-amskroud-16-05-26",
    date: "2026-05-16",
    title: "Imouzzer Idaoutananes",
    level: "hard",
	activity: "cycling",
    startPoint: "Ait melloul",
    distanceKm: 160,
    elevationM: 2560,
    durationH: 8,
    summary: "Long ride ,2560 m of climbing, from Aït Melloul to Imouzzer and Amskroud.",
    text: "Tough day in the mountains The ride didn't end the way we hoped. One of our friends had a crash and had to be taken away by ambulance. Wishing him a speedy recovery. 🙏",
    photos: 5,
    mapUrl: "https://www.strava.com/activities/18548313896"
  }
];

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
    title: "Imouzzer Idaoutananes #2 (Loop)",
    level: "hard",
	activity: "cycling",
    startPoint: "Ait melloul",
    distanceKm: 160,
    elevationM: 2560,
    durationH: 8,
    summary: "A challenging mountain loop covering Aït Melloul, Amskroud and Imouzzer with +2 560 m of climbing.",
    text: "Everything was going well, and we were enjoying every moment of the ride until things took an unexpected turn.\n\nWhat started as another mountain biking adventure around the mountains of Imouzzer turned into a difficult day.\n\n During the downhill towards Tamarout village in Imouzzer, one of our friends suffered a crash and had to be taken to the hospital by ambulance.",
    photos: 6,
    mapUrl: "https://www.strava.com/activities/18548313896"
  },
  

 {
   id: "tanalt-23-08-25",
   date: "2025-08-23",
   title: "Lac Takoucht – Tanalt (2 Days Trip)",
   level: "hard",
   activity: "cycling",
   startPoint: "Aït Melloul",
   distanceKm: 225,
   elevationM: 2786,
   durationH: 12,
   summary: "A 225 km solo cycling adventure from Aït Melloul to Lac Takoucht and Tanalt, with 2,786 m of climbing through the beautiful Anti-Atlas mountains.",
   text: "A solo adventure in the heart of the Anti-Atlas mountains.\n\nOver 2,700 m of climbing, surrounded by breathtaking mountain landscapes, quiet roads and the sounds of nature.\n\nFrom Aït Melloul to Lac Takoucht and Tanalt, every climb brought a new view and every road a new discovery.\n\nSometimes, the best adventures are the ones we take alone. 🚴‍♂️⛰️",
   photos: 9,
   mapUrl: "https://www.strava.com/activities/15574654591"
 },


 {
   id: "paradis-30-11-25",
   date: "2025-11-30",
   title: "Paradis Valley #1",
   level: "medium",
   activity: "cycling",
   startPoint: "Aït Melloul",
   distanceKm: 101,
   elevationM: 1012,
   durationH: 4,
   summary: "A challenging cycling adventure through the mountains of Paradise Valley, with winding roads, tough climbs and breathtaking views along the way. 🚴‍♂️⛰️ ",
   text: " Winding mountain roads, challenging climbs and breathtaking landscapes make every effort worthwhile.",
   photos: 7,
   mapUrl: "https://www.strava.com/activities/16613719501"
 },
  {
   id: "tanit-12-10-2025",
   date: "2025-10-12",
   title: "Tanit Valley - Tassedermt  (Loop)",
   level: "hard",
   activity: "cycling",
   startPoint: "Aït Melloul",
   distanceKm: 120,
   elevationM: 2096,
   durationH: 6,
   summary: "A mountain biking adventure from Aït Melloul through Tanit Valley and Tassedermt, passing through the village of Tadrmt and its scenic mountain trails.",
   text: " Another adventure on two wheels, exploring the mountain roads and hidden trails around Tanit Valley.\n\nThe route took us through Tassedermt and the village of Tadrmt, following scenic off-road tracks surrounded by beautiful mountain landscapes.\n\nA mix of climbs, dirt roads and quiet trails made this loop a memorable adventure.",
   photos: 7,
   mapUrl: "https://www.strava.com/activities/16130811771"
 },
  {
   id: "aitlahcen-30-09-25",
   date: "2025-08-23",
   title: "Waterfall Ait lahcen (Loop)",
   level: "hard",
   activity: "cycling",
   startPoint: "Aït Melloul",
   distanceKm: 95,
   elevationM: 1980,
   durationH: 5,
   summary: "A cycling adventure from Aït Melloul to Ait Lahcen Waterfall, exploring scenic mountain roads, rural villages and beautiful natural landscapes.",
   text: " The journey took us through the village of Tasdremt, along mountain dirt roads reaching an altitude of around 1,000 metres.\n\n Surrounded by beautiful mountain landscapes and rural villages, every turn offered another stunning view.",
   photos: 7,
   mapUrl: "https://www.strava.com/activities/15990316118"
 },
  {
   id: "paradis-2026-01-18",
   date: "2026-01-18",
   title: "Paradis valley #2",
   level: "medium",
   activity: "cycling",
   startPoint: "Aït Melloul",
   distanceKm: 108,
   elevationM: 1342,
   durationH: 6,
   summary: "A cold January cycling adventure from Ait melloul to Paradise Valley, passing through aourir village and beautiful mountain roads. A winter ride with chilly temperatures and unforgettable scenery.",
   text: " January brought some seriously cold weather, but the beautiful landscapes and peaceful mountain atmosphere made every kilometre worthwhile.",
   photos: 6,
   mapUrl: "https://www.strava.com/activities/17108330733"
 },
  {
   id: "Wintimdouine-01-02-2026",
   date: "2026-02-01",
   title: "Cave Wintimdouine #1",
   level: "hard",
   activity: "cycling",
   startPoint: "Aït Melloul",
   distanceKm: 116,
   elevationM: 1781,
   durationH: 6,
   summary: "A challenging cycling adventure to Wintimdouine Cave, exploring remote mountain roads, traditional Berber villages and the stunning landscapes of the Anti-Atlas.",
   text: "The journey took us through remote mountain roads, traditional villages and beautiful landscapes far from the busy city roads.\n\nEvery climb brought new views, and every turn revealed another hidden corner of the Anti-Atlas. ",
   photos: 8,
   mapUrl: "https://www.strava.com/activities/17253624150"
 },
  {
   id: "imouzzer-15-02-2026",
   date: "2026-02-15",
   title: "Imouzzer idaoutananes #1",
   level: "hard",
   activity: "cycling",
   startPoint: "Aït Melloul",
   distanceKm: 150,
   elevationM: 2283,
   durationH: 7,
   summary: "A mountain cycling adventure from Aït Melloul to Imouzzer Ida-Outanane, discovering its beautiful natural swimming pools, mountain roads and breathtaking landscapes.",
   text: " The ride took us through winding mountain roads, traditional villages and beautiful landscapes. One of the highlights was discovering the natural swimming pools of Imouzzer, a beautiful spot surrounded by nature.\n\nA journey full of climbs, exploration and unforgettable views. 🚴‍♂️⛰️🌿",
   photos: 5,
   mapUrl: "https://www.strava.com/activities/17410085522"
 },
  {
   id: "aitbaha-03-05-2026",
   date: "2026-05-03",
   title: "Ait baha",
   level: "medium",
   activity: "cycling",
   startPoint: "Aït Melloul",
   distanceKm: 130,
   elevationM: 1200,
   durationH: 6,
   summary: "A scenic cycling ride through the hidden valleys of Aït Baha, where the May rains brought clear flowing water, lush landscapes and beautiful natural views to the mountains. 🌿⛰️",
   text: " May brings a different kind of beauty to Aït Baha. After the spring rains, hidden mountain valleys fill with clear flowing water, creating beautiful natural scenes across the landscape.\n\nQuiet mountain roads, fresh air and the sound of water flowing through the valleys made this ride truly special.",
   photos: 5,
   mapUrl: "https://www.strava.com/activities/18364417724"
 },
 
 {
   id: "tiqqi-2026-05-09",
   date: "2026-05-09",
   title: "Tiqqi Agadir (Loop)",
   level: "hard",
   activity: "cycling",
   startPoint: "Aït Melloul",
   distanceKm: 174,
   elevationM: 2783,
   durationH: 9,
   summary: "Mountain cycling loop starting from Amskroud, climbing towards Tiqqi and reaching an altitude of 1,500 metres before descending back to the starting point.",
   text: "Leaving Amskroud behind, the road gradually climbs towards the mountain village of Tiqqi.\n\nThe higher we went, the more impressive the scenery became. Reaching 1,500 metres above sea level, the route offered beautiful mountain views before the long descent back to Agadir . ",
   photos: 6,
   mapUrl: ""
 },
 {
   id: "tanit-20-06-2026",
   date: "2026-06-20",
   title: "Tanit valley (Unfinished Loop)",
   level: "hard",
   activity: "cycling",
   startPoint: "Aït Melloul",
   distanceKm: 108,
   elevationM: 1940,
   durationH: 7,
   summary: "Ride from Aït Melloul to Tanit Valley, cut short by a derailleur failure. ",
   text: " The journey from Aït Melloul towards Tanit Valley started as a mountain adventure, but things took an unexpected turn on the way back.\n\nA derailleur failure left me unable to pedal properly. I had to push the bike for nearly 10 km uphill, reaching around 900 metres in elevation.\n\nAfter reaching the village of Tasdremt, the route turned downhill towards Agadir. Luckily, I managed to continue riding slowly without using the derailleur until I finally made it home.\n\nThe loop wasn't completed as planned, but getting back safely was what mattered most. 🚵‍♂️⛰️",
   photos: 6,
   mapUrl: "https://www.strava.com/activities/19012090953"
 },
  {
   id: "tizguiy-2026-10-03",
   date: "2026-10-03",
   title: "Tizgui Valley",
   level: "medium",
   activity: "cycling",
   startPoint: "Aït Melloul",
   distanceKm: 122,
   elevationM: 1773,
   durationH: 6,
   summary: "   A refreshing morning cycling adventure to Itizgit Valley near Aqesri village, exploring quiet mountain roads and the beautiful landscapes of the Agadir countryside.",
   text: " Early mornings in the mountains have their own magic.\n\nThe ride took me towards Itizgit Valley, near Aqesri village, through peaceful roads and beautiful mountain scenery.\n\nFresh morning air, quiet surroundings and stunning views made it a perfect escape from the everyday routine.",
   photos: 8,
   mapUrl: "https://www.strava.com/activities/20439830750"
 },
  {
   id: "nador-31-08-2026",
   date: "2026-08-31",
   title: "Nador (Zeghanghane) – Jbel Gourougou (loop)",
   level: "medium",
   activity: "cycling",
   startPoint: "Aït Melloul",
   distanceKm: 45,
   elevationM: 890,
   durationH: 2,
   summary: "An adventurous cycling trip to Jbel Gourougou in Nador, attempting to reach the summit but encountering several restricted-area signs along the way.",
   text: " The climb took me through mountain roads, wild landscapes and encounters with several animals along the way, making the journey even more special.\n\nHowever, reaching the summit wasn't possible this time. Several signs indicated restricted areas, forcing me to turn back.\n\nThe summit remained out of reach, but the wildlife, mountain scenery and unexpected discoveries made this expedition worth remembering. 🚵‍♂️🐾⛰️",
   photos: 7,
   mapUrl: "https://www.strava.com/activities/19975048901/segments/3529480278200770184"
 },
  {
   id: "taghazout-18-11-2025",
   date: "2025-11-18",
   title: "Taghazout | Ocean Views",
   level: "easy",
   activity: "cycling",
   startPoint: "Aït Melloul",
   distanceKm: 80,
   elevationM: 560,
   durationH: 3,
   summary: "An easy coastal ride to Taghazout, enjoying beautiful Atlantic Ocean views, fresh sea air and the relaxed atmosphere of this seaside village. 🌊🚴‍♂️",
   text: "This time, the destination was Taghazout, riding along the coast to enjoy the ocean views and peaceful seaside atmosphere ",
   photos: 5,
   mapUrl: "https://www.strava.com/activities/16494937514"
 },
  {
   id: "imouzzer-2025-06-29",
   date: "2025-06-29",
   title: "Paradis valley -Imouzzer idaoutananes ",
   level: "medium",
   activity: "trip",
   startPoint: "Aït Melloul",
   distanceKm: 148,
   elevationM: 2315,
   durationH: 9,
   summary: "A two-day cycling adventure from Aït Melloul to Imouzzer, with an overnight camping stop in Paradise Valley, followed by a challenging morning climb under intense heat.",
   text: "My first attempt to reach Imouzzer by bike, and an adventure that took two days!\n\nThe journey started from Aït Melloul, heading towards Paradise Valley, where we spent the night camping in a tent under the stars.\n\nEarly the next morning, we packed up and continued towards Imouzzer. The climb was much harder than expected, with steep mountain roads and intense heat making every kilometre a real challenge.\n\nIt was a tough experience, but the landscapes, the night under the stars and the feeling of pushing further made this trip unforgettable. ",
   photos: 7,
   mapUrl: "https://www.strava.com/activities/14957105370"
 },
  {
   id: "tifnout-2025-06-03",
   date: "2025-02-09",
   title: "Lake ifni - Toubkal National Park By Car",
   level: "",
   activity: "other",
   startPoint: "Tikiouine Agadir",
   distanceKm: 250,
   elevationM: "",
   durationH: 5,
   summary: "A long journey of around 250 km by transport, taking approximately 5 hours to reach Lake Ifni. Cold mountain weather, breathtaking landscapes and a beautiful escape into the High Atlas.",
   text: " Reaching Lake Ifni was an adventure even before the ride began.\n\nA journey of around 250 km by transport, taking nearly five hours to reach this remote mountain destination in the heart of the High Atlas.\n\nThe weather was extremely cold, but the stunning mountain scenery and the beauty of the lake made the long journey worthwhile.\n\nSome destinations are worth every kilometre. 🏔️❄️",
   photos: 6,
   mapUrl: ""
 },
  {
   id: "aitbougemz-23-08-25",
   date: "2025-02-23",
   title: "Ait bouguemez By Car",
   level: "",
   activity: "other",
   startPoint: "Aït Melloul",
   distanceKm: 507,
   elevationM: "",
   durationH: 7,
   summary: "A long journey by car to Aït Bouguemez, known as the Happy Valley, surrounded by the majestic peaks of the High Atlas, traditional Berber villages and breathtaking mountain landscapes.",
   text: " Deep in the High Atlas lies Aït Bouguemez, a peaceful valley surrounded by impressive mountains and traditional villages.\n\nThe journey offered a chance to discover a different side of Morocco, with beautiful landscapes, terraced fields and a glimpse into the traditional mountain lifestyle.\n\A place where time seems to slow down and nature takes centre stage. 🏔️🌿",
   photos: 6,
   mapUrl: ""
 },
 {
   id: "trailadrar-12-04-2026",
   date: "2026-04-12",
   title: "TRAIL ADRAR AGADIR 3rd Edition ️",
   level: "easy",
   activity: "running",
   startPoint: "Agadir",
   distanceKm: 10,
   elevationM: 421,
   durationH: 1,
   summary: "A 10 km trail running race with 400 m of elevation gain in Agadir. Finished in 13th place.\n\nA great challenge of endurance, speed and determination. 🏃‍♂️⛰️",
   text: "10 kilometres, 400 metres of climbing and a challenging mountain trail!\n\nTaking part in the 3rd edition of TRAIL ADRAR in Agadir was a great experience. Every climb tested my endurance, every kilometre pushed my limits, and crossing the finish line in 13th place made the effort even more rewarding. ",
   photos: 5,
   mapUrl: "https://www.strava.com/activities/18080594763"
 },
 
 {
   id: "vtt-2026-07-19",
   date: "2026-07-19",
   title: "Agadir – 4 000m Climbing Challenge (Loop)",
   level: "hard",
   activity: "cycling",
   startPoint: "Agadir",
   distanceKm: 148,
   elevationM: 3200,
   durationH: 9,
   summary: "A demanding 148 km cycling adventure with 3,000 m of climbing, exploring hidden rocky mountain roads between Tassedremt and Tanit Valley, before returning through Paradise Valley and Agadir Oufella. Extreme July heat made the ride even tougher.",
   text: "July brought one of the toughest rides of the season. 🥵🔥\n\nStarting from Agadir, the route climbed towards Tasdremt village, reaching around 1,000 metres in elevation.\n\nFrom there, the adventure continued towards Tanit Valley, where we discovered a hidden rocky trail winding between the mountains. A remote and wild section that made this ride truly special.\n\nThe return journey took us through Paradise Valley and back towards Agadir Oufella, with the intense July heat making every kilometre harder.\n\nThe goal was to reach 4,000 m of elevation gain, but the heat had other plans.\n\n148 km, 3,000 m of climbing and countless challenges. Not the numbers I had planned, but definitely a ride to remember. 🚴‍♂️⛰️ ",
   photos: 7,
   mapUrl: "https://www.strava.com/activities/19380901497"
 },
 {
   id: "imouzzer2026-03-23",
   date: "2026-03-23",
   title: "Imouzzer Idaoutananes #3 ",
   activity: "cycling",
   startPoint: "Agadir",
   distanceKm: 160,
   elevationM: 2400,
   durationH: 8,
   summary: "A cycling to Imouzzer Ida-Outanane, discovering its beautiful waterfalls and enjoying the stunning mountain scenery.",
   text: "The road to Imouzzer always has something beautiful to offer.\n\n This time, the destination was its famous waterfalls, surrounded by mountains and natural landscapes.\n\nA perfect opportunity to explore, take a break and enjoy one of the beautiful natural spots around Agadir. 🌿💦⛰️",
   photos: 5,
   mapUrl: "https://www.strava.com/activities/17833884516"
 },
 {
   id: "wintimdouine-19-09-2026",
   date: "2026-07-19",
   title: "Cave Wintimdouine ( 2 Days Trip )",
   level: "hard",
   activity: "Trip",
   startPoint: "Agadir",
   distanceKm: 120,
   elevationM: 1783,
   durationH: 6,
   summary: "A two-day adventure to Wintimdouine Cave, spending the night camping in a tent in the mountains, surrounded by nature. ⛺⛰️",
   text: "Two days away from the usual roads, exploring the mountains around Wintimdouine Cave.\n\nThe adventure included a night camping in a tent, sleeping under the stars and waking up surrounded by mountain landscapes.",
   photos: 10,
   mapUrl: ""
 }
  
];
/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */


// Fields for each piece
//
// id: unique id for each piece
// type: can be either "verse", "song", or "personal"
// korean: Korean text on the piece (null if unavailable)
// english: English translation or Bible passage
// reference: source (e.g., Bible verse reference, song name, speaker name, etc.)
// book: Bible book, or "CCM", or "Personal"
// bibleOrder: position in the Bible (0 = CCM, -1 = personal)
// chapter: chapter number (0 if not a Bible verse)
// verse: verse number (0 if not a Bible verse)
// date: date created in YYYY-MM-DD format
// tool: art tool used
// piano: piano piece played alongside (null if none)
// image: file path to the photo

const pieces = [
  {
    id: 1,
    type: "song",
    korean: "샬롬 샬롬 샬롬 내니 두려워말아라 나의 아들 나의 딸아 안심하라 나의 평안을 주노라 세상과는 다른 평안",
    english: "Shalom, do not be afraid. My son, my daughter, be at peace. I give you my peace, not as the world gives. Do not fear.",
    reference: "Shalom",
    book: "CCM",
    bibleOrder: 0,
    chapter: 0,
    verse: 0,
    date: "2025-01-20",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/1.jpeg"
  },
  {
    id: 2,
    type: "verse",
    korean: "평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라 내가 너희에게 주는 것은 세상이 주는 것과 같지 아니하니라 너희는 마음에 근심하지도 말고 두려워하지도 말라",
    english: "Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.",
    reference: "John 14:27",
    book: "John",
    bibleOrder: 43,
    chapter: 14,
    verse: 27,
    date: "2025-01-20",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/2.jpeg"
  },
  {
    id: 3,
    type: "verse",
    korean: "그런즉 너희가 어떻게 행할지를 자세히 주의하여 지혜 없는 자 같이 하지 말고 오직 지혜 있는 자 같이 하여 세월을 아끼라 때가 악하니라 그러므로 어리석은 자가 되지 말고 오직 주의 뜻이 무엇인가 이해하라",
    english: "Look carefully then how you walk, not as unwise but as wise, making the best use of the time, because the days are evil. Therefore do not be foolish, but understand what the will of the Lord is.",
    reference: "Ephesians 5:15-17",
    book: "Ephesians",
    bibleOrder: 49,
    chapter: 5,
    verse: 15,
    date: "2025-01-21",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/3.jpeg"
  },
  {
    id: 4,
    type: "verse",
    korean: "주의 말씀은 내 발에 등이요 내 길에 빛이시라",
    english: "Your word is a lamp to my feet and a light to my path.",
    reference: "Psalms 119:105",
    book: "Psalms",
    bibleOrder: 19,
    chapter: 119,
    verse: 105,
    date: "2025-01-24",
    tool: "Procreate",
    piano: null,
    image: "images/4.jpeg"
  },
  {
    id: 5,
    type: "verse",
    korean: "공의를 행하는 것이 의인에게는 즐거움이요 죄인에게는 패망이니라 / 입과 혀를 지키는 자는 자기의 영혼을 환난에서 보전하느니라",
    english: "When justice is done, it is a joy to the righteous but terror to evildoers. Whoever keeps his mouth and his tongue keeps himself out of trouble.",
    reference: "Proverbs 21:15",
    book: "Proverbs",
    bibleOrder: 20,
    chapter: 21,
    verse: 15,
    date: "2025-01-25",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/5.jpeg"
  },
  {
    id: 6,
    type: "verse",
    korean: "그런즉 서서 진리로 너희 허리 띠를 띠고 의의 호심경을 붙이고 평안의 복음이 준비한 것으로 신을 신고 모든 것 위에 믿음의 방패를 가지고 이로써 능히 악한 자의 모든 불화살을 소멸하고 구원의 투구와 성령의 검 곧 하나님의 말씀을 가지라",
    english: "Stand therefore, having fastened on the belt of truth, and having put on the breastplate of righteousness, and, as shoes for your feet, having put on the readiness given by the gospel of peace. In all circumstances take up the shield of faith, with which you can extinguish all the flaming darts of the evil one; and take the helmet of salvation, and the sword of the Spirit, which is the word of God.",
    reference: "Ephesians 6:14-17",
    book: "Ephesians",
    bibleOrder: 49,
    chapter: 6,
    verse: 14,
    date: "2025-01-28",
    tool: "Procreate",
    piano: null,
    image: "images/6.jpeg"
  },
  {
    id: 7,
    type: "personal",
    korean: "내사랑 시우 열아홉살 생일축하해",
    english: "Happy 19th Birthday to my love Siwoo",
    reference: "Happy Birthday",
    book: "Personal",
    bibleOrder: -1,
    chapter: 0,
    verse: 0,
    date: "2025-01-29",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/7.jpeg"
  },
  {
    id: 8,
    type: "verse",
    korean: "형제여 성도들의 마음이 너로 말미암아 평안함을 얻었으니 내가 너의 사랑으로 많은 기쁨과 위로를 받았노라",
    english: "For I have derived much joy and comfort from your love, my brother, because the hearts of the saints have been refreshed through you.",
    reference: "Philemon 1:7",
    book: "Philemon",
    bibleOrder: 57,
    chapter: 1,
    verse: 7,
    date: "2025-01-30",
    tool: "Procreate",
    piano: null,
    image: "images/8.jpeg"
  },
  {
    id: 9,
    type: "verse",
    korean: "그러하도다 형제여 나로 주 안에서 너로 말미암아 기쁨을 얻게 하고 내 마음이 그리스도 안에서 평안하게 하라",
    english: "Yes, brother, I want some benefit from you in the Lord; refresh my heart in Christ.",
    reference: "Philemon 1:20",
    book: "Philemon",
    bibleOrder: 57,
    chapter: 1,
    verse: 20,
    date: "2025-01-31",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/9.jpeg"
  },
  {
    id: 10,
    type: "verse",
    korean: "하늘로부터 소리가 나기를 너는 내 사랑하는 아들이라 내가 너를 기뻐하노라 하시니라",
    english: "And a voice came from heaven, 'You are my beloved Son; with you I am well pleased.'",
    reference: "Mark 1:11",
    book: "Mark",
    bibleOrder: 41,
    chapter: 1,
    verse: 11,
    date: "2025-02-03",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/10.jpeg"
  },
  {
    id: 11,
    type: "verse",
    korean: "사랑하는 자들아 주께는 하루가 천 년 같고 천 년이 하루 같다는 이 한 가지를 잊지 말라",
    english: "But do not overlook this one fact, beloved, that with the Lord one day is as a thousand years, and a thousand years as one day.",
    reference: "2 Peter 3:8",
    book: "2 Peter",
    bibleOrder: 61,
    chapter: 3,
    verse: 8,
    date: "2025-02-04",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/11.jpeg"
  },
  {
    id: 12,
    type: "verse",
    korean: "사랑하는 자들아 주께는 하루가 천 년 같고 천 년이 하루 같다는 이 한 가지를 잊지 말라",
    english: "But do not overlook this one fact, beloved, that with the Lord one day is as a thousand years, and a thousand years as one day.",
    reference: "2 Peter 3:8",
    book: "2 Peter",
    bibleOrder: 61,
    chapter: 3,
    verse: 8,
    date: "2025-02-05",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/12.jpeg"
  },
  {
    id: 13,
    type: "song",
    korean: "가만히 바라만 보아도 너무 예뻐 웃음이 나. 세상에서 가장 소중한 너의 하얀 미소. 하나님께서 너무 기쁘시대. 하나님께서 너무 좋으시대. 너의 손을 잡고 너의 손을 잡고 함께 걷고싶으시대. 너는 꽃이야 햇살이야 그저 반짝반짝 빛나는 별이야. 너는 꽃이야 햇살이야 매일매일 예쁜 너야.",
    english: "Just looking at you quietly brings a smile because you're so lovely. Your white smile is the most precious thing in the world. You are a flower, you are the sunshine, a star that simply shines bright.",
    reference: "You Are a Flower",
    book: "CCM",
    bibleOrder: 0,
    chapter: 0,
    verse: 0,
    date: "2025-02-05",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/13.jpeg"
  },
  {
    id: 14,
    type: "song",
    korean: "가만히 바라만 보아도 너무 예뻐 웃음이 나. 세상에서 가장 소중한 너의 하얀 미소. 하나님께서 너무 기쁘시대. 하나님께서 너무 좋으시대. 너의 손을 잡고 너의 손을 잡고 함께 걷고싶으시대. 너는 꽃이야 햇살이야 그저 반짝반짝 빛나는 별이야. 너는 꽃이야 햇살이야 매일매일 예쁜 너야.",
    english: "Just looking at you quietly brings a smile because you're so lovely. Your white smile is the most precious thing in the world. You are a flower, you are the sunshine, a star that simply shines bright.",
    reference: "You Are a Flower",
    book: "CCM",
    bibleOrder: 0,
    chapter: 0,
    verse: 0,
    date: "2025-02-05",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/14.jpeg"
  },
  {
    id: 15,
    type: "verse",
    korean: "자기의 마음을 제어하지 아니하는 자는 성읍이 무너지고 성벽이 없는 것과 같으니라",
    english: "A man without self-control is like a city broken into and left without walls.",
    reference: "Proverbs 25:28",
    book: "Proverbs",
    bibleOrder: 20,
    chapter: 25,
    verse: 28,
    date: "2025-02-06",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/15.jpeg"
  },
  {
    id: 16,
    type: "verse",
    korean: "자기의 마음을 제어하지 아니하는 자는 성읍이 무너지고 성벽이 없는 것과 같으니라",
    english: "A man without self-control is like a city broken into and left without walls.",
    reference: "Proverbs 25:28",
    book: "Proverbs",
    bibleOrder: 20,
    chapter: 25,
    verse: 28,
    date: "2025-02-06",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/16.jpeg"
  },
  {
    id: 17,
    type: "song",
    korean: "주안에 우린 하나 / 모습은 달라도 예수님 한 분만 바라네 / 사랑과 선행으로 서로를 격려해 / 따스함으로 보듬어 가리 / 주님 우리 안에 함께 하시니 / 형제 자매의 기쁨과 슬픔 느끼네 / 내 안에 있는 주님 모습 보네 / 주님 기뻐하시네 / 주님 우릴 통해 계획하신 일 / 부족한 입술로 찬양하게 하신 일 / 주님 우릴 통해 계획하신 일 / 너를 통해 하실 일 기대해",
    english: "We are one in the Lord, for He has called us with one vision. Though we are all different, it is the Lord who makes us one. I have an expectation for the work the Lord will do through you.",
    reference: "The Expectation",
    book: "CCM",
    bibleOrder: 0,
    chapter: 0,
    verse: 0,
    date: "2025-02-10",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/17.jpeg"
  },
  {
    id: 18,
    type: "song",
    korean: "보소서 주님 나의 마음을 / 선한 것 하나 없습니다 / 그러나 내 모든 것 주께 드립니다 / 사랑으로 안으시고 날 새롭게 하소서 / 주님 마음 내게 주소서 내 아버지 / 주님 마음 내게 주소서 / 나를 향하신 주님의 뜻이 이루어지도록 / 주님 마음 내게 주소서",
    english: "Behold, O Lord, my heart. There is nothing good in me. But I offer my all to You. Lord, give me Your heart that longs for me. Use me as Your instrument to spread Your love.",
    reference: "Give Me Your Heart",
    book: "CCM",
    bibleOrder: 0,
    chapter: 0,
    verse: 0,
    date: "2025-02-11",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/18.jpeg"
  },
  {
    id: 19,
    type: "song",
    korean: "모든 시선을 주님께 드리고 / 살아 계신 하나님을 느낄 때 / 내 삶은 주의 역사가 되고 / 하나님이 일하기 시작하네",
    english: "I fix all my gaze upon the Lord, and as I feel the living God, my life becomes the history of the Lord, and God begins to work.",
    reference: "Focus",
    book: "CCM",
    bibleOrder: 0,
    chapter: 0,
    verse: 0,
    date: "2025-02-12",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/19.jpeg"
  },
  {
    id: 20,
    type: "song",
    korean: "반가운 빗소리 들려 / 산천이 춤을 추네 / 봄비로 내리는 성령 / 내게도 주옵소서 / 가물어 메마른 땅에 / 단비를 내리시듯 / 성령의 단비를 부어 / 새생명 주옵소서",
    english: "O Lord, grant me also the Holy Spirit falling like spring rain. As gentle rain falls upon the parched and thirsty land, pour down the rain of the Spirit and give me new life.",
    reference: "There Shall Be Showers of Blessing",
    book: "CCM",
    bibleOrder: 0,
    chapter: 0,
    verse: 0,
    date: "2025-02-13",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/20.jpeg"
  },












  {
    id: 26,
    type: "song",
    korean: null,
    english: "The welcome sound of rain is heard, and all nature dances. O Lord, grant me also the Holy Spirit falling like spring rain. As gentle rain falls upon the parched and thirsty land, pour down the rain of the Spirit and give me new life.",
    reference: "나의 기도 (My Prayer)",
    book: "CCM",
    bibleOrder: 0,
    chapter: 0,
    verse: 0,
    date: "2025-02-25",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: "The Expectation",
    image: "images/26.jpeg"
  },
  {
    id: 27,
    type: "verse",
    korean: null,
    english: "For the Lord is righteous; he loves righteous deeds; the upright shall behold his face.",
    reference: "Psalm 11:7",
    book: "Psalms",
    bibleOrder: 19,
    chapter: 11,
    verse: 7,
    date: "2025-02-26",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/27.jpeg"
  },
  {
    id: 28,
    type: "verse",
    korean: null,
    english: "As for me, I shall behold your face in righteousness; when I awake, I shall be satisfied with your likeness.",
    reference: "Psalm 17:15",
    book: "Psalms",
    bibleOrder: 19,
    chapter: 17,
    verse: 15,
    date: "2025-03-04",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/28.jpeg"
  },
  {
    id: 29,
    type: "verse",
    korean: null,
    english: "For whoever is ashamed of me and of my words in this adulterous and sinful generation, of him will the Son of Man also be ashamed when he comes in the glory of his Father with the holy angels.",
    reference: "Mark 8:38",
    book: "Mark",
    bibleOrder: 41,
    chapter: 8,
    verse: 38,
    date: "2025-03-10",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/29.jpeg"
  },
  {
    id: 30,
    type: "personal",
    korean: "박해를 받지 않는 자는 위대함이 없고 오해를 받지 않는 진리가 없습니다",
    english: "There is no greatness without persecution, and no truth that is not misunderstood",
    reference: "새로운 길을 가는 사람 / (A Person Who Walks a New Path) / 조정민 목사님 (Pastor Cho Jung-min)",
    book: "Personal",
    bibleOrder: -1,
    chapter: 0,
    verse: 0,
    date: "2025-03-10",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/30.jpeg"
  },
  {
    id: 31,
    type: "verse",
    korean: null,
    english: "The Lord is my shepherd; I shall not want.",
    reference: "Psalm 23:1",
    book: "Psalms",
    bibleOrder: 19,
    chapter: 23,
    verse: 1,
    date: "2025-03-11",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/31.jpeg"
  },
  {
    id: 32,
    type: "verse",
    korean: null,
    english: "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul. He leads me in paths of righteousness for his name's sake. Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me. You prepare a table before me in the presence of my enemies; you anoint my head with oil; my cup overflows. Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the Lord forever.",
    reference: "Psalm 23",
    book: "Psalms",
    bibleOrder: 19,
    chapter: 23,
    verse: 1,
    date: "2025-03-12",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/32.jpeg"
  },
  {
    id: 33,
    type: "verse",
    korean: null,
    english: "And Jesus said to him, 'If you can'! All things are possible for one who believes.",
    reference: "Mark 9:23",
    book: "Mark",
    bibleOrder: 41,
    chapter: 9,
    verse: 23,
    date: "2025-03-12",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/33.jpeg"
  },
  {
    id: 34,
    type: "song",
    korean: "난 예수로 예수로 예수로 충만하네 / 영원한 왕 내 안에 살아계시네",
    english: "I am filled with Jesus, with Jesus, with Jesus / The eternal King lives within me.",
    reference: "충만 (Fullness)",
    book: "CCM",
    bibleOrder: 0,
    chapter: 0,
    verse: 0,
    date: "2025-03-13",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/34.jpeg"
  },
  {
    id: 35,
    type: "verse",
    korean: "내가 여호와께 바라는 한 가지일 그것을 구하리니 내가 평생에 여호와의 집에 살면서 여호와의 아름다움을 바라보며 그의 성전에서 사모하는 그것이라",
    english: "One thing have I asked of the Lord, that will I seek after: that I may dwell in the house of the Lord all the days of my life.",
    reference: "Psalm 27:4",
    book: "Psalms",
    bibleOrder: 19,
    chapter: 27,
    verse: 4,
    date: "2025-03-18",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/35.jpeg"
  },
  {
    id: 36,
    type: "verse",
    korean: "인자가 온 것은 섬김을 받으려 함이 아니라 도리어 섬기려 하고 자기 목숨을 많은 사람의 대속물로 주려 함이니라",
    english: "For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many.",
    reference: "Mark 10:45",
    book: "Mark",
    bibleOrder: 41,
    chapter: 10,
    verse: 45,
    date: "2025-03-20",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/36.jpeg"
  },
  {
    id: 37,
    type: "verse",
    korean: "주께서 나의 슬픔이 변하여 내게 춤이 되게 하시며 주께서 내게 베옷을 벗기고 기쁨으로 띠띠웃셨도다",
    english: "You have turned for me my mourning into dancing; you have loosed my sackcloth and clothed me with gladness.",
    reference: "Psalm 30:11",
    book: "Psalms",
    bibleOrder: 19,
    chapter: 30,
    verse: 11,
    date: "2025-03-20",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/37.jpeg"
  },
  {
    id: 38,
    type: "verse",
    korean: "내가 진실로 너희에게 이르노니 누구든지 이 산더러 들리어 바다에 던져지라 하며 그 말하는 것이 이루어질 줄 믿고 마음에 의심하지 아니하면 그대로 되리라",
    english: "Therefore I tell you, whatever you ask in prayer, believe that you have received it, and it will be yours.",
    reference: "Mark 11:24",
    book: "Mark",
    bibleOrder: 41,
    chapter: 11,
    verse: 24,
    date: "2025-03-27",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/38.jpeg"
  },
  {
    id: 39,
    type: "verse",
    korean: "너희 모든 성도들아 여호와를 사랑하라 여호와께서 진실한 자를 보호하시고 교만하게 행하는 자에게 엄중히 갚으시리라",
    english: "Love the Lord, all you his saints! The Lord preserves the faithful but abundantly repays the one who acts in pride.",
    reference: "Psalm 31:23",
    book: "Psalms",
    bibleOrder: 19,
    chapter: 31,
    verse: 23,
    date: "2025-03-27",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/39.jpeg"
  },
  {
    id: 40,
    type: "verse",
    korean: "너는 악을 갚겠다 말하지 말고 여호와를 기다리라 그가 너를 구원하시리라",
    english: "Do not say, 'I will repay evil'; wait for the Lord, and he will deliver you.",
    reference: "Proverbs 20:22",
    book: "Proverbs",
    bibleOrder: 20,
    chapter: 20,
    verse: 22,
    date: "2025-05-01",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/40.jpeg"
  },
  {
    id: 41,
    type: "verse",
    korean: "슬픔이 웃음보다 나음은 얼굴에 근심하는것이 마음에 유익하기 때문이니라",
    english: "Sorrow is better than laughter, for by sadness of face the heart is made glad.",
    reference: "Ecclesiastes 7:3",
    book: "Ecclesiastes",
    bibleOrder: 21,
    chapter: 7,
    verse: 3,
    date: "2025-06-17",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/41.jpeg"
  },
  {
    id: 42,
    type: "verse",
    korean: "사라가 이르되 하나님이 나를 웃게하시니 듣는자가 다 나와 함께 웃으리로다",
    english: "And Sarah said, 'God has made laughter for me; everyone who hears will laugh over me.'",
    reference: "Genesis 21:6",
    book: "Genesis",
    bibleOrder: 1,
    chapter: 21,
    verse: 6,
    date: "2025-06-25",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/42.jpeg"
  },
  {
    id: 43,
    type: "song",
    korean: "믿음과 삶을 살아내는 실력이 너무나 다른 내 모습을 볼 때에 이 모습도 주가 사랑하실까 자신없는 내 모습 그저 주 앞에 있네 / 나 같은 자도 사랑하여 주시고 한번도 나를 떠나지 않으셨네 / 아픔속에 주를 작게 여긴 날 꾸짖지 않으시고 내 손 잡아주시네 / 오직 주 안네 두렴없네 고난을 통해 날 만드심을 믿네 / 주님만이 내 모든 것 되시네 주의 강한 손 날 붙드시네 / 오직 주님 안에 소망 있네 내 삶을 통해 영광 받으실 주님 / 주님만이 내 모든것 되시네 주의 선하심 나 노래하네",
    english: "I'm standing here, not with my own confidence, but before the Lord, just as I am. You love someone like me, who is so small. You have never once left my side. Only in the Lord, I have no fear. The Lord is my everything. I will sing of the Lord's goodness. My faith and my life will follow You.",
    reference: "믿음과 삶 (Faith and Life)",
    book: "CCM",
    bibleOrder: 0,
    chapter: 0,
    verse: 0,
    date: "2025-07-02",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/43.jpeg"
  },
  {
    id: 44,
    type: "personal",
    korean: "시우는 복의 근원이 될지라",
    english: "Siwoo will be a blessing",
    reference: "Genesis 12:2",
    book: "Genesis",
    bibleOrder: 1,
    chapter: 12,
    verse: 2,
    date: "2025-08-18",
    tool: "Walnut ink and dip pen (Nikko G nib)",
    piano: null,
    image: "images/44.jpeg"
  },
  {
    id: 45,
    type: "verse",
    korean: "그러므로 하나님의 전신갑주를 취하라 이는 악한 날에 너희가 능히 대적하고 모든 일을 행한 후에 서기 위함이라",
    english: "Therefore take up the whole armor of God, that you may be able to withstand in the evil day, and having done all, to stand firm.",
    reference: "Ephesians 6:13",
    book: "Ephesians",
    bibleOrder: 49,
    chapter: 6,
    verse: 13,
    date: "2025-10-21",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/45.jpeg"
  },
  {
    id: 46,
    type: "verse",
    korean: "입과 혀를 지키는 자는 자기의 영혼을 환난에서 보전하느니라",
    english: "Whoever keeps his mouth and his tongue keeps himself out of trouble.",
    reference: "Proverbs 21:23",
    book: "Proverbs",
    bibleOrder: 20,
    chapter: 21,
    verse: 23,
    date: "2025-10-29",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/46.jpeg"
  },
  {
    id: 47,
    type: "personal",
    korean: "광야 아름다운 밭이 되고 숲이 되리라",
    english: "[...] the wilderness becomes a fruitful field, and the fruitful field is deemed a forest",
    reference: "Isaiah 32:15",
    book: "Isaiah",
    bibleOrder: 23,
    chapter: 32,
    verse: 15,
    date: "2025-10-30",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/47.jpeg"
  },
  {
    id: 48,
    type: "people",
    korean: "우주와 그안의 모든것은 하나님의 영광을 위해 존재하는 것입니다",
    english: "The universe and everything in it exist for the glory of God",
    reference: "John Piper",
    book: "People",
    bibleOrder: -1,
    chapter: 0,
    verse: 0,
    date: "2025-11-13",
    tool: "Walnut ink and dip pen (Nikko G nib)",
    piano: null,
    image: "images/56.jpeg"
  },
  {
    id: 49,
    type: "verse",
    korean: null,
    english: "For the Lamb in the midst of the throne will be their shepherd, and he will guide them to springs of living water, and God will wipe away every tear from their eyes.",
    reference: "Revelation 7:17",
    book: "Revelation",
    bibleOrder: 66,
    chapter: 7,
    verse: 17,
    date: "2025-11-18",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/48.jpeg"
  },
  {
    id: 50,
    type: "song",
    korean: null,
    english: "To the old rugged cross I will ever be true; its shame and reproach gladly bear. Then He'll call me some day to my home far away, where His glory forever I'll share. So I'll cherish the old rugged cross, till my trophies at last I shall lay down; I will cling to the old rugged cross, and exchange it some day for a crown.",
    reference: "The Old Rugged Cross",
    book: "CCM",
    bibleOrder: 0,
    chapter: 0,
    verse: 0,
    date: "2025-12-04",
    tool: "Zebra Pen Sarasa Clip Decoshine Retractable Gel Pen 0.5mm",
    piano: null,
    image: "images/49.jpeg"
  },
  {
    id: 51,
    type: "verse",
    korean: null,
    english: "Here is a call for the endurance of the saints, those who keep the commandments of God and their faith in Jesus.",
    reference: "Revelation 14:12",
    book: "Revelation",
    bibleOrder: 66,
    chapter: 14,
    verse: 12,
    date: "2025-12-04",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/50.jpeg"
  },
  {
    id: 52,
    type: "verse",
    korean: null,
    english: "As for you, always be sober-minded, endure suffering, do the work of an evangelist, fulfill your ministry.",
    reference: "2 Timothy 4:5",
    book: "2 Timothy",
    bibleOrder: 55,
    chapter: 4,
    verse: 5,
    date: "2026-01-29",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/51.jpeg"
  },
  {
    id: 53,
    type: "verse",
    korean: null,
    english: "Now therefore may it please you to bless the house of your servant, so that it may continue forever before you. For you, O Lord God, have spoken, and with your blessing shall the house of your servant be blessed forever.",
    reference: "2 Samuel 7:29",
    book: "2 Samuel",
    bibleOrder: 10,
    chapter: 7,
    verse: 29,
    date: "2026-02-04",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/52.jpeg"
  },
  {
    id: 54,
    type: "personal",
    korean: null,
    english: "Name tag calligraphy",
    reference: "Name Tag",
    book: "Personal",
    bibleOrder: -1,
    chapter: 0,
    verse: 0,
    date: "2026-03-12",
    tool: "Walnut ink and dip pen (Nikko G nib)",
    piano: null,
    image: "images/53.jpeg"
  },
  {
    id: 55,
    type: "personal",
    korean: null,
    english: "Name tag calligraphy",
    reference: "Name Tag",
    book: "Personal",
    bibleOrder: -1,
    chapter: 0,
    verse: 0,
    date: "2026-04-08",
    tool: "Walnut ink and dip pen (Nikko G nib)",
    piano: null,
    image: "images/54.jpeg"
  },
  {
    id: 56,
    type: "verse",
    korean: null,
    english: "Jesus said to her, 'I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live, and everyone who lives and believes in me shall never die. Do you believe this?'",
    reference: "John 11:25-26",
    book: "John",
    bibleOrder: 43,
    chapter: 11,
    verse: 25,
    date: "2026-04-09",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/55.jpeg"
  },
];

let displayedPieces = pieces;

// This function adds cards the page to display the data in the array
function showCards() {
  // locate the container in the HTML where the cards should be added
  const cardContainer = document.getElementById("card-container");
  // clear the container before adding new cards
  cardContainer.innerHTML = "";

  // update the results count
  document.getElementById("results-count").textContent = displayedPieces.length + " pieces shown";

  const templateCard = document.querySelector(".card");

  for (let i = 0; i < displayedPieces.length; i++) {
    let piece = displayedPieces[i];

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, piece); // Edit reference and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, piece) {
  // make the card visible (since the template card is hidden)
  card.style.display = "block";

  // fill in the image
  const cardImage = card.querySelector("img");
  cardImage.src = piece.image;
  cardImage.alt = piece.reference;
  
  // fill in the type
  const cardType = card.querySelector(".card-type");
  cardType.textContent = piece.type;
  cardType.className = "card-type " + piece.type;

  // fill in the reference
  const cardreference = card.querySelector(".card-title");
  cardreference.textContent = piece.reference;

  // fill in English text
  const cardEnglish = card.querySelector(".card-english");
  cardEnglish.textContent = piece.english;

  // fill in tool
  const toolItem = card.querySelector("#tool-item");
  toolItem.textContent = "🖊 " + piece.tool;

  // fill in piano (only if there is a piano piece)
  const pianoItem = card.querySelector("#piano-item");
  if (piece.piano) {
    pianoItem.textContent = "🎹 " + piece.piano;
  }

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", piece.reference, "- html: ", card);
}

function applySearchAndFilters() {
  // get user input
  const userInput = document.getElementById("search-input").value;
  const typeFilter = document.getElementById("type-filter").value;
  // filter pieces array
  // search not only by reference, but also by English and Korean text
  displayedPieces = pieces.filter((piece) => 
    (piece.type == typeFilter || typeFilter == "all") &&
    ( piece.reference.toLowerCase().includes(userInput.toLowerCase()) ||
      piece.english.toLowerCase().includes(userInput.toLowerCase()) ||
      piece.korean.toLowerCase().includes(userInput.toLowerCase())
    )
  );
  // display filtered pieces
  showCards();
}

// This calls the showCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

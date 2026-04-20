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

// this is the main data structure - an array of objects!
const pieces = [
  {
    id: 1,
    type: "song",
    korean: "샬롬 샬롬 샬롬 내니 두려워말아라 나의 아들 나의 딸아 안심하라 나의 평안을 주노라 세상과는 다른 평안",
    english: "Shalom, do not be afraid. My son, my daughter, be at peace. I give you my peace, not as the world gives. Do not fear.",
    reference: "Shalom",
    book: "CCM",
    bibleOrder: 67,
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
    bibleOrder: 69,
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
    reference: "You Are a Flower (너는 꽃이야)",
    book: "CCM",
    bibleOrder: 67,
    chapter: 0,
    verse: 0,
    date: "2025-02-05",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: "Dear My Flower 너는 꽃이야 (Hisplan)",
    image: "images/13.jpeg"
  },
  {
    id: 14,
    type: "song",
    korean: "가만히 바라만 보아도 너무 예뻐 웃음이 나. 세상에서 가장 소중한 너의 하얀 미소. 하나님께서 너무 기쁘시대. 하나님께서 너무 좋으시대. 너의 손을 잡고 너의 손을 잡고 함께 걷고싶으시대. 너는 꽃이야 햇살이야 그저 반짝반짝 빛나는 별이야. 너는 꽃이야 햇살이야 매일매일 예쁜 너야.",
    english: "Just looking at you quietly brings a smile because you're so lovely. Your white smile is the most precious thing in the world. You are a flower, you are the sunshine, a star that simply shines bright.",
    reference: "You Are a Flower (너는 꽃이야)",
    book: "CCM",
    bibleOrder: 67,
    chapter: 0,
    verse: 0,
    date: "2025-02-05",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: "Dear My Flower 너는 꽃이야 (Hisplan)",
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
    bibleOrder: 67,
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
    bibleOrder: 67,
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
    korean: "모든 시선을 주님께 드리고 살아 계신 하나님을 느낄 때 내 삶은 주의 역사가 되고 하나님이 일하기 시작하네",
    english: "I fix all my gaze upon the Lord, and as I feel the living God, my life becomes the history of the Lord, and God begins to work.",
    reference: "Focus",
    book: "CCM",
    bibleOrder: 67,
    chapter: 0,
    verse: 0,
    date: "2025-02-12",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: "시선 (performed by pianojinlee)",
    image: "images/19.jpeg"
  },
  {
    id: 20,
    type: "song",
    korean: "반가운 빗소리 들려 산천이 춤을 추네 봄비로 내리는 성령 내게도 주옵소서 가물어 메마른 땅에 단비를 내리시듯 성령의 단비를 부어 새생명 주옵소서",
    english: "O Lord, grant me also the Holy Spirit falling like spring rain. As gentle rain falls upon the parched and thirsty land, pour down the rain of the Spirit and give me new life.",
    reference: "There Shall Be Showers of Blessing",
    book: "CCM",
    bibleOrder: 67,
    chapter: 0,
    verse: 0,
    date: "2025-02-13",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: "빈들에 마른 풀 같이 (performed by pianojinlee)",
    image: "images/20.jpeg"
  },
  {
    id: 21,
    type: "verse",
    korean: "그가 경건하여 온 집안과 더불어 하나님을 경외하며 백성을 많이 구제하고 하나님께 항상 기도하더니",
    english: "A devout man who feared God with all his household, gave alms generously to the people, and prayed continually to God.",
    reference: "Acts 10:2",
    book: "Acts",
    bibleOrder: 44,
    chapter: 10,
    verse: 2,
    date: "2025-02-17",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/21.jpeg"
  },
  {
    id: 22,
    type: "verse",
    korean: "고운 것도 거짓되고 아름다운 것도 헛되나 여호와를 경외하는 여자는 칭찬을 받을 것이라",
    english: "Charm is deceitful, and beauty is vain, but a woman who fears the LORD is to be praised.",
    reference: "Proverbs 31:30",
    book: "Proverbs",
    bibleOrder: 20,
    chapter: 31,
    verse: 30,
    date: "2025-02-17",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: "예배합니다 (performed by pianojinlee)",
    image: "images/22.jpeg"
  },
  {
    id: 23,
    type: "verse",
    korean: "오직 여호와의 율법을 즐거워하여 그의 율법을 주야로 묵상하는 자로다",
    english: "but his delight is in the law of the LORD, and on his law he meditates day and night.",
    reference: "Psalm 1:2",
    book: "Psalms",
    bibleOrder: 19,
    chapter: 1,
    verse: 2,
    date: "2025-02-17",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: "시편 1편 (Namooen)",
    image: "images/23.jpeg"
  },
  {
    id: 24,
    type: "verse",
    korean: "여호와 우리 주여 주의 이름이 온 땅에 어찌 그리 아름다운지요",
    english: "O LORD, our Lord, how majestic is your name in all the earth!",
    reference: "Psalm 8:1",
    book: "Psalms",
    bibleOrder: 19,
    chapter: 8,
    verse: 1,
    date: "2025-02-24",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/24.jpeg"
  },
  {
    id: 25,
    type: "verse",
    korean: "사람이 무엇이기에 주께서 그를 생각하시며 인자가 무엇이기에 주께서 그를 돌보시나이까",
    english: "what is man that you are mindful of him, and the son of man that you care for him?",
    reference: "Psalm 8:4",
    book: "Psalms",
    bibleOrder: 19,
    chapter: 8,
    verse: 4,
    date: "2025-02-24",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/25.jpeg"
  },
  {
    id: 26,
    type: "song",
    korean: "아버지 나의 하나님 말씀하시는 하나님 나의 길 기도하오니 나에게 말씀하소서 사랑하는 아이야 두려워하지 말아라 내길의 모든 범사가 기한과 때가 있단다 네가 어디로 가든지 나 너와 함께 하리라",
    english: "The welcome sound of rain is heard, and all nature dances. O Lord, grant me also the Holy Spirit falling like spring rain. As gentle rain falls upon the parched and thirsty land, pour down the rain of the Spirit and give me new life.",
    reference: "My Prayer (나의 기도 by 시와그림)",
    book: "CCM",
    bibleOrder: 67,
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
    korean: "여호와는 의로우사 의로운일을 좋아하시나니 정직한자는 그의 얼굴을 뵈오리이다",
    english: "For the Lord is righteous; he loves righteous deeds; the upright shall behold his face.",
    reference: "Psalm 11:7",
    book: "Psalms",
    bibleOrder: 19,
    chapter: 11,
    verse: 7,
    date: "2025-02-26",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: "정결한 마음 주시옵소서 (performed by pianojinlee)",
    image: "images/27.jpeg"
  },
  {
    id: 28,
    type: "verse",
    korean: "나는 의로운중에 주의 얼굴을 뵈오리니 깰 때에 주의 형상으로 만족하리이다",
    english: "As for me, I shall behold your face in righteousness; when I awake, I shall be satisfied with your likeness.",
    reference: "Psalm 17:15",
    book: "Psalms",
    bibleOrder: 19,
    chapter: 17,
    verse: 15,
    date: "2025-03-04",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: "나는 믿음으로 (Jesusville) (performed by pianojinlee)",
    image: "images/28.jpeg"
  },
  {
    id: 29,
    type: "verse",
    korean: "누구든지 이 음란하고 죄많은 세대에서 나와 내 말을 부끄러워하면 인자도 아버지의 영광으로 거룩한 천사들과 함께 올 때에 그 사람을 부끄러워 하리라",
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
    type: "people",
    korean: "박해를 받지 않는 자는 위대함이 없고 오해를 받지 않는 진리가 없습니다",
    english: "There is no greatness without persecution, and no truth that is not misunderstood",
    reference: "A Person Who Walks a New Path / Pastor Cho Jung-min (새로운 길을 가는 사람 / 조정민 목사님)",
    book: "Personal",
    bibleOrder: 68,
    chapter: 0,
    verse: 0,
    date: "2025-03-10",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: "복음들고 산을 (performed by pianojinlee)",
    image: "images/30.jpeg"
  },
  {
    id: 31,
    type: "verse",
    korean: "여호와는 나의 목자시니 내게 부족함이 없으리로다",
    english: "The Lord is my shepherd; I shall not want.",
    reference: "Psalm 23:1",
    book: "Psalms",
    bibleOrder: 19,
    chapter: 23,
    verse: 1,
    date: "2025-03-11",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: "시편 23편 (홍이삭) (performed by pianojinlee)",
    image: "images/31.jpeg"
  },
  {
    id: 32,
    type: "verse",
    korean: "여호와는 나의 목자시니 내게 부족함이 없으리로다 그가 나를 푸른 풀밭에 누이시며 쉴 만한 물 가로 인도하시는도다 내 영혼을 소생시키시고 자기 이름을 위하여 의의 길로 인도하시는도다 내가 사망의 음침한 골짜기로 다닐지라도 해를 두려워하지 않을 것은 주께서 나와 함께 하심이라 주의 지팡이와 막대기가 나를 안위하시나이다 주께서 내 원수의 목전에서 내게 상을 차려 주시고 기름을 내 머리에 부으셨으니 내 잔이 넘치나이다 내 평생에 선하심과 인자하심이 반드시 나를 따르리니 내가 여호와의 집에 영원히 살리로다",
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
    korean: "예수께서 이르시되 할 수 있거든이 무슨 말이냐 믿는 자에게는 능히 하지 못할 일이 없느니라",
    english: "And Jesus said to him, 'If you can'! All things are possible for one who believes.",
    reference: "Mark 9:23",
    book: "Mark",
    bibleOrder: 41,
    chapter: 9,
    verse: 23,
    date: "2025-03-12",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: "전능하신 나의 주 하나님은 (performed by pianojinlee)",
    image: "images/33.jpeg"
  },
  {
    id: 34,
    type: "song",
    korean: "난 예수로 예수로 예수로 충만하네 / 영원한 왕 내 안에 살아계시네",
    english: "I am filled with Jesus, with Jesus, with Jesus / The eternal King lives within me.",
    reference: "Fullness (충만)",
    book: "CCM",
    bibleOrder: 67,
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
    piano: "소원 (전은주) (performed by pianojinlee)",
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
    piano: "내 슬픔 변해 (나의 슬픔을) (performed by pianojinlee)",
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
    piano: "전능하신 주 하나님은 (performed by pianojinlee)",
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
    piano: "충만-손경민 (performed by pianojinlee)",
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
    reference: "Faith and Life (믿음과 삶)",
    book: "CCM",
    bibleOrder: 67,
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
    bibleOrder: 69,
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
    type: "verse",
    korean: "광야 아름다운 밭이 되고 숲이 되리라",
    english: "[...] the wilderness becomes a fruitful field, and the fruitful field is deemed a forest",
    reference: "Isaiah 32:15",
    book: "Isaiah",
    bibleOrder: 23,
    chapter: 32,
    verse: 15,
    date: "2025-10-30",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: "달고 오묘한 그 말씀 [HYMN 200] (Namooen)",
    image: "images/47.jpeg"
  },
  {
    id: 48,
    type: "people",
    korean: "우주와 그안의 모든것은 하나님의 영광을 위해 존재하는 것입니다",
    english: "The universe and everything in it exist for the glory of God",
    reference: "John Piper",
    book: "People",
    bibleOrder: 68,
    chapter: 0,
    verse: 0,
    date: "2025-11-13",
    tool: "Walnut ink and dip pen (Nikko G nib)",
    piano: null,
    image: "images/48.jpeg"
  },
  {
    id: 49,
    type: "verse",
    korean: "이는 보라 가운데 계신 어린 양이 그들의 목자가 되어 생명수샘으로 인도하시고 하나님께서 그들의 눈에서 모든 눈물을 씻어 주실 것임이라",
    english: "For the Lamb in the midst of the throne will be their shepherd, and he will guide them to springs of living water, and God will wipe away every tear from their eyes.",
    reference: "Revelation 7:17",
    book: "Revelation",
    bibleOrder: 66,
    chapter: 7,
    verse: 17,
    date: "2025-11-18",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/49.jpeg"
  },
  {
    id: 50,
    type: "song",
    korean: "주가 예비하신 나의 본향집에 나를 부르실 그날까지 험한 십자가를 항상 달게 지고 내가 죽도록 충성하리 최후 승리를 받기까지 주의 십자가 사랑하리 빛난 면류관 받기까지 험한 십자가 붇들겠네",
    english: "To the old rugged cross I will ever be true; its shame and reproach gladly bear. Then He'll call me some day to my home far away, where His glory forever I'll share. So I'll cherish the old rugged cross, till my trophies at last I shall lay down; I will cling to the old rugged cross, and exchange it some day for a crown.",
    reference: "The Old Rugged Cross (갈보리산 위에)",
    book: "CCM",
    bibleOrder: 67,
    chapter: 0,
    verse: 0,
    date: "2025-12-04",
    tool: "Zebra Pen Sarasa Clip Decoshine Retractable Gel Pen 0.5mm",
    piano: null,
    image: "images/50.jpeg"
  },
  {
    id: 51,
    type: "verse",
    korean: "성도들의 인내가 여기 있나니 그들은 하나님의 계명과 예수에 대한 믿음을 지키는 자니라",
    english: "Here is a call for the endurance of the saints, those who keep the commandments of God and their faith in Jesus.",
    reference: "Revelation 14:12",
    book: "Revelation",
    bibleOrder: 66,
    chapter: 14,
    verse: 12,
    date: "2025-12-04",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/51.jpeg"
  },
  {
    id: 52,
    type: "verse",
    korean: "그러나 너는 모든 일에 신중하여 고난을 받으며 전도자의 일을 하며 네 직무를 다하라",
    english: "As for you, always be sober-minded, endure suffering, do the work of an evangelist, fulfill your ministry.",
    reference: "2 Timothy 4:5",
    book: "2 Timothy",
    bibleOrder: 55,
    chapter: 4,
    verse: 5,
    date: "2026-01-29",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/52.jpeg"
  },
  {
    id: 53,
    type: "verse",
    korean: "이제 청하건데 종의 집에 복을 주사 주앞에 영원히 있게 하옵소서 주 여호와께서 말씀하셨사오니 주의 종의 집이 영원히 복을 받게 하옵소서 하니라",
    english: "Now therefore may it please you to bless the house of your servant, so that it may continue forever before you. For you, O Lord God, have spoken, and with your blessing shall the house of your servant be blessed forever.",
    reference: "2 Samuel 7:29",
    book: "2 Samuel",
    bibleOrder: 10,
    chapter: 7,
    verse: 29,
    date: "2026-02-04",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/53.jpeg"
  },
  {
    id: 54,
    type: "personal",
    korean: "Beautiful",
    english: "Beautiful",
    reference: "Beautiful (Name Tag Caligraphy)",
    book: "Personal",
    bibleOrder: 69,
    chapter: 0,
    verse: 0,
    date: "2026-03-12",
    tool: "Walnut ink and dip pen (Nikko G nib)",
    piano: "Yellow Flowers (From Paris)",
    image: "images/54.jpeg"
  },
  {
    id: 55,
    type: "personal",
    korean: "the love, the hope",
    english: "the love, the hope",
    reference: "The Love, The Hope (Name Tag Calligraphy)",
    book: "Personal",
    bibleOrder: 69,
    chapter: 0,
    verse: 0,
    date: "2026-04-08",
    tool: "Walnut ink and dip pen (Nikko G nib)",
    piano: null,
    image: "images/55.jpeg"
  },
  {
    id: 56,
    type: "verse",
    korean: "예수께서 이르시되 나는 부활이요 생명이니 나를 믿는 자는 죽어도 살겠고 무릇 살아서 나를 믿는 자는 영원히 죽지 아니하리니 이것을 네가 믿느냐",
    english: "Jesus said to her, 'I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live, and everyone who lives and believes in me shall never die. Do you believe this?'",
    reference: "John 11:25-26",
    book: "John",
    bibleOrder: 43,
    chapter: 11,
    verse: 25,
    date: "2026-04-09",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/56.jpeg"
  },
];

// displayedPieces variable holds the pieces currently being displayed on the page  
let displayedPieces = pieces;

// favorites array holds the pieces that the user has marked as favorites
let favorites = [];

// false when English text is shown, true when Korean text is shown
let showKorean = false;

// array to hold submitted requests
let requests = [];

// This function adds cards the page to display the data in the array
function showCards() {

  // locate the container in the HTML (section where the cards will be added)
  const cardContainer = document.getElementById("card-container");

  // clear the container before adding new cards
  cardContainer.innerHTML = "";

  // update the results count
  document.getElementById("results-count").textContent = displayedPieces.length + " pieces shown";

  // locate the template card in the HTML (card that is hidden and will be copied to make new cards)
  const templateCard = document.querySelector(".card");

  // loop through the pieces to be displayed
  for (let i = 0; i < displayedPieces.length; i++) {
    let piece = displayedPieces[i];

    // create a new card by copying the template card
    // cloneNode(true) creates a deep copy (copies the element and all of its children) of the template card
    const nextCard = templateCard.cloneNode(true); 

    // edit the content of the new card to match the piece data
    editCardContent(nextCard, piece);

    // add the new card to the container in the HTML
    cardContainer.appendChild(nextCard);
  }
}

function editCardContent(card, piece) {
  // make the card visible (since the template card is hidden)
  card.style.display = "block";

  // add a favorite button to the card
  const favBtn = document.createElement("button");
  favBtn.className = "fav-btn";
  // if piece in favorites array, show filled heart
  if (favorites.includes(piece.id)) {
    favBtn.textContent = "♥";
  } 
  // if piece not in favorites array, show empty heart
  else {
    favBtn.textContent = "♡";
  }
  // run toggleFavorite function when user clicks on the favorite button
  favBtn.onclick = function() {
    toggleFavorite(piece.id); 
  };
  // add the favorite button to the card
  card.appendChild(favBtn);

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

  // fill in text based on language toggle
  const cardEnglish = card.querySelector(".card-english");
  if (showKorean && piece.korean) {
    cardEnglish.textContent = piece.korean;
  } 
  else {
    cardEnglish.textContent = piece.english;
  }

  // fill in tool
  const toolItem = card.querySelector("#tool-item");
  toolItem.textContent = "🖊 " + piece.tool;

  // fill in date
  const dateItem = document.createElement("div");
  dateItem.className = "card-meta-item";
  dateItem.textContent = "📅 " + piece.date;
  card.querySelector(".card-meta").appendChild(dateItem);

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
  const searchInput = document.getElementById("search-input").value;
  const typeFilter = document.getElementById("type-filter").value;

  // filter pieces array
  // .filter() returns a new array with only the pieces that match the condition in the function
  displayedPieces = pieces.filter((piece) => 
    // filter by type
    (piece.type == typeFilter || typeFilter == "all") &&
    (
      // matches reference 
      piece.reference.toLowerCase().includes(searchInput.toLowerCase()) ||
      // matches english input
      piece.english.toLowerCase().includes(searchInput.toLowerCase()) ||
      // check if korean text exists, then match korean input
      (piece.korean && piece.korean.toLowerCase().includes(searchInput.toLowerCase()))
    )
  );

  // display filtered pieces
  showCards();
}

function applySort() {
  const sortValue = document.getElementById("sort-select").value;

  // for .sort()
  // result > 0 -> b comes before a
  // result < 0 -> a comes before b
  // result = 0 -> a and b are unchanged relative to each other

  // sort by date (newest first)
  if (sortValue === "date-desc") {
    // logic: b is more recent -> result is positive -> b comes before a
    displayedPieces.sort((a, b) => new Date(b.date) - new Date(a.date));
  } 

  // sort by date (oldest first)
  else if (sortValue === "date-asc") {
    // logic: a is more recent -> result is negative -> a comes before b
    displayedPieces.sort((a, b) => new Date(a.date) - new Date(b.date));
  } 

  // sort by Bible order
  else if (sortValue === "bible-order") {
    displayedPieces.sort((a, b) => {
      // logic: b comes first (b < a) -> result is positive -> b comes before a

      // sort by book
      if (a.bibleOrder !== b.bibleOrder) {
        return a.bibleOrder - b.bibleOrder;
      }
      // sort by chapter
      if (a.chapter !== b.chapter) {
        return a.chapter - b.chapter;
      }
      // sort by verse
      return a.verse - b.verse;
    });
  } 

  // sort alphabetically by reference (A to Z)
  else if (sortValue === "alpha") {
    // "a".localeCompare("b")
    // returns -1 if a comes before b
    // returns 1 if b comes before a
    // returns 0 if they are the same

    // logic: a comes first (a < b) -> result is negative -> a comes before b
    displayedPieces.sort((a, b) => a.reference.localeCompare(b.reference));
  } 

  // sort alphabetically by reference (Z to A)
  else if (sortValue === "alpha-desc") {
    displayedPieces.sort((a, b) => b.reference.localeCompare(a.reference));
  }
  
  // display sorted pieces
  showCards();
}

// called when user clicks on the heart button on a card
function toggleFavorite(pieceId) {
  // if this piece is already in favorites
  if (favorites.includes(pieceId)) {
    // keep all pieces except the one with pieceId
    favorites = favorites.filter((id) => id !== pieceId);
  } 
  // if this piece is not already in favorites
  else {
    // add it to the favorites array
    favorites.push(pieceId);
  }
  // update the cards
  showCards();
  // update the favorites section
  renderFavorites();
}

// updates the favorites section
function renderFavorites() {
  // locate the favorites container in HTML
  const container = document.getElementById("favorites-container");
  // locate the count badge in HTML
  const countBadge = document.getElementById("fav-count");
  
  // update the count badge
  countBadge.textContent = favorites.length;
  
  // if no favorites, show empty message
  if (favorites.length === 0) {
    container.innerHTML = '<p class="empty-fav-msg">Heart a piece to save it here ♡</p>';
    return;
  }
  
  // clear the container to add the updated list of favorites
  container.innerHTML = "";
  
  // for each favorited id, find the matching piece and create a chip
  // loop thru each favorited id
  for (let i = 0; i < favorites.length; i++) {
    const id = favorites[i];

    // find the piece object that matches this id
    // find() returns the first piece that matches the condition (p.id === id)
    const piece = pieces.find((p) => p.id === id);

    // skip if piece not found
    if (!piece) {
      continue;
    }

    // create a chip element for this piece
    // createElement() creates a new HTML element specified by the tag name (which in this case, is "div")
    const chip = document.createElement("div");
    // add the "fav-chip" class to this chip for styling
    chip.className = "fav-chip";

    // chip shows the piece reference and a remove button
    // toggleFavorite() is called with the piece id when the user clicks on the "x" button (remove button)
    chip.innerHTML = "♥ " + piece.reference + '<button onclick="toggleFavorite(' + piece.id + ')">✕</button>';

    // add the chip to the favorites container
    container.appendChild(chip);
  }
}

// called when the "Clear All" button is called in the favorites section
function clearFavorites() {
  favorites = [];
  showCards();
  renderFavorites();
}

// called when user clicks on the language toggle button
function toggleLanguage() {
  // flip the value of showKorean (true -> false, false -> true)
  showKorean = !showKorean;
  // update the language toggle button label
  const label = document.getElementById("lang-label");
  // if showKorean is true, label should say "English" (b/c clicking it will switch to English)
  if (showKorean) {
    label.textContent = "English";
  } 
  else {
    label.textContent = "한국어";
  }
  showCards();
}

// called when user clicks the "Submit Request" button
function submitRequest() {
  // get user input
  const name = document.getElementById("request-name").value;
  const text = document.getElementById("request-text").value;
  const ref = document.getElementById("request-ref").value;

  // validate input (make sure text is not empty)
  if (text === "") {
    alert("Please enter the verse or lyric you'd like written.");
    return;
  }

  // create a new request object and add it to the requests array
  const newRequest = {
    // e.g., the very first request will have id 1 <- 0 + 1
    id: requests.length + 1,
    // made name optional
    name: name || "Anonymous",
    text: text,
    ref: ref
  };
  requests.push(newRequest);

  // clear the input fields after submission
  document.getElementById("request-name").value = "";
  document.getElementById("request-text").value = "";
  document.getElementById("request-ref").value = "";

  // update the displayed list of requests
  renderRequests();
}

// renders all requests to the page
function renderRequests() {
  // locate the requests list container in HTML
  const list = document.getElementById("requests-list");

  // clear the list before re-rendering 
  list.innerHTML = "";

  // loop through the requests array in reverse order (newest first)
  for (let i = requests.length - 1; i >= 0; i--) {
    // get the current request
    const req = requests[i];

    // create a new div element for this request
    const item = document.createElement("div");
    // add the "request-item" class to this item for styling
    item.className = "request-item";
    
    // p element for name of requester (note: never empty b/c it's set to "Anonymous" if user doesn't enter a name)
    const name = document.createElement("p");
    name.className = "request-item-name";
    name.textContent = req.name;

    // p element for request text
    const text = document.createElement("p");
    text.className = "request-item-text";
    text.textContent = req.text;

    // add the name and text elements to the request item
    item.appendChild(name);
    item.appendChild(text);

    // p element for reference
    if (req.ref) {
      const ref = document.createElement("p");
      ref.className = "request-item-ref";
      ref.textContent = req.ref;
      item.appendChild(ref);
    }

    // create a remove button for this request
    const btn = document.createElement("button");
    btn.className = "request-remove-btn";
    btn.textContent = "✕";
    // when user clicks this button, remove this request
    btn.onclick = function() {
      removeRequest(req.id);
    };

    // add the remove button to the request item
    item.appendChild(btn);

    // add the request item to the list
    list.appendChild(item);
  }
}

// called when user clicks the "x" button on a request item to remove it
function removeRequest(requestId) {
  // filter the requests array to keep all requests except the one with requestId
  requests = requests.filter((req) => req.id !== requestId);
  // update the displayed list of requests
  renderRequests();
}

// when the page first loads, show the cards and apply the default sort (by date, newest to oldest)
document.addEventListener("DOMContentLoaded", function() {
  showCards();
  applySort();
});
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
// reference: either Bible verse reference or song name
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
    reference: "샬롬 (Shalom)",
    book: "CCM",
    bibleOrder: 0,
    chapter: 0,
    verse: 0,
    date: "2025-01-20",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/1.jpg"
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
    image: "images/2.jpg"
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
    image: "images/3.jpg"
  },
  {
    id: 4,
    type: "verse",
    korean: "주의 말씀은 내 발에 등이요 내 길에 빛이시라",
    english: "Your word is a lamp to my feet and a light to my path.",
    reference: "Psalm 119:105",
    book: "Psalms",
    bibleOrder: 19,
    chapter: 119,
    verse: 105,
    date: "2025-01-24",
    tool: "Procreate",
    piano: null,
    image: "images/4.jpg"
  },
  {
    id: 5,
    type: "verse",
    korean: "공의를 행하는 것이 의인에게는 즐거움이요 죄인에게는 패망이니라 / 입과 혀를 지키는 자는 자기의 영혼을 환난에서 보전하느니라",
    english: "When justice is done, it is a joy to the righteous but terror to evildoers. Whoever keeps his mouth and his tongue keeps himself out of trouble.",
    reference: "Proverbs 21:15, 23",
    book: "Proverbs",
    bibleOrder: 20,
    chapter: 21,
    verse: 15,
    date: "2025-01-25",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/5.jpg"
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
    image: "images/6.jpg"
  },
  {
    id: 7,
    type: "personal",
    korean: "내사랑 시우 열아홉살 생일축하해",
    english: "Happy 19th Birthday to my love Siwoo",
    reference: "Birthday Dedication",
    book: "Personal",
    bibleOrder: -1,
    chapter: 0,
    verse: 0,
    date: "2025-01-29",
    tool: "Kuretake Fude Brush Pen No.22",
    piano: null,
    image: "images/7.jpg"
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
    image: "images/8.jpg"
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
    image: "images/9.jpg"
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
    image: "images/10.jpg"
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
    image: "images/11.jpg"
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
    image: "images/12.jpg"
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
    image: "images/13.jpg"
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
    image: "images/14.jpg"
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
    image: "images/15.jpg"
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
    image: "images/16.jpg"
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
    image: "images/17.jpg"
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
    image: "images/18.jpg"
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
    image: "images/19.jpg"
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
    image: "images/20.jpg"
  }
];

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    let imageURL = "";
    if (i == 0) {
      imageURL = FRESH_PRINCE_URL;
    } else if (i == 1) {
      imageURL = CURB_POSTER_URL;
    } else if (i == 2) {
      imageURL = EAST_LOS_HIGH_POSTER_URL;
    }

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

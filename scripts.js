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
// book: Bible book, or "Hymn", or "Personal"
// bibleOrder: position in the Bible (0 = hymn, -1 = personal)
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
    book: "Hymn",
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
    korean: null,
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
    korean: null,
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
    korean: null,
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
    korean: null,
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
    korean: null,
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
    korean: null,
    english: "Happy 19th Birthday",
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
    korean: null,
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
    korean: null,
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
    korean: null,
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
]


// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

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

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}

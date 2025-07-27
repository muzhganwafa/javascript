
const readerName = "Muzhgan";
const currentMonth = "July";
console.log("Reader Name:", readerName);
console.log("Month:", currentMonth);


const bookTitles = ["Black Milk", "The Bastard of Istanbul", "The lost Bookshop"];
const totalPages = [200, 320, 280];
const pagesRead = [200, 220, 80];

console.log("\n--- Book Details ---");
for (let i = 0; i < bookTitles.length; i++) {
  console.log(`Book: ${bookTitles[i]}, Pages Read: ${pagesRead[i]}, Total Pages: ${totalPages[i]}`);
}

function calculateProgress(pagesRead, totalPages) {
  return Math.round((pagesRead / totalPages) * 100);
}


function getReadingStatus(progress) {
  if (progress === 100) {
    return "Finished";
  } else if (progress >= 50) {
    return "In Progress";
  } else {
    return "Just Started";
  }
}

function printBookSummary(title, pagesRead, totalPages) {
  const progress = calculateProgress(pagesRead, totalPages);
  const status = getReadingStatus(progress);
  console.log(`${title}: ${pagesRead}/${totalPages} pages read — ${status}`);
}


console.log("\n--- Book Summaries ---");
for (let i = 0; i < bookTitles.length; i++) {
  printBookSummary(bookTitles[i], pagesRead[i], totalPages[i]);
}


function totalPagesRead(pagesReadArray) {
  let total = 0;
  for (let i = 0; i < pagesReadArray.length; i++) {
    total += pagesReadArray[i];
  }
  return total;
}


function findBookWithMostPagesLeft(titles, readPages, totalPages) {
  let maxPagesLeft = 0;
  let bookTitle = "";

  for (let i = 0; i < titles.length; i++) {
    const pagesLeft = totalPages[i] - readPages[i];
    if (pagesLeft > maxPagesLeft) {
      maxPagesLeft = pagesLeft;
      bookTitle = titles[i];
    }
  }

  return bookTitle;
}


function printReadingSummary(readerName, month, pagesReadArray) {
  const total = totalPagesRead(pagesReadArray);
  console.log(`\n${readerName}'s reading progress for ${month}: ${total} pages read.`);
}


printReadingSummary(readerName, currentMonth, pagesRead);

const mostLeftBook = findBookWithMostPagesLeft(bookTitles, pagesRead, totalPages);
console.log(`\nBook with the most pages left to read is: ${mostLeftBook}`);


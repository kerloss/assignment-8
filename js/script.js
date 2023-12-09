var head = `
<div class="col-12 col-sm-12 col-md-12 col-lg-12 text-center text-light">
    <div class="head">
        <i class="fa-solid fa-quote-left mt-5 fs-1 text-light"></i>
        <h1 class="mb-5 position-relative">Quote of the Day</h1>
        <p>Press the button below to recieve a random quote!</p>
    </div>
</div>`;

document.getElementById('head').innerHTML = head;

var quotesArray = [
    {
        quotes: 'Be the change that you wish to see in the world.',
        author: 'Mahatma Gandhi'
    },
    {
        quotes: 'If you are not who you should be. So maybe you havent done  should have done yet.',
        author: 'Vishesh Panthi'
    },
    {
        quotes: 'The man who does not read has no advantage over the man who cannot read.',
        author: 'Mark Twain'
    },
    {
        quotes: 'I have not failed. I have just found 10,000 ways that wont work.',
        author: 'Thomas A.Edison'
    },
    {
        quotes: 'Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.',
        author: 'Bill Keane'
    },
    {
        quotes: 'Imperfection is beauty, madness is genius and it is better to be absolutely ridiculous than absolutely boring.',
        author: 'Marilyn Monroe'
    },
];

function addQuotes() {
    console.log("clicked");  //to check

    var random = Math.floor(Math.random() * quotesArray.length);
    console.log(random);
    var quote = quotesArray[random].quotes;
    // console.log(quote);
    var author = quotesArray[random].author;
    // console.log(author);
    document.getElementById('qouteOutput').innerHTML = '"' + quote + '"';
    document.getElementById('authorOutput').innerHTML = '-- ' + author;
}
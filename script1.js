const comments = [
  "is this real or dare",
  "cant beleieve this",
  "wow my life changed i have got selected in SUJ exam",
  "illuminati is true",
  "life changed",
"i tot its not true, mai kal kiya tha aaj hi iska effect dikhne laga",
"just awesome..!",
"i tot its not true, mai kal kiya tha aaj hi iska effect dikhne laga",
"just awesome..!",
"CAN I TRY IN MOBILE PHONE SIR/MAM",
"100% working trick im finally pregnant now",
"my wedding fixed with my love",
"such much mai cant believe this",
"whoever did this god bless you my son",
"jai illuminati",
"jai shree ram",
"finally i got some real trick of celebrities",
"love from kashmir, first i thoght its not true, but after 3rd day the result just shocked me sir",
"life changed today, its my first wish which became true in real life thank you so much illuminati",
"Love from india",
"love this trick, trust me guys its 100%, i got selected in TCS compnay",
"bhai sach me lajawab hai, ye kaisa work hoga malum nahi lekin mera life me work huva hai",
"myth or truth i dont know,i just tried and cleared my history. but it happened really in my life and tomorrow is my marriage",
"im black guy and no girls like me, for the first time after wishing here yesterday i proposed my love, she agreed today thank u so mucjh",
"shocking truth",
"bhai sach me kaisa work ho tha hai malum nahi lekin work ho tha hai",
"i want to join illuminati",
"may allaha help you all",
"assalamwalikhum",
"life badal gaya, very very impressing and shocking community ever",
"i dont trust in god, but yesterday what happened in my life is really big shock",
"mera kaam hoga ya sir ab kya kar na padega",
"me pass ho gaya, paper me kuch nahi likha tha fir bhi pass hogaya cant blv this",
"madarchod",
"its very very abnormal, in my life it worked, i got loan from bank for my new house",
"bought car today,bank rejected my loan but after wishing here today they called me and offered loan with less interest rate",
"magic of life",
"GOD Lives matters",
"mere vivo phone hai payment 1 rs send nahi ho raha hai",
"just magic",
"how is it possible, muje yakin hi nahi ho raha..............",
"mere life badalgaya meri ladki mere proposal ko agree kiya",
"my baby's health is fine now",
"bhagawan aap ka bhala kare",
"illuminati kya ho tha hai",
"this is brillient ancient trick",
"mera jeevan yu utake uper kiya",
"love from panjab",
"my name is akashar and i dont havemoney i want my wish to become true help me sir",
"sent 1 rs",
"love from ghaziyabad",
"mera wish pura huva sir ab kya karna padega",
"wish karthe samay  yek hi wish karna ghalthi math karna mere first wish fail huva kyu ki 2 wish manga tha, dusre baar try kiya work ho gaya",
"im sikh and i dont trust these nonsese",
"kya ho raha hai ji life changing method hai",
"just send 1, 2 or 3 rs and wish your wish next see the magic wow great",
"i support illuminatu",
"breaking bad series jaisa mere life badal gaya rathorath me",
"finally meri love milgaya",
"muje work ho gaya",
"jyotishy geethishy kuch nahi. is trick try karo friends 100 percent work hoga",
"im lucky now",
"im crying here sir, its working thank you sooooooooooo muchhhh",
"majak nahi hai freinds sach mai work hotha hai",
"WOW GREAT WORKING HAI",
"HI guys",
"any one from madhyapradesh here",
"whatsapp me link aaya first me jut samja, aaj pata chala sirf chota sa trust ke vajese kya kya hotha hai",
"im anounymous guy. i reccomend this trik to all",
"love from nagpur guys",
"mereko work ho gaya patha nahi kitna din work hoga might be myth",
"finally my youtube channel got monetized",
"girls and boys its working yaar",
"work nahi hotha hai",
"exam me 67% se pass hogatha yakin nahi ho raha ji",
"gazab",
"love from south india",
"love from kerala super undo",
"yellarku nandri",
"great work sir",
"radhe radhe jai shree ram",
"jai shree ram jai hanuman jai yogiji",
"vote for congress",
"love for modiji",
"mera nam entry nahi ho raha hai",
"arey yar how is it possible, mere chota sa wish real ho gaya really",
"magic or real i dont know but this helpd be a lot",
"love from nepal"
];

const commentsContainer = document.getElementById("commentsContainer");

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function displayComments() {
  let shuffledComments = shuffleArray(comments); // Shuffle the array of comments
  let index = 0;

  setInterval(() => {
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.textContent = shuffledComments[index];

    commentsContainer.appendChild(commentElement);

    // Remove the first comment when the number of comments exceeds 5
    if (commentsContainer.children.length > 5) {
      commentsContainer.removeChild(commentsContainer.firstElementChild);
    }

    // Move to the next comment or start over if all comments have been shown
    index = (index + 1) % shuffledComments.length;
  }, 2700); // Show comments every 1 second
}




displayComments();




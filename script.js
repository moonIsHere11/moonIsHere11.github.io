const photo_middle = document.querySelector('.start_photo')
const photo_right = document.querySelector('.start_photo1')
const photo_left = document.querySelector('.start_photo0')

photo_right.addEventListener('mouseover', ()=>{
    photo_middle.style.transform = 'scale(0.7)'
});

photo_right.addEventListener('mouseout', ()=>{
     photo_middle.style.transform = 'scale(1)'
})

photo_left.addEventListener('mouseover', ()=>{
    photo_middle.style.transform = 'scale(0.7)'
});

photo_left.addEventListener('mouseout', ()=>{
     photo_middle.style.transform = 'scale(1)'
});


const inputBox = document.getElementById("inputBox");
const warning = document.getElementById("warning");
const resultBox = document.getElementById("result");

const pronouns = new Set(["i", "me", "my", "mine", "myself",
    "you", "your", "yours", "yourself",
    "he", "him", "his", "himself",
    "she", "her", "hers", "herself",
    "it", "its", "itself",
    "we", "us", "our", "ours", "ourselves",
    "they", "them", "their", "theirs", "themselves"]);

const prepositions = new Set([
    "about", "above", "across", "after", "against", "along", "among", "around",
    "at", "before", "behind", "below", "beneath", "beside", "between", "beyond",
    "but", "by", "concerning", "despite", "down", "during", "except", "for",
    "from", "in", "inside", "into", "like", "near", "of", "off", "on", "onto",
    "out", "outside", "over", "past", "regarding", "since", "through",
    "throughout", "till", "to", "toward", "under", "underneath", "until", "up",
    "upon", "with", "within", "without"
  ]);

  const indefiniteArticles = new Set(["a", "an"]);

inputBox.addEventListener("input", () => {
      const text = inputBox.value.trim();
      const words = text.split(/\s+/).filter(word => word.length > 0);
      const count = words.length;

      if (count < 10000) {
        warning.textContent = `Please enter at least 10,000 words. Current: ${count}`;
        resultBox.style.display = "none";
      } else {
        warning.textContent = "";
      }
});

//reset the box 
inputBox.value = ""


const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click",()=>{
    const text = inputBox.value.trim();
    const words = text.split(/\s+/).filter(word => word.length > 0);
    if (words.length < 10000){
        alert("Insufficient words");
        return;
    }
    resultBox.style.display = "block";
    const letters = text.match(/[a-zA-Z]/g);
    const letterCount = letters ? letters.length : 0;

   
    const newlines = text.match(/\n/g);
    const specialChars = text.match(/[^a-zA-Z0-9\s]/g);
    const specialCharCount = specialChars ? specialChars.length : 0;

    console.log(letterCount) //the number of letters 
    document.getElementById('charCount').textContent = letterCount;

    console.log(words.length) //number of words
    document.getElementById('wordCount').textContent = words.length;

    if (newlines === null){
        console.log(0)
        document.getElementById('newLineCount').textContent = 0;
    }
    else {
        console.log(newlines.length) //number of newlines
        document.getElementById('newLineCount').textContent = newlines.length;
    }

    console.log(specialCharCount)
    document.getElementById('specCharCount').textContent = specialCharCount;
    
    //p2
    let pronounCount = 0
    for(const word of words){
        if (pronouns.has(word)) {
            pronounCount++;
        }
    }
    document.getElementById('pronoun_count').textContent = pronounCount;

    let prepCount = 0
    for(const word of words){
        if (prepositions.has(word)) {
            prepCount++;
        }
    }
    document.getElementById('prep_count').textContent = prepCount;
    
    let indefArt_Count = 0
    for(const word of words){
        if (indefiniteArticles.has(word)) {
            indefArt_Count++;
        }
    }
    document.getElementById('indefArt_count').textContent = indefArt_Count;
});


function getTimestamp() {
    return new Date().toLocaleString();
}

function getElementType(el) {
    const tag = el.tagName.toLowerCase();
    if (tag === 'img') return 'image';
    if (tag === 'button') return 'button';
    if (tag === 'input') return 'input field';
    if (tag === 'a') return 'link';
    if (tag === 'p' || tag === 'span' || tag==="h1" || tag==="h2" || tag==="h3") return 'text';
    return tag;
}

window.addEventListener('DOMContentLoaded', () => {
    console.log(`${getTimestamp()} , view , page loaded`);
});

  // Log clicks across the entire document
  document.addEventListener('click', (e) => {
    const clickedElement = e.target;
    const type = getElementType(clickedElement);
    console.log(`${getTimestamp()} , click , ${type}`);
  });



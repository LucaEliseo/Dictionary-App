const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const result = document.getElementById("resultJs");
const sound = document.getElementById("sound");

const btn = document.getElementById('searchBtn');


btn.addEventListener("click", () =>{
    let input = document.getElementById("inputWord").value;
    console.log(input)
    fetch(`${url}${input}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML = ` <div class="word">
        <h3>${input}</h3>
        <button onclick="soundWord()">
          <i class="fas fa-microphone"></i>
        </button>
      </div>
      <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>/ ${data[0].phonetics[1].text} /</p>
      </div>
      <p class="wordMeaning">
       ${data[0].meanings[0].definitions[0].definition}
      </p>
      <p class="wordExample">
     ${data[0].meanings[0].definitions[0].example || "" }
      </p>
    </div>`
    })

});



console.log('hello')

const container = document.querySelector('.container-global'),
    select = container.querySelector('.container-select'),
    select1 = container.querySelector('.container-select div:nth-child(1) p'),
    input_Search = container.querySelector('.container-input input'),
    container_languages = container.querySelector('.container-countrys div'),
    container_countrys = container.querySelector('.container-countrys'),
    container_languages_p = container.querySelectorAll('.container-countrys div p')

console.log(select1)
select.addEventListener('click', e => {
    select.classList.toggle('active')
    select.nextElementSibling.classList.toggle('show')
    docum()
})

function docum(){
    document.addEventListener('click', e => {
    if (e.target.classList.contains('para')) {
        console.log(e.target)
        select.classList.remove('active')
        select.nextElementSibling.classList.remove('show')
    }
})
}


const array = [
    "Arabic",
    "Amharic",
    "Bemba",
    "Bielarus",
    "Bislama",
    "Bajan",
    "Bengali",
    "Tibetan",
    "Breton",
    "Bosnian",
    "Catalan",
    "Coptic",
    "Czech",
    "Welsh",
    "Danish",
    "Dzongkha",
    "German",
    "Maldivian",
    "Greek",
    "English",
    "Spanish",
    "Estonian",
    "Basque",
    "Persian",
    "Finnish",
    "Fanagalo",
    "Faroese",
    "French",
    "Galician",
    "Gujarati",
    "Hausa",
    "Hebrew",
    "Hindi",
    "Croatian",
    "Hungarian",
    "Indonesian",
    "Icelandic",
    "Italian",
    "Japanese",
    "Kazakh",
    "Khmer",
    "Kannada",
    "Korean",
    "Kurdish",
    "Kyrgyz",
    "Latin",
    "Lao",
    "Latvian",
    "Mende",
    "Malagasy",
    "Maori",
    "Malay",
    "Maltese",
    "Burmese",
    "Nepali",
    "Niuean",
    "Dutch",
    "Norwegian",
    "Nyanja",
    "Pakistani",
    "Palauan",
    "Panjabi",
    "Pashto",
    "Pijin",
    "Polish",
    "Portuguese",
    "Kirundi",
    "Romanian",
    "Russian",
    "Sango",
    "Sinhala",
    "Slovak",
    "Samoan",
    "Shona",
    "Somali",
    "Albanian",
    "Serbian",
    "Swedish",
    "Swahili",
    "Tamil",
    "Telugu",
    "Tetum",
    "Tajik",
    "Thai",
    "Tigrinya",
    "Turkmen",
    "Tagalog",
    "Tswana",
    "Tongan",
    "Turkish",
    "Ukrainian",
    "Uzbek",
    "Vietnamese",
    "Wolof",
    "Xhosa",
    "Yiddish",
    "Zulu"
]

array.forEach(items => {
    let options = `<p class="para" onclick="updateSelect(this)">${items}</p>`
    container_languages.insertAdjacentHTML('beforeend', options)
})




function removeBackgound(para){
   console.log(para.parentElement.querySelectorAll('p').forEach(element=>{
    element.classList.remove('background')
   }))
}



function updateSelect(para) {

    removeBackgound(para)
    para.classList.add('background')
    console.log(para)
    select.firstElementChild.querySelector('p').innerText = para.innerText;
    
}






input_Search.addEventListener('keyup', e => {
   
  
    if (input_Search !== "") {
        console.log('tur')
        container_countrys.classList.add('change')
    } else {

        container_countrys.classList.remove('change')
    }
    let value_input = input_Search.value.toLowerCase()//miniscules
    console.log(value_input)

    let arr = []
    arr = array.filter(data => data.toLowerCase().startsWith(value_input))
    console.log(arr)

    arr = arr.map(data =>
        `<p onclick="updateSelect(this)">${data}</p>`
    ).join('')

    console.log(arr)     //if arr has element
   
    container_languages.innerHTML = arr ? arr : `<p class="no" >this Country or this String is not defiend</p>`
     console.log( container_languages.querySelectorAll('p').forEach(element=>{
        element.addEventListener('click',e=>{
            select.classList.remove('active')
            select.nextElementSibling.classList.remove('show')
        })
     }))
    if (container_languages.firstElementChild.classList.contains('no')) {
        console.log('true')
        container_languages.parentElement.style.height = "fit-content"

    } else {
        container_languages.parentElement.style.height = "50vh"
    }

})








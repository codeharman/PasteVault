const linkInput = document.querySelector('.aff-link');
const submitBtn = document.getElementById('link-submit');
const textInput = document.querySelector('.text-input');
const copyBtn = document.getElementById('text-submit');

const STORAGE_KEY = 'pastevault_link'
const TEXT = 'pastevault_text'

const savedKey = localStorage.getItem(STORAGE_KEY)
if(savedKey) {
  linkInput.value = savedKey
}

const savedText = localStorage.getItem(TEXT)
if(savedText) {
  textInput.value = savedText
}


submitBtn.addEventListener('click', () => {
  const linkData = linkInput.value.trim()
  localStorage.setItem(STORAGE_KEY, linkData)
})

copyBtn.addEventListener('click', () => {
  const textData = textInput.value.trim()
  const link = localStorage.getItem(STORAGE_KEY)
  localStorage.setItem(TEXT, textData)
  navigator.clipboard.writeText(`${textData}: ${link}`)
})


import { getAudio, getImg,getJSONpos } from "./utilities.js";
import { getJSON } from "./utilities.js";

export default class Dictionary {
  constructor(firstLang,secondLang,form) {
    this.form = form
    this.firstLang = firstLang;
    this.secondLang = secondLang;
    this.apiKey = 'dict.1.1.20221119T154649Z.309cdaef0c90f0d0.fa7f14bfb09e23316849e3f318248ab4a8d6eb39'
    this.baseUrl = '';
  
  }
  


  async getInfo(word){
    this.baseUrl = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20221119T154649Z.309cdaef0c90f0d0.fa7f14bfb09e23316849e3f318248ab4a8d6eb39&lang=${this.firstLang}-${this.secondLang}&text=${word}`
    this._dict = await getJSON(this.baseUrl)
    return this._dict
  }


  async getPos(word){
    this.baseUrl = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20221119T154649Z.309cdaef0c90f0d0.fa7f14bfb09e23316849e3f318248ab4a8d6eb39&lang=${this.firstLang}-${this.secondLang}&text=${word}`
    this.pos = await getJSONpos(this.baseUrl)
    return this.pos
  }


  async getSound(word){
    this.baseUrlSound = `https://api.dictionaryapi.dev/media/pronunciations/en/${word}-us.mp3`
    this._sound = await getAudio(this.baseUrlSound)
    return this._sound
  }


  async getPhoto(word){
    this.baseUrlPhoto = `https://api.pexels.com/v1/search?query=${word}&per_page=1`
    this._photo = await getImg(this.baseUrlPhoto)
    return this._photo

  }
}
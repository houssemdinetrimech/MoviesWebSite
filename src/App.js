import './App.css';
import React from 'react'
import Header from './Components/Header'
import MovieList from './Components/MovieList';
import AddModal from './Components/AddModal'
import {useState} from 'react';

function App() {
  const [film,setFilm]=useState([{ 
    name:"The Man Who Sold ",
    image:"https://i.egycdn.com/pic/WmFwZndlY21Zam1qbXBtbWptakVjY05kVHZjTmptbkk.jpg",
    description: "His own body turned into a living work of art and promptly exhibited in a museum.",
    url:"https://asla.egybest.bid/movie/the-man-who-sold-his-skin-2020/?ref=movies-p1",
    rating:'4'

  },
  {
    name:"Fresh ",
    image:"https://i.egycdn.com/pic/WmFwZndlY212bXBZRW1idmNtZWN3VElQbWJtZFR6UA.jpg",
    description:"The horrors of modern dating seen through one young woman's defiant battle .",
    url:"https://asla.egybest.bid/movie/fresh-2022/?ref=search-p1",
    rating:'5'
    
  },
  {
    name:"The Aftermath",
    image:"https://img.moviesjoy.to/resize/188x288/c2/19/c2191873b8a2fc677c047584ae2df6f0/c2191873b8a2fc677c047584ae2df6f0.jpg",
    description:" A young man named Darwin lives, in a small cement module with little more than",
    url:"https://moviesjoy.to/movie/2149-the-aftermath-69790",
    rating:'4'

  },
  {
    name:"Good By Honey",
    image:"https://img.moviesjoy.to/resize/188x288/be/20/be208bd9ffd2ed045830848359db0319/be208bd9ffd2ed045830848359db0319.jpg",
    description:" A frantic crazy woman must coerce an exhausted truck driver to hide in the back  ",
    url:"https://moviesjoy.to/movie/goodbye-honey-69798",
    rating:'5'

  },
  {
    name:"Siccin 2",
    image:"https://i.egycdn.com/pic/WmFwZndlY21MTllUYm1hY21tYW12YXdUam12eA.jpg",
    description:"A woman finds her child killed after the jinn dropped a closet on him in the house. ",
    url:"https://ww.egybest.bid//movie/siccin-2-2015/",
    rating:'2'

  },
  {
    name:"Burning Lies",
    image:"https://img.moviesjoy.to/resize/188x288/11/ea/11eac8ffb567896f7d7072e5a2fc0792/11eac8ffb567896f7d7072e5a2fc0792.jpg",
    description:" A woman falls for a handsome firefighter after he rescues her from a suspicious car crash. ",
    url:"https://moviesjoy.to/movie/burning-lies-69793",
    rating:'4'

  },
  {
    name:"Orphan: First Kill",
    image:"https://i.egycdn.com/pic/WmFwZndlY212dmNtYm1FbUVtYm1tRWNtam1qdmNtbW1ibW12Tmc.jpg",
    description:"Esther succeeds in executing a genius escape from a psychiatric clinic in Estonia",
    url:"https://asla.egybest.bid/movie/orphan-first-kill-2022/",
    rating:'3'

  },
  {
    name:"777 Charlie",
    image:"https://i.egycdn.com/pic/WmFwZndlY212dmNtdnZOYm1qbWJFY21tbVRibXBwbW1URQ.jpg",
    description:" The work deals with the story of a young man who leads a bad and negative lifestyle . ",
    url:"https://asla.egybest.bid/movie/777-charlie-2022/?ref=search-p1",
    rating:'5'

  },

])
const add=(newMovie)=>{
  setFilm(film=>([...film,newMovie]))
  console.log(newMovie)
 
}
const [text, settext] = useState('')
const [rate, setrate] = useState('1')


const searchtext=(text)=>{
settext(text)
}
const searchrate=(rate)=>{
  setrate(rate)
  }
  return (
    <div>
        <div className="App">
    <Header searchtext={searchtext} searchrate={searchrate}/>
    <MovieList film={film} text={text} rate={rate}/>
    <AddModal add={add}/>
 
    </div>
    </div>
  )
}

export default App


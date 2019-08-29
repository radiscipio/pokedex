# PokeDex Project Overview
__________________________

![Banner](https://res.cloudinary.com/radiscipio/image/upload/v1566587281/Pokemon%20Banner.jpg)
</br>
![gif](https://media.giphy.com/media/7T200DTPdx31e/giphy.gif)
![gif](https://media.giphy.com/media/7T200DTPdx31e/giphy.gif)
![gif](https://media.giphy.com/media/7T200DTPdx31e/giphy.gif)


## Description

 For this project, I will be building a working Pokedex for the 1st generation of Pokemon (151 characters). I grew up playing these games with my brother, so it seemed fitting that I did a project that payed homage to it. </br>

## Wireframes

They're color coded!</br>
  [Link 1](https://res.cloudinary.com/radiscipio/image/upload/v1566589661/gfyuofjliehxwin4cypd.jpg)</br>
  [Link 2](https://res.cloudinary.com/radiscipio/image/upload/v1566589661/cvoocicna4whko7exqkc.jpg)</br>
  [Link 3](https://res.cloudinary.com/radiscipio/image/upload/v1566589661/cnl4ywzjsoi3zx3ezfab.jpg)</br>
  [Link 4](https://res.cloudinary.com/radiscipio/image/upload/v1566589661/kf7tu04hdbbesgdkuapd.jpg)</br>

## API Info
  This is a RESTful Pokemon API that pulls data from all Pokemon currently created. </br>
[Link to API](https://pokeapi.co/)</br>
[Sample API](https://pokeapi.co/api/v2/pokemon?limit=151)</br>

## MVP/ Post MVP

#### MVP
- Render data onto screen
- Allow user to interact with rendered components
- Save a favorite group of 6 Pokemon
- View all Pokemon

#### Post MVP

- Add in all the other Pokemon
- Save multiple teams
- Create data data structure to see all the branches of evolved forms for the Pokemon
- Add effects to the items when they are active

## React Component Hierarchy
[Hierarchy](https://res.cloudinary.com/radiscipio/image/upload/v1566589661/gfyuofjliehxwin4cypd.jpg)
</br>

## Est. Time

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| :--- | :---: |  :---: | :---: | :---: |
|Planning| High | 6 Hours | 7 Hours |
| Header | High | 2 Hours | 2 Hours |
| Main | High | 3 Hours | 4 Hours |
| Card | High | 4 Hours | 2 Hours |
| Styling | High | 6-7 Hours | 7-8 Hours |
| View All | High | 4 Hours | 3 Hours |
| Team | Medium | 3 Hours | 8 Hours |
| Konami Code | Low | 2 Hours | 1 |
| Total: | ---- | 27~ Hours| 33-34 Hours |

## Code Snippet

```js
results": [
{
"name": "charmander",
"url": "https://pokeapi.co/api/v2/pokemon/4/"
},
{
"name": "charmeleon",
"url": "https://pokeapi.co/api/v2/pokemon/5/"
},
{
"name": "charizard",
"url": "https://pokeapi.co/api/v2/pokemon/6/"
}
```

## Errors & Resolutions

  One of the biggest errors I had was moving the added Pokemon into the My Team page.
  This was resolved because I had a lot of help from my IA's David Whitlatch and Soleil Solomon. They both helped me figure out the process of changing the state of the component, and saving the data to local storage so I can render it in the correct page.

  A small error that I had was that when I would click on the My Team link while in the My Team page, it would redirect me to a page that didn't exist. I fixed this by

  I wanted to add in a secret easter egg for people that entered in a certain set of keyboard keys, but I wasn't able to figure it out, I do want to come back to that eventually

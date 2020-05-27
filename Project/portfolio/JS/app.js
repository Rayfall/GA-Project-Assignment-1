console.log("App.js is connected.");
/* IMPORT GOOGLE SHEET AS JSON
  1. Create a new google sheet - Done
  2. Add the needed column names - Done
  3. Share the google sheet - Done
  4. Publish the google sheet - Done
  5. Grab the ID from the shared google sheet - Done
     ex: 'https://docs.google.com/spreadsheets/d/15PmioBi2dQEkewpqI7MDkDpvcVF0Trw8vmarAQbwoHk/edit?usp=sharing'
     id = '15PmioBi2dQEkewpqI7MDkDpvcVF0Trw8vmarAQbwoHk'
  6. Add ID to the following url: - Done
     ex: `https://spreadsheets.google.com/feeds/list/ID GOES HERE/od6/public/values?alt=json`
  7. Use fetch to pull the data as json
  8. Loop over the data and create a new object for each element in the array with new key names
*/

let url = "https://docs.google.com/spreadsheets/d/1GV9cCJvJgPMX6nv2SFlIkL6UA6clT0k8na7NHg-3ZSQ/edit#gid=0";

let id = "1GV9cCJvJgPMX6nv2SFlIkL6UA6clT0k8na7NHg-3ZSQ";

let source = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`;
// let source = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`

// ES6 - fetch

// fetch queries the url provided and requests that the data be sent to it 
// it receives JSON => JS Object Notation
// we use .json() to parse the data from "{}" to an full blown {}
fetch(source)
  .then( response => response.json() ) // this parses the data from string back into an object
  .then( data =>  {
      console.log('data', data)
      // data.feed.entry is the array that stores our projects
      // the projects are stored as objects
      let projects = data.feed.entry.map( project => {
        // console.log('project', project.gsx$title.$t)
        return {
          title: project.gsx$title.$t,
          image: project.gsx$image.$t,
          description: project.gsx$description.$t,
          url: project.gsx$url.$t
        }
      })
      app(projects)
  })
  .catch( err => console.log('err', err))

function app(projects) {
  console.log('app - projects', projects)


//   creates the gallery
  function createMyProjects(){
    for(let i =0; i < projects.length; i++){
        let $div = $(`
        <div class="content">
          <h3>${projects[i].title}</h3>  
          <a href=${projects[i].url}>                
            <img width="80%" height="250" src=${projects[i].image} alt=${projects[i].title} class="container_img">
            <p>${projects[i].description}</p>
          </a>
        </div>`)

        $('.container_content_inner').append($div)
    }
  }
  createMyProjects()
}
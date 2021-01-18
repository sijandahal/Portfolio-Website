var scroll = new SmoothScroll('a[href*="#"]');

fetch("https://api.github.com/users/sijandahal")
  .then(response => response.json())
  .then(function (data) {
    document.querySelector('.name').textContent = data['name'];
    document.querySelector('.githubimage').src = data['avatar_url']
    document.querySelector('.bio').textContent = data['bio'];
    document.querySelector('.following').textContent += data['following'];
    document.querySelector('.followers').textContent += data['followers'];
    document.querySelector('.repos').textContent += data['public_repos'];
    document.querySelector('.githubrepos').href = data['html_url']
    console.log(data);
  })


  
   fetch("https:api.github.com/users/sijandahal/repos?per_page=100&page=1")
   .then(response => response.json())
   .then(function (data) {
      const arrayValues = data;
      console.log(arrayValues);
   
      data.forEach(item => {
            listrepos = document.createElement('ul');
            document.getElementById('github').appendChild(listrepos);
               listItemRepo = document.createElement('li')
               listrepos.appendChild(listItemRepo);
               hlink = document.createElement('a');
               listItemRepo.appendChild(hlink);
               hlink.textContent = `${item.name}`
               hlink.href = item.html_url;
               hlink.target = '_blank';
           });


   })



 


//   user = 'sijandahal'
//   apirepo = `https://api.github.com/users/${user}`
  
// listrepos = document.createElement('ul')
//   document.getElementById('github').appendChild(listrepos)
//   $.getJSON(apirepo + '/repos', function (data) {
//       console.log('data now', data)

//       function compare(a, b) {
//           if (a.watchers > b.watchers) {
//               return -1
//           }
//           if (a.watchers < b.watchers) {
//               return 1
//           }
//           return 0
//       }

//       data.sort(compare)
//       data.forEach(v => {

//           listItemRepo = document.createElement('li')
//           listrepos.appendChild(listItemRepo)
//           hlink = document.createElement('a')
//           listItemRepo.appendChild(hlink)
//           hlink.textContent = `${v.description} | Stars: ${v.watchers}`
//           hlink.href = v.html_url
//       })
//   })
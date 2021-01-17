var scroll = new SmoothScroll('a[href*="#"]');

fetch ("https://api.github.com/users/sijandahal")
.then(response => response.json())
.then(function(data) {
  document.querySelector('.name').textContent =  data['name'];
  document.querySelector('.githubimage').src = data['avatar_url']
  document.querySelector('.bio').textContent = data['bio'];
  document.querySelector('.following').textContent += data['following'];
  document.querySelector('.followers').textContent += data['followers'];
  document.querySelector('.repos').textContent += data['public_repos'];
  document.querySelector('.githubrepos').href = data['html_url']
  console.log(data);
})
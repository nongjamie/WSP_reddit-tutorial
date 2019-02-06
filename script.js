// Sathira Kittisukmongkol 5910545868 

function vote() {
  let votes = document.getElementById('votes');
  let count = parseInt(votes.innerHTML);
  count++;
  votes.innerHTML = count;
}

function votedown() {
  let votes = document.getElementById('votes');
  let count = parseInt(votes.innerHTML);
  count--;
  votes.innerHTML = count;
}

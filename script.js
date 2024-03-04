const footer = document.querySelector('footer');
let compteur = 1;
footer.addEventListener('click', function() {
    console.log('clic numéro ' + compteur);
    compteur++;
});
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarHeader = document.getElementById('navbarHeader');
navbarToggle.addEventListener('click', function() {
    navbarHeader.classList.toggle('collapse');
});
const firstCard = document.querySelectorAll('.card')[0];
//console.log(firstCard);
const editButton = firstCard.querySelector('.btn-outline-secondary');
editButton.addEventListener('click', function() {
    firstCard.style.color = 'red';
});
const secondaryCard = document.querySelectorAll('.card')[1];
//console.log(secondaryCard);
const editButtonSecondary = secondaryCard.querySelector('.btn-outline-secondary');
editButtonSecondary.addEventListener('click', function() {
    if (secondaryCard.style.color === 'green') {
    secondaryCard.style.color ='';
    } else {
    secondaryCard.style.color = 'green';
    }
});
const navbar = document.querySelector('.navbar');
function toggleBootstrap() {
    const bootstrapLink = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]');
    bootstrapLink.disabled = !bootstrapLink.disabled;
}
navbar.addEventListener('dblclick', function() {
    toggleBootstrap();
});

const viewButtons = document.querySelectorAll('.btn-success');
viewButtons.forEach(button => {
    button.addEventListener('mouseover', function() {
        const card = button.closest('.card');
        const isReduced = card.classList.contains('reduced');
        if (isReduced) {
            card.style.transform = 'scale(1)';
            card.querySelector('.card-text').classList.remove('d-none');
            card.classList.remove('reduced');
        } else {
            card.style.transform ='scale(0.2)';
            card.querySelector('.card-text').classList.add('d-none');
            card.classList.add('reduced');
        }
    });
});

const shuffleButtonright = document.querySelector('.btn-secondary');
shuffleButtonright.addEventListener('click', function() {
    const lastCard = document.querySelector('.album .row').lastElementChild;
    const cardContainer = document.querySelector('.album .row');
    cardContainer.insertBefore(lastCard, cardContainer.firstElementChild);
});

const shuffleButtonleft = document.querySelector('.btn-primary');
shuffleButtonleft.addEventListener('click', function(event) {
    event.preventDefault();
    const firstCard = document.querySelector('.album .row').firstElementChild;
    const cardContainer = document.querySelector('.album .row');
    cardContainer.appendChild(firstCard);
});
const movies = [
    {
      name: "Avatar: Fire and Ash",
      description: "The latest chapter in the Avatar saga, following the Sully family as they face renewed threats on Pandora in a visually spectacular sci-fi adventure.",
      category: ["Sci-Fi", "Adventure", "Action"],
      rating: 8.1,
      image: "assets/images/movies/avatar_fire_and_ash.jpg"
    },
    {
      name: "Zootopia 2",
      description: "Judy Hopps and Nick Wilde return to crack a major criminal case in a lively, record-breaking animated sequel praised for its humor and heart.",
      category: ["Animation", "Family", "Comedy"],
      rating: 8.4,
      image: "assets/images/movies/zootopia2.jpg"
    },
    {
      name: "Superman",
      description: "A new DC Universe takes flight as Clark Kent navigates life in Metropolis while battling a powerful foe in this modern superhero reboot.",
      category: ["Superhero", "Action", "Sci-Fi"],
      rating: 7.1,
      image: "assets/images/movies/superman.jpg"
    },
    {
      name: "Sinners",
      description: "A genre-blending supernatural horror set in the Mississippi Delta, starring Michael B. Jordan in a dual role confronting dark forces and family legacies.",
      category: ["Superhero", "Action", "Sci-Fi"],
      rating: 7.5,
      image: "assets/images/movies/sinners.jpg"
    },
    {
      name: "Jurassic World: Rebirth",
      description: "The dinosaurs are back in a thrilling new chapter of the Jurassic franchise, mixing action and awe in globe-trotting adventure.",
      category: ["Action", "Adventure", "Sci-Fi"],
      rating: 7.3,
      image: "assets/images/movies/jurassic_world_rebirth.jpg"
    },
    {
      name: "Mission: Impossible – The Final Reckoning",
      description: "Ethan Hunt and his IMF team face their toughest mission yet in this action-packed finale of the long-running spy franchise.",
      category: ["Action", "Thriller", "Spy"],
      rating: 7.8,
      image: "assets/images/movies/mission_impossible.jpg"
    },
    {
      name: "The Rip",
      description: "A high-stakes Netflix crime thriller following Miami cops navigating betrayal and buried cash in a tense cat-and-mouse story.",
      category: ["Crime", "Thriller", "Drama"],
      rating: 7.0,
      image: "assets/images/movies/the_rip.jpg"
    },
    {
      name: "Send Help",
      description: "A survival thriller about two plane-crash survivors stranded on a remote island, forced to rely on each other to stay alive.",
      category: ["Thriller", "Survival", "Drama"],
      rating: 7.2,
      image: "assets/images/movies/send_help.jpg"
    },
    {
      name: "Avengers: Doomsday",
      description: "The MCU’s epic return featuring Earth’s Mightiest Heroes facing an apocalyptic threat that could end reality as they know it.",
      category: ["Superhero", "Action", "Sci-Fi"],
      rating: 8.5,
      image: "assets/images/movies/avengers_doomsday.jpg"
    },
    {
      name: "Project Hail Mary",
      description: "A hard-science sci-fi adaptation starring Ryan Gosling as a lone astronaut on a desperate mission to save Earth from extinction.",
      category: ["Sci-Fi", "Drama", "Adventure"],
      rating: 8.0,
      image: "assets/images/movies/project_hail_mary.jpeg"
    },
    {
      name: "Toy Story 5",
      description: "Woody, Buzz and the gang embark on another emotional journey as the beloved Pixar franchise continues.",
      category: ["Animation", "Family", "Adventure"],
      rating: 8.0,
      image: "assets/images/movies/toy_story_five.jpg"
    },
    {
      name: "The Odyssey",
      description: "A large-scale cinematic retelling of Homer’s epic, following Odysseus on his perilous journey home after the Trojan War.",
      category: ["Epic", "Adventure", "Drama"],
      rating: 7.7,
      image: "assets/images/movies/the_odyssey.jpg"
    }
  ];
  const filterBtns = [
    { text: "All", data: "all" },
    { text: "Action", data: "action" },
    { text: "Sci-fi", data: "sci-fi" },
    { text: "Drama", data: "drama" },
    { text: "Thriller", data: "thriller" },
    { text: "Comedy", data: "comedy" },

  ]
  const navLinks = [
    { text: "Home", href: "index.html"},
    { text: "About Us", href:"index.html#about"},
    { text: "Movies", href: "index.html#movies"},
    { text: "Review", href: "index.html#review-anchor" },
    { text: "Author", href: "/author.html" },
    { icon: "bi bi-file-earmark-text", href: "#" },
    { icon: "bi bi-download", href: "#" }
  ];
  const footerLinks = [
    { text: "Home", href: "index.html"},
    { text: "Movies", href: "index.html#movies"},
    { text: "Review", href: "index.html#review-anchor" },
    { text: "Author", href: "/author.html" }
  ]
////////////////////
////////////////////
// RENDEROVANJE NAVIGACIONIH LINKOVA
const navList = document.querySelector('.navbar-nav');
navLinks.forEach(link => {
  const li = document.createElement('li');
  li.className = 'nav-item';

  const a = document.createElement('a');
  a.className = 'nav-link';
  a.href = link.href;

  if(link.icon){
    a.innerHTML = `<i class='${link.icon} fs-4'></i>`
  }else {
    a.textContent = link.text;
  }

  a.addEventListener('click', (e) => {
    document.querySelectorAll('.nav-link').forEach(navLink => {
      navLink.classList.remove('accent-color-secondary');
    });
    a.classList.add('accent-color-secondary');
  });

  li.appendChild(a);
  navList.appendChild(li);
})

const footerNav = document.querySelector('.quick-links');
footerLinks.forEach(link => {
  const li = document.createElement('li');
  li.className = 'nav-item';

  const a = document.createElement('a');
  a.className = 'nav-link';
  a.href = link.href;
  a.textContent = link.text;

  li.appendChild(a);
  footerNav.appendChild(li);
})

// EKSPANDIRAJUCI TEKST
document.querySelectorAll('.expand-btn').forEach(button => {
  button.addEventListener('click', () => {
    const content = document.getElementById(button.dataset.target);
    const text = button.querySelector('.expand-text');

    const isOpen = content.classList.contains('expanded');

    document.querySelectorAll('.about-content').forEach(c => {
      c.classList.remove('expanded');
    });

    document.querySelectorAll('.expand-btn').forEach(b => {
      b.classList.remove('is-expanded');
      b.querySelector('.expand-text').textContent = 'Read More';
    });

    if (!isOpen) {
      content.classList.add('expanded');
      button.classList.add('is-expanded');
      text.textContent = 'Read Less';
    }
  });
});

// RENDEROVANJE DUGMICA ZA FILTEROVANJE
  const buttonWrapper = document.querySelector('.filter-buttons');

  if(buttonWrapper){
    filterBtns.forEach(btn => {
      const button = document.createElement('button');
      button.className = 'filter-btn rounded-pill'
      button.textContent = btn.text;
      button.dataset.category = btn.data;
      if (button.dataset.category === 'all') {
        button.classList.add('active');
      }

      buttonWrapper.appendChild(button);
    })
}

// RENDEROVANJE MOVIE KARTICA
const container = document.getElementById('movie-card-wrapper');
if(container){
  function renderMovies(moviesToRender){
    container.innerHTML = '';
  
    moviesToRender.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.className = 'col-lg-4 col-sm-6 movie-card';
      movieCard.style.backgroundImage = `linear-gradient(180deg,rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.8) 55%, rgba(0, 0, 0, 1) 90%), url('${movie.image}')`;
      movieCard.innerHTML = `
      <div class="card-content">
          <h1 class="movie-title">${movie.name}</h1>
          <p class="movie-description">${movie.description}</p>
        </div>
        <div class="card-footer">
          <button class="trailer-btn">Watch trailer</button>
          <div class="rating-container">
            <span class="rating-value"><i class="bi bi-star-fill"></i>${movie.rating}</span>
          </div>
        </div>
      </div>
      `;
      container.appendChild(movieCard);
    })
  }
  renderMovies(movies);
}
//FILTRIRANJE PO KATEGORIJAMA 
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(button => button.classList.remove('active'));
    button.classList.add('active');

    const category = button.dataset.category;
    if (category === 'all') {
      renderMovies(movies);
    } else {
      const filtered = movies.filter(movie => movie.category.some(cat => cat.toLowerCase() === category.toLowerCase()));
      renderMovies(filtered);
    }
  });
});

//VALIDACIJA FORME
const form = document.getElementById('reviewForm');
if(form){
  const fullNameRegex = /^[A-ZČĆĐŠŽ][a-zčćđšž]{2,10}\s[A-ZČĆĐŠŽ][a-zčćđšž]{3,12}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const reviewRegex = /^.{10,200}$/;

  function validateName(){
    const name = document.getElementById('name');
    const error = document.getElementById('nameError');
    const value = name.value.trim();
  
    if(value === ''){
      error.textContent = 'Name is required';
      name.classList.add('invalid');
      return false;
    }
  
    if (!fullNameRegex.test(value)) {
      error.textContent = 'Example: Joe Smith';
      name.classList.add('invalid');
      return false;
    }
    error.textContent = '';
    name.classList.remove('invalid');
    return true;
  }
  
  function validateEmail() {
    const email = document.getElementById('email');
    const error = document.getElementById('emailError');
    const value = email.value.trim();
    
    if(value === ''){
      error.textContent = 'Email is required';
      email.classList.add('invalid');
      return false;
    }
  
    if (!emailRegex.test(value)) {
      error.textContent = 'Example: email@example.com';
      email.classList.add('invalid');
      return false;
    }
    error.textContent = '';
    email.classList.remove('invalid');
    return true;
  }
  
  function validateRating() {
    const rating = document.getElementById('movieRating');
    const error = document.getElementById('ratingError');
    
    if (rating.value === '') {
      error.textContent = 'Please select a rating';
      rating.classList.add('invalid');
      return false;
    }
    error.textContent = '';
    rating.classList.remove('invalid');
    return true;
  }
  
  function validateRecommend() {
    const recommend = document.querySelector('input[name="recommend"]:checked');
    const error = document.getElementById('recommendError');
    
    if (!recommend) {
      error.textContent = 'Please select an option';
      return false;
    }
    
    error.textContent = '';
    return true;
  }
  
  function validateLiked() {
    const checkedBoxes = document.querySelectorAll('input[name="liked"]:checked');
    const error = document.getElementById('likedError');
  
    if (checkedBoxes.length === 0) {
      console.log('Setting error message for liked');
      error.textContent = 'Please select at least one option';
      return false;
    }
    
    error.textContent = '';
    return true;
  }
  
  function validateReview() {
    const review = document.getElementById('review');
    const error = document.getElementById('reviewError');
    const value = review.value.trim();

    if(value === ''){
      error.textContent = 'Review is required';
      review.classList.add('invalid');
      return false;
    }
  
    if (!reviewRegex.test(value)) {
      error.textContent = 'Review must be between 10-200 characters';
      review.classList.add('invalid');
      return false;
    }
    
    error.textContent = '';
    review.classList.remove('invalid');
    return true;
  }
  
  document.getElementById('name').addEventListener('blur', validateName);
  document.getElementById('email').addEventListener('blur', validateEmail);
  document.getElementById('movieRating').addEventListener('change', validateRating);
  document.getElementById('review').addEventListener('blur', validateReview);
  const recommendRadios = document.querySelectorAll('input[name="recommend"]');
  recommendRadios.forEach(radio => {
    radio.addEventListener('change', validateRecommend);
  });
  const likedCheckboxes = document.querySelectorAll('input[name="liked"]');
  likedCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', validateLiked);
  });
  
  document.getElementById('name').addEventListener('input', function() {
    if (this.value.trim() !== '') validateName();
  });
  document.getElementById('email').addEventListener('input', function() {
    if (this.value.trim() !== '') validateEmail();
  });
  document.getElementById('review').addEventListener('input', function() {
    if (this.value.trim() !== '') validateReview();
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    let isValid = true;
  
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = '';
  
    if (!validateName()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validateRating()) isValid = false;
    if (!validateRecommend()) isValid = false;
    if (!validateLiked()) isValid = false;
    if (!validateReview()) isValid = false;
    
    if (isValid) {
      successMessage.textContent = '✓ Thank you for your review! Your submission was successful.';
  
      form.reset();
  
      document.querySelectorAll('.error-message').forEach(error => error.textContent = '');
      document.querySelectorAll('.invalid').forEach(field => field.classList.remove('invalid'));
    } else {
      console.log('Doslo je do greske');
    }
  });
}
////////////////////
////////////////////
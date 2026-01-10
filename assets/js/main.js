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
  const navLinks = [
    { text: "Home", href: "#", active: true },
    { text: "Movies", href: "#movies"},
    { text: "Contact", href: "#contact" },
    { text: "Author", href: "/author.html" },
    { icon: "bi bi-file-earmark-text", href: "#" },
    { icon: "bi bi-download", href: "#" }
  ];
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


// RENDEROVANJE MOVIE KARTICA
const container = document.getElementById('movie-card-wrapper');
const filterButtons = document.querySelectorAll('.filter-btn');

function renderMovies(moviesToRender){
  container.innerHTML = '';

  moviesToRender.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.className = 'col-xl-3 col-lg-4 col-sm-6 movie-card';
    movieCard.style.backgroundImage = `linear-gradient(180deg,rgba(0, 0, 0, 0) 14%, rgba(0, 0, 0, 0.63) 50%, rgba(0, 0, 0, 0.9) 90%), url('${movie.image}')`;
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

//FILTRIRANJE PO KATEGORIJAMA 
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(button => button.classList.remove('active'));
    button.classList.add('active');

    const category = button.dataset.category;
    if (category === 'all') {
      renderMovies(movies);
    } else {
      const filtered = movies.filter(movie => movie.category.some(cat => cat.toLowerCase() === category.toLowerCase()));
      console.log(filtered)
      renderMovies(filtered);
    }
  });
});
////////////////////
////////////////////
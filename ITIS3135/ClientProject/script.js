// Select the HOME link
const homeLink = document.querySelector('header div.dropdown a');

homeLink.addEventListener('click', (event) => {
  event.preventDefault();

  // Navigate to the homepage
  window.location.href = 'index.html';
});


//index.html
document.addEventListener('DOMContentLoaded', function() {
  const teslaBox = document.querySelector('.box1');
  const mustangBox = document.querySelector('.box2');
  const priusBox = document.querySelector('.box3');
  const m5Box = document.querySelector('.box4');
  const performanceContainer = document.querySelector('.performance');

  function updatePerformance(carType) {
      switch (carType) {
          case 'Tesla':
              performanceContainer.innerHTML = `
                  <h1>Tesla Model S (Electric Vehicle)</h1>
                  <p>The quiet operation of an electric car adds a sense of tranquility to the ride, allowing me to enjoy the journey without the noise of a traditional engine. Inside, the modern interior and advanced technology features create a futuristic atmosphere, with intuitive controls and connectivity options enhancing the driving experience. Electric cars are not just eco-friendly; they're also performance-oriented, with impressive acceleration and handling characteristics that rival traditional combustion engines. What sets electric cars apart is their sustainability and efficiency, offering a clean and responsible way to travel without compromising on performance. Overall, driving an electric car feels like embracing the cutting-edge of automotive innovation, where every drive is not just a commute but a step towards a greener and smarter future.</p>
                  `;
                performanceContainer.style.height = '45vh';
              break;
          case 'Mustang':
              performanceContainer.innerHTML = `
                  <h1>Ford Mustang GT (Muscle Car)</h1>
                  <p>Driving a muscle car is an exhilarating experience that's all about power and precision. The moment I hit the accelerator, the engine roars to life, propelling me forward with thrilling acceleration. The agile handling and responsive steering make every twist and turn on the road feel like a dance, as if the car is an extension of my own body. Inside, the cockpit is designed for performance, with sporty seats and advanced technology enhancing the driving experience. Sports cars are not just about speed; they're about the connection between driver and machine, creating an immersive and adrenaline-pumping ride. What I love about sports cars is their ability to turn every drive into a thrilling adventure, whether it's a scenic route or a spirited track session. Overall, driving a sports car feels like embracing the ultimate blend of performance and passion, making every journey unforgettable.</p>
                  `;
              performanceContainer.style.height = '45vh';

              break;
          case 'Prius':
              performanceContainer.innerHTML = `
                  <h1>Toyota Prius (Hybrid Vehicle)</h1>
                  <p>Driving a hybrid car is a modern and eco-conscious experience that seamlessly blends efficiency with performance. As I start the engine, the transition between electric and gasoline power is seamless, providing a quiet and smooth ride that's both fuel-efficient and environmentally friendly. The regenerative braking system captures energy during deceleration, further enhancing the car's efficiency. Inside, the hybrid technology is seamlessly integrated, with intuitive displays showing real-time energy usage and driving modes that optimize performance based on driving conditions. Hybrid cars offer the best of both worlds, combining the range and convenience of a gasoline engine with the eco-friendly benefits of electric power. What I find compelling about hybrid cars is their commitment to sustainability without compromising on performance or comfort. Overall, driving a hybrid car feels like embracing a greener and more responsible way of getting around, where every mile driven contributes to a cleaner and brighter future. </p>             `;
              break;
              performanceContainer.style.height = '45vh';

          case 'M5':
              performanceContainer.innerHTML = `
                  <h1>BMW M5 (Luxury Performance Sedan)</h1>
                  <p>Driving a luxury car is a sophisticated and indulgent experience that redefines the way I perceive the road. From the moment I settle into the plush seats, surrounded by premium materials and exquisite craftsmanship, I feel enveloped in luxury. The refined engine purrs to life with effortless power, providing a smooth and serene ride that cocoon me from the outside world. Inside, the attention to detail is impeccable, with advanced technology seamlessly integrated into the luxurious cabin, creating a harmonious blend of comfort and convenience. Luxury cars are not just about opulence; they're about elevating the driving experience to a level of refinement and exclusivity. What I appreciate most about luxury cars is their ability to combine performance with sophistication, delivering a driving experience that's both exhilarating and refined. Overall, driving a luxury car feels like indulging in a premium lifestyle, where every aspect of the journey is crafted to perfection, making each drive a true pleasure.</p>
                  `;
              break;
              performanceContainer.style.height = '45vh';

          default:
              performanceContainer.innerHTML = `
              <h2>PERFORMANCE OVERVIEW</h2>
              <h4>A car's performance typically refers to its ability to accelerate, reach high speeds, handle well on different road conditions, and maintain stability and control during driving maneuvers</h4>
              <p>There are various types of cars, and along with their build, their performance is what differentiates them from each other. On the right are examples of four different types out of the many. <br><br> Car's performance is defined by their features and adaptability which sets its core in their engines. <br><br> For an electric vehicle, the engine is powered by an electric motor or battery; which means that it doesn't require a fuel, rather a battery that would need to be charged overnight. A hybrid car however is powered by an electric motor and a fuel source; once the battery is about to die, the engine will switch to fuel mode while the battery charges during no-motion. <br><br> For a muscle car, the engine is powered by a gas or diesel engine. The gas engine is more efficient than the diesel engine. A luxury car's engine usually depends on the fuel type, it can have a fuel engine or electric.</p>
              <p>There are various types of engines:

                  <ul>
                      <li><b>A v4 Engine/  4-Cyls:</b>  are relatively rare in modern cars. They were more common in older vehicles and some motorcycles. Due to their compact size, they were used in smaller cars and motorcycles, hence their good fuel-efficieny.</li>
                      <li><b>A v6 Engine / 6-Cyls:</b>  offers a balance between power and fuel efficiency. Commonly used in mid-sized sedans, SUVs, and some sports cars. Muscle cars usually have v6 or v8s. </li>
                      <li><b>A v8 Engine / 8-Cyls::</b> is known for higher power and torque output. Commonly used in larger vehicles, high-performance cars, and trucks for towing capacity and acceleration. v8s can however consume more fuel due to their larger cylinders.</li>
                      <li>Cars can usually go up to v10s and v12s, however those are built to produce more power and torque for higher speeds, consuming more fuel. Cars get modified to fit people's needs and desires, therefore is isn't necessary to use v4 engines in small cars, it all depends on the modifier.</li>
                  </ul>
              </p>
              <h3>Click on any of the cars on the right to see their car type's performance data.</h3>
              `;
              break;
      }
  }

  // Event listeners for clicking on car boxes
  teslaBox.addEventListener('click', function() {
      updatePerformance('Tesla');
  });

  mustangBox.addEventListener('click', function() {
      updatePerformance('Mustang');
  });

  priusBox.addEventListener('click', function() {
      updatePerformance('Prius');
  });

  m5Box.addEventListener('click', function() {
      updatePerformance('M5');
  });
});





//history.html table of contents
document.addEventListener("DOMContentLoaded", function () {
  const tocLinks = document.querySelectorAll(".TOCtext a");
  tocLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
          event.preventDefault(); 
          const targetId = this.getAttribute("href").substring(1); 
          const targetElement = document.getElementById(targetId); 
          if (targetElement) {
              document.querySelectorAll(".historyText").forEach((elem) => {
                  elem.classList.add("hidden");
              });
              targetElement.classList.remove("hidden");
          }
      });
  });
});


let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");

function showSlide(index) {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Display the selected slide
    slides[index].style.display = "block";
}

// Initial call to show the first slide
showSlide(slideIndex);

// move to the next slide
function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Reset to the first slide if at the end
    }
    showSlide(slideIndex);
}

// Function to move to the previous slide
function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Go to the last slide if at the beginning
    }
    showSlide(slideIndex);
}

// Event listeners for the navigation buttons
document.querySelector(".prev").addEventListener("click", prevSlide);
document.querySelector(".next").addEventListener("click", nextSlide);

//form quiz 
function check(question, answer){
  if(answer === "wrong"){
      document.getElementById("result").innerHTML = "Incorrect! Try again";
  }
  else{
      document.getElementById("result").innerHTML = "Correct!";
  }
}


//features
function navigateToFront(){
  window.location.href="features1.html";
}
function navigateToRear(){
  window.location.href="features2.html";
}
function navigateToInterior(){
  window.location.href="features3.html";
}



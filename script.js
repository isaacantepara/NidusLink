const siteData = {
    main: {
      title: {
        id: "headline",
        text: "Discover Profitable Market Niches Before Your Competition"
      },
      description: {
        id: "mainDescription",
        text: "Analyze in seconds which companies dominate a niche and find unexplored opportunities. <br />📊 Real-time data · 🔍 Market analysis · 💡 Exclusive opportunities"
      },
      button: {
        id: "registerButton",
        text: "Join"
      },
      loader:{
        id:"spinnLoader"
      }
    },
    section1: {
      box1: {
        id: "feature1_section1",
        title: "🌍 Explore ALL market niches in one place",
        description: "Access a database with thousands of market niches worldwide. Discover emerging sectors, identify key trends, and find opportunities before your competition. Our platform provides detailed information to help you make strategic, data-driven decisions."
      },
      box2: {
        id: "feature2_section1",
        title: "📊 Analyze companies and products like an expert",
        description: "Find out which companies lead a niche and what products or features make them stand out. Learn the strategies they use to dominate the market and discover how you can differentiate yourself to compete successfully. Get detailed insights into each sector and maximize your chances of success."
      }
    },
    section2: {
      box1: {
        id: "feature1_section2",
        title: "🗣️ The Reason Behind This Project",
        description: "Entrepreneurs need real data, not assumptions. For years, many businesses have failed due to investing in saturated niches or those without enough demand. This project was created to change that: we want to offer a tool that reveals real opportunities and enables strategic, data-driven decisions."
      },
      box2: {
        id: "feature2_section2",
        title: "🚫 Avoid saturated markets and choose real opportunities",
        description: "Don't waste time or money in saturated market niches where competition already dominates. Our tool helps you identify sectors with high growth potential and low competition. Find unique opportunities and ensure you invest in ideas with a real future."
      },
      box3: {
        id: "feature3_section2",
        title: "📌 Discover the secret behind every company's success",
        description: "Dive into an in-depth analysis of the leading companies in each market niche. Understand how they attract customers, what strategies they use, and what key factors have propelled them to the top. Use this knowledge to innovate, improve your offering, and gain a real competitive advantage."
      }
    },
    testimony: {
      id: "clientQuotes",
      part1_id: "quotesPart1",
      part2_id: "quotesPart2",
      comments: {
        part1: [
          { comment: "It's incredible that in the 21st century, there's still no tool that tells you which niches truly have opportunities and which are saturated.", user: "Andrea G." },
          { comment: "Whenever I want to start a business, I find scattered and unclear information. I don't understand why there's no platform that centralizes this data.", user: "Luis M." },
          { comment: "I spent months researching a market only to realize it was already dominated. Why isn't there something that tells you this upfront?", user: "Carla R." },
          { comment: "Small entrepreneurs are at a disadvantage because we don’t have access to the data that big companies use. There should already be a solution for this!", user: "Fernando T." },
          { comment: "I'm tired of wasting time and money on business ideas that ultimately have no future. We need a tool that helps make decisions based on real data.", user: "Sofía L." }
        ],
        part2: [
          { comment: "They always say you need to do market research, but no one tells you how or gives you accessible tools to do it properly.", user: "Javier P." },
          { comment: "It's frustrating to see so many startups fail because they lack clear information before launching. This should be easier.", user: "Mariana V." },
          { comment: "Not everyone has the time or money to conduct extensive market research. Why isn’t there something that does this work for us?", user: "Diego C." },
          { comment: "I want to start a business, but I’m always afraid of choosing the wrong niche. I don't understand how there’s still no platform that makes this easier.", user: "Elena M." },
          { comment: "Big companies have entire teams analyzing market data, but small entrepreneurs are in the dark. It’s time to change that!", user: "Rodrigo S." }
        ]
      }
    },
    register: {
      title: {
        id: "formTitle",
        text: "🚀 Join the Market Analysis Revolution"
      },
      description: {
        id: "formDescription",
        text: "Be among the first to access the tool that will transform how entrepreneurs and businesses identify business opportunities. Don’t get left behind—register today and get ahead in discovering profitable niches."
      }
    }
  };

  
  function buildBox(data) {
    const box = document.getElementById(data.id);
    const h2 = document.createElement("h3");
    h2.classList.add("subTitle");
    h2.textContent = data.title;
    const p = document.createElement("p");
    p.textContent = data.description;
    box.appendChild(h2);
    box.appendChild(p);
  }
  
  function updateText(data) {
    const element = document.getElementById(data.id);
    element.textContent = data.text;
  }
  
  function buildTestimonials(data, id) {
    const box = document.getElementById(id);
    data.forEach(testimonial => {
      const div = document.createElement("div");
      div.classList.add("testimonialCard");
      const p = document.createElement("p");
      p.textContent = testimonial.comment;
      const label = document.createElement("label");
      label.textContent = testimonial.user;
      div.appendChild(p);
      div.appendChild(label);
      box.appendChild(div);
    });
  }
  
  function displayAlert(message, bgColor) {
    let alertBox = document.querySelector(".alert");
  
    alertBox.style.animation = "none";
    void alertBox.offsetWidth;
    alertBox.style.animation = "slideUp 0.6s ease-out forwards";
  
    alertBox.innerText = message;
    alertBox.style.background = bgColor;
  
    setTimeout(() => {
      alertBox.style.animation = "slideDown 0.6s ease-out forwards";
    }, 3000);
  }
  
  document.getElementById("emailEntry").addEventListener("submit", function (event) {
    event.preventDefault();
    const btn = document.getElementById(siteData.main.button.id);
    const loader = document.getElementById(siteData.main.loader.id);
    var email = document.getElementById("emailAddress").value;
    var scriptURL = "https://script.google.com/macros/s/AKfycbxagqTtD2q0tJyMXAet-0sJHTIraDY5GqDXdAj644z9aK51VMORWBfk_tnp-XxSkxILRg/exec";
   
    loader.style.display = "block"   
    btn.style.display = "none"

    fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ email: email })
    })
      .then(response => response.text())
      .then(data => {
        if (data.includes("Success")) {
          displayAlert("Email registered successfully!", "#037a349c");
          document.getElementById("emailAddress").value = "";
        } else {
          displayAlert("Error registering email.", "#9e06069d");
        }
      })
      .catch(error => {
        displayAlert("Connection error.", "#9e8c069d");
      }) .finally(() => {
        loader.style.display = "none"; // Oculta el spinner
        btn.style.display = "block"; // Muestra el botón nuevamente
      });
  });
  
  updateText(siteData.main.title);
  element = document.getElementById(siteData.main.description.id);
  element.innerHTML = siteData.main.description.text;
  updateText(siteData.main.button);
  buildBox(siteData.section1.box1);
  buildBox(siteData.section1.box2);
  buildBox(siteData.section2.box1);
  buildBox(siteData.section2.box2);
  buildBox(siteData.section2.box3);
  
  updateText(siteData.register.title);
  updateText(siteData.register.description);
  
  buildTestimonials(siteData.testimony.comments.part1, siteData.testimony.part1_id);
  buildTestimonials(siteData.testimony.comments.part2, siteData.testimony.part2_id);
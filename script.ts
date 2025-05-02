interface Incident {
    id: number;
    title: string;
    description: string;
    severity: string;
    reported_at: string;
  }
  
  let incidents: Incident[] = [
    {
      id: 1,
      title: "Biased Recommendation Algorithm",
      description: "Algorithm consistently favored certain demographics in product recommendations, leading to unequal exposure of opportunities across user groups. This was discovered during a routine audit of recommendation patterns.",
      severity: "Medium",
      reported_at: "2025-03-15T15:30:00Z"
    },
    {
      id: 2,
      title: "LLM Hallucination in Critical Info",
      description: "LLM provided incorrect safety procedure information when asked about emergency protocols, potentially endangering users who might follow the fabricated instructions. The model confidently stated incorrect steps for handling a chemical spill..",
      severity: "High",
      reported_at: "2025-04-01T20:00:00Z"
    },
    {
      id: 3,
      title: "Minor Data Leak via Chatbot",
      description: "Chatbot inadvertently exposed non-sensitive user metadata in its responses when asked specific questions about system operations. The exposed data included general usage statistics but no personally identifiable information.",
      severity: "Low",
      reported_at: "2025-03-20T14:45:00Z"
    }
  ];
  
  const incidentList = document.getElementById('incidentList')!;
  const filterButtons = document.querySelectorAll('.filter-btn');
  const sortButtons = document.querySelectorAll('.sort-btn');
  const reportButton = document.getElementById('reportButton')!;
  const reportForm = document.getElementById('reportForm')!;
  const newIncidentForm = document.getElementById('newIncidentForm') as HTMLFormElement;
  
  
  let currentFilter = "All";
  let sortOrder = "newest";
  
  function renderIncidents() {
    let filtered = incidents.filter(i => currentFilter === "All" || i.severity === currentFilter);
  
    if (sortOrder === "newest") {
      filtered.sort((a, b) => new Date(b.reported_at).getTime() - new Date(a.reported_at).getTime());
    } else {
      filtered.sort((a, b) => new Date(a.reported_at).getTime() - new Date(b.reported_at).getTime());
    }
  
    incidentList.innerHTML = "";
  
    for (const incident of filtered) {
      const card = document.createElement('div');
      card.className = 'card';
  
      card.innerHTML = `
        <div class="card-header">
          <h3>${incident.title}</h3>
          <div>
            <span class="severity-badge severity-${incident.severity.toLowerCase()}">${incident.severity}</span>
            <span>${new Date(incident.reported_at).toLocaleString()}</span>
          </div>
        </div>
        <button class="view-details">View Details ▼</button>
        <div class="details">${incident.description}</div>
      `;
  
      const button = card.querySelector(".view-details")!;
      const details = card.querySelector(".details") as HTMLElement;
  
      button.addEventListener("click", () => {
        details.classList.toggle("show");
        button.textContent = details.classList.contains("show") ? "Hide Details ▲" : "View Details ▼";
      });
  
      incidentList.appendChild(card);
    }
  }
  
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter")!;
      renderIncidents();
    });
  });
  
  sortButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      sortButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      sortOrder = btn.getAttribute("data-sort")!;
      renderIncidents();
    });
  });
  
  reportButton.addEventListener("click", () => {
    reportForm.classList.toggle('hidden');
  });
  
  newIncidentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = (document.getElementById('title') as HTMLInputElement).value.trim();
    const description = (document.getElementById('description') as HTMLTextAreaElement).value.trim();
    const severity = (document.getElementById('severity') as HTMLSelectElement).value;
  
    if (!title || !description || !severity) return;
  
    incidents.push({
      id: incidents.length + 1,
      title,
      description,
      severity,
      reported_at: new Date().toISOString()
    });
  
    (document.getElementById('title') as HTMLInputElement).value = "";
    (document.getElementById('description') as HTMLTextAreaElement).value = "";
    (document.getElementById('severity') as HTMLSelectElement).value = "";

    
  
    reportForm.classList.add('hidden');
    renderIncidents();
  });
  

  
  renderIncidents();
  
var incidents = [
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
var incidentList = document.getElementById('incidentList');
var filterButtons = document.querySelectorAll('.filter-btn');
var sortButtons = document.querySelectorAll('.sort-btn');
var reportButton = document.getElementById('reportButton');
var reportForm = document.getElementById('reportForm');
var newIncidentForm = document.getElementById('newIncidentForm');
var darkModeToggle = document.getElementById('darkModeToggle');
var currentFilter = "All";
var sortOrder = "newest";
function renderIncidents() {
    var filtered = incidents.filter(function (i) { return currentFilter === "All" || i.severity === currentFilter; });
    if (sortOrder === "newest") {
        filtered.sort(function (a, b) { return new Date(b.reported_at).getTime() - new Date(a.reported_at).getTime(); });
    }
    else {
        filtered.sort(function (a, b) { return new Date(a.reported_at).getTime() - new Date(b.reported_at).getTime(); });
    }
    incidentList.innerHTML = "";
    var _loop_1 = function (incident) {
        var card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = "\n        <div class=\"card-header\">\n          <h3>".concat(incident.title, "</h3>\n          <div>\n            <span class=\"severity-badge severity-").concat(incident.severity.toLowerCase(), "\">").concat(incident.severity, "</span>\n            <span>").concat(new Date(incident.reported_at).toLocaleString(), "</span>\n          </div>\n        </div>\n        <button class=\"view-details\">View Details \u25BC</button>\n        <div class=\"details\">").concat(incident.description, "</div>\n      ");
        var button = card.querySelector(".view-details");
        var details = card.querySelector(".details");
        button.addEventListener("click", function () {
            details.classList.toggle("show");
            button.textContent = details.classList.contains("show") ? "Hide Details ▲" : "View Details ▼";
        });
        incidentList.appendChild(card);
    };
    for (var _i = 0, filtered_1 = filtered; _i < filtered_1.length; _i++) {
        var incident = filtered_1[_i];
        _loop_1(incident);
    }
}
filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        filterButtons.forEach(function (b) { return b.classList.remove("active"); });
        btn.classList.add("active");
        currentFilter = btn.getAttribute("data-filter");
        renderIncidents();
    });
});
sortButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        sortButtons.forEach(function (b) { return b.classList.remove("active"); });
        btn.classList.add("active");
        sortOrder = btn.getAttribute("data-sort");
        renderIncidents();
    });
});
reportButton.addEventListener("click", function () {
    reportForm.classList.toggle('hidden');
});
newIncidentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var title = document.getElementById('title').value.trim();
    var description = document.getElementById('description').value.trim();
    var severity = document.getElementById('severity').value;
    if (!title || !description || !severity)
        return;
    incidents.push({
        id: incidents.length + 1,
        title: title,
        description: description,
        severity: severity,
        reported_at: new Date().toISOString()
    });
    document.getElementById('title').value = "";
    document.getElementById('description').value = "";
    document.getElementById('severity').value = "";
    reportForm.classList.add('hidden');
    renderIncidents();
});
//   darkModeToggle.addEventListener("click", () => {
//     document.body.classList.toggle('dark');
//     darkModeToggle.textContent = document.body.classList.contains('dark') ? "☀️" : "🌙";
//   });
renderIncidents();

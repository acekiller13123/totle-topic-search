import React, { useState } from "react";

const topicsData = [
  { id: 1, name: "Thermodynamics", category: "Physics" },
  { id: 2, name: "Calculus", category: "Mathematics" },
  { id: 3, name: "Organic Chemistry", category: "Chemistry" },
  { id: 4, name: "World War II", category: "History" },
  { id: 5, name: "Programming Basics", category: "Computer Science" }
];

export default function TopicSearch() {
  const [search, setSearch] = useState("");

  const filteredTopics = topicsData.filter((topic) =>
    topic.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>Explore Topics</h1>

      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="🔍 Search topics..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />
      </div>

      <div style={styles.list}>
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic) => (
            <div key={topic.id} style={styles.card} className="fade-in">
              <div style={styles.cardContent}>
                <div>
                  <h3 style={styles.title}>{topic.name}</h3>
                </div>
                <span style={{ ...styles.badge, ...badgeColors(topic.category) }}>
                  {topic.category}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p style={styles.noResults}>No topics found 😔</p>
        )}
      </div>
    </div>
  );
}

const gradient = "linear-gradient(135deg, rgba(147,197,253,0.45), rgba(59,130,246,0.35))";

const styles = {
  wrapper: {
    maxWidth: "750px",
    margin: "60px auto",
    padding: "20px",
  },

  heading: {
    textAlign: "center",
    fontSize: "42px",
    fontWeight: "800",
    background: "linear-gradient(90deg, #0ea5e9, #6366f1)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    marginBottom: "40px",
  },

  searchContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "35px",
  },

  search: {
    width: "85%",
    padding: "16px 22px",
    borderRadius: "18px",
    border: "1px solid #dbeafe",
    fontSize: "17px",
    outline: "none",
    backdropFilter: "blur(10px)",
    background: "rgba(255,255,255,0.7)",
    boxShadow: "0px 4px 16px rgba(0,0,0,0.08)",
    transition: "0.25s ease-in-out",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  card: {
    padding: "24px",
    borderRadius: "20px",
    background: gradient,
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.3)",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "0.3s ease",
  },

  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "700",
    color: "#0f172a",
  },

  badge: {
    padding: "8px 14px",
    fontSize: "13px",
    borderRadius: "14px",
    color: "white",
    fontWeight: "600",
  },

  noResults: {
    textAlign: "center",
    fontSize: "18px",
    marginTop: "20px",
    color: "#64748b",
  },
};

function badgeColors(category) {
  const colors = {
    Physics: { background: "#0ea5e9" },
    Mathematics: { background: "#6366f1" },
    Chemistry: { background: "#f97316" },
    History: { background: "#10b981" },
    "Computer Science": { background: "#7c3aed" },
  };
  return colors[category] || { background: "#6b7280" };
}

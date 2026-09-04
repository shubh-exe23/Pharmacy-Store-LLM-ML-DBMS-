import { useState } from "react";

export default function Inventory({ medicines, addToCart, loading = false }) {
  const [search, setSearch] = useState("");

  const filteredMedicines = medicines.filter((medicine) =>
    `${medicine.name} ${medicine.category}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container" style={{ padding: 24 }}>
      <input
        className="search"
        placeholder="Search medicines or category"
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", maxWidth: 420, padding: 12, borderRadius: 10, border: "1px solid #cbd5e1", marginBottom: 24 }}
      />

      {loading ? (
        <div>Loading inventory from database...</div>
      ) : (
        <div className="grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {filteredMedicines.map((medicine) => (
            <div className="card" key={medicine.id} style={{ background: "#fff", borderRadius: 14, padding: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>
              <img src={medicine.image || "https://via.placeholder.com/150"} alt={medicine.name} style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 10, marginBottom: 12 }} />
              
              <h3 style={{ margin: "0 0 4px 0", fontSize: "1.1rem" }}>{medicine.name}</h3>
              <p style={{ color: "#0ea5e9", fontSize: "0.85rem", margin: "0 0 8px 0" }}>{medicine.category}</p>
              
              <p style={{ color: "#64748b", fontSize: "0.85rem", margin: "0 0 12px 0", flexGrow: 1 }}>
                {medicine.description}
              </p>
              
              <div style={{ display: "flex", gap: "8px", alignItems: "baseline", marginBottom: "4px" }}>
                <span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>Rs {medicine.price}</span>
                {medicine.discount > 0 && (
                  <span style={{ color: "#16a34a", fontSize: "0.9rem", fontWeight: "600" }}>
                    -{medicine.discount}%
                  </span>
                )}
              </div>
              
              <p style={{ color: medicine.stock > 10 ? "#16a34a" : "#dc2626", fontSize: "0.85rem", margin: "0 0 16px 0" }}>
                Stock: {medicine.stock}
              </p>
              
              <button 
                onClick={() => addToCart(medicine)} 
                disabled={medicine.stock < 1}
                style={{
                  background: "#0ea5e9",
                  color: "white",
                  border: "none",
                  padding: "10px",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  cursor: medicine.stock < 1 ? "not-allowed" : "pointer",
                  width: "100%",
                  marginTop: "auto"
                }}
              >
                {medicine.stock < 1 ? "Out of Stock" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
import React from "react";

function MedicineCard({ med, addToCart }) {
  return (
    <div className="card" style={{ background: "#fff", borderRadius: 14, padding: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>
      
      <img 
        src={med.image || "https://images.pexels.com/photos/3873150/pexels-photo-3873150.jpeg"} 
        alt={med.name} 
        style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 10, marginBottom: 12 }} 
      />
      
      <h3 style={{ margin: "0 0 4px 0", fontSize: "1.1rem", color: "#0f172a" }}>{med.name}</h3>
      <p style={{ color: "#0ea5e9", fontSize: "0.85rem", margin: "0 0 8px 0" }}>{med.category}</p>
      
      <p style={{ color: "#64748b", fontSize: "0.85rem", margin: "0 0 12px 0", flexGrow: 1 }}>
        {med.description}
      </p>
      
      <div style={{ display: "flex", gap: "8px", alignItems: "baseline", marginBottom: "4px" }}>
        <span style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#0f172a" }}>Rs {med.price}</span>
        {med.discount > 0 && (
          <span style={{ color: "#16a34a", fontSize: "0.9rem", fontWeight: "600" }}>
            -{med.discount}%
          </span>
        )}
      </div>
      
      <p style={{ color: med.stock > 10 ? "#16a34a" : "#dc2626", fontSize: "0.85rem", margin: "0 0 16px 0" }}>
        Stock: {med.stock}
      </p>
      
      <button 
        onClick={() => addToCart(med)} 
        disabled={med.stock < 1}
        style={{
          background: "#0ea5e9",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: med.stock < 1 ? "not-allowed" : "pointer",
          width: "100%",
          marginTop: "auto"
        }}
      >
        {med.stock < 1 ? "Out of Stock" : "Add to Cart"}
      </button>

    </div>
  );
}

export default MedicineCard;
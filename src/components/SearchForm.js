"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchForm({ onSearch, loading }) {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onSearch(city.trim());
        }
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <div className="input-group">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Busca una ciudad..."
                    aria-label="Ciudad"
                    disabled={loading}
                    autoFocus
                />
                <button type="submit" disabled={loading || !city.trim()} aria-label="Buscar">
                    {loading ? (
                        <div className="spinner" />
                    ) : (
                        <Search size={20} />
                    )}
                </button>
            </div>
        </form>
    );
}

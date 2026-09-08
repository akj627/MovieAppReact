import MovieCard from "../components/MovieCard";
import { useState } from "react";
import '../css/Home.css'

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "Mirzapur", release_date: "2026" },
        { id: 2, title: "Dhurandhar", release_date: "2024" },
        { id: 3, title: "Animal", release_date: "2023" },
        { id: 4, title: "Avatar", release_date: "2015" },
        { id: 5, title: "Top Gun", release_date: "1995" },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
    };

    return (
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map(movie =>
                    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
            </div>
        </div>
    );
}

export default Home
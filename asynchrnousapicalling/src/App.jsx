import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import axios from "axios";

export default function App() {

  // 1. useState → store data
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // 2. useEffect → call API on page load
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    }
    fetchData();
  }, []);

  // 3. useRef → auto focus search input
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // 4. useMemo → optimize filtering
  const filteredUsers = useMemo(() => {
    return users.filter(u => 
      u.name.toUpperCase().includes(search.toUpperCase())
    );
  }, [users, search]);

  // 5. useCallback → stable function
  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>User Dashboard</h1>

      {/* Auto-focused Search Bar */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Search user..."
        
        onChange={handleSearch}
        style={{ padding: 8, width: "300px" }}
      />

      <h2>Results:</h2>

      {filteredUsers.map(user => (
        <p key={user.id}>
          <strong>{user.name}</strong> - {user.email}
        </p>
      ))}
    </div>
  );
}

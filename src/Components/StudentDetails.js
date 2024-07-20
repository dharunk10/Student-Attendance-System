import React, { useEffect, useState } from "react";
import "./StudentDetails.css";

const userData = [
    { name: "Gus", dep: "ECE" },
    { name: "Walter White", dep: "ECE" },
    { name: "HeisenBerg", dep: "ECE" },
    { name: "Hank", dep: "ECE" },
    { name: "Jessie Pinkman", dep: "ECE" },
    { name: "John Snow", dep: "CSE" },
    { name: "Demon Targeryon", dep: "CSE" },
    { name: "Denarys Targeryon", dep: "CSE" },
    { name: "Jaime Lannister", dep: "CSE" },
    { name: "Tyrion Lannister", dep: "CSE" },
    { name: "Ragnar Lothbrok", dep: "AIDS" },
    { name: "Floki", dep: "AIDS" },
    { name: "Lagertha", dep: "AIDS" },
    { name: "Rollo", dep: "AIDS" },
    { name: "Bjorn Lothbrok", dep: "AIDS" },
];

const StudentDetails = ({ depname }) => {
    const [filterStudents, setFilterStudents] = useState([]);

    useEffect(() => {
        if (depname) {
            const filtered = userData.filter(user => user.dep === depname);
            setFilterStudents(filtered);
        }
    }, [depname]);

    return (
        <div className="main">
            {filterStudents.map((items, index) => (
                <div key={index} className="main-container">
                    <div>
                        <img src="profile.png" alt="profile" />
                    </div>
                    <div>
                        <h3>{items.name}</h3>
                        <h4>{items.dep}</h4>
                    </div>
                    <div className="buttons">
                        <button type="submit" className="present">
                            Present
                        </button>
                        <button type="submit" className="absent">
                            Absent
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StudentDetails;

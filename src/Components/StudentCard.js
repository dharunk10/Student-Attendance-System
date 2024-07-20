import React, { useState } from "react";
import StudentDetails from "./StudentDetails";
import './StudentCard.css'


const StudentCard = () => {
    const list = [
        "ECE",
        "CSE",
        "AIDS"
    ];

    const user_Data = [
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

    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [load, setLoad] = useState(false);

    const handleDepartmentChange = (event) => {
        setLoad(true);
        const department = event.target.value;
        setSelectedDepartment(department);
        const filtered = user_Data.filter(user => user.dep === department);
        setFilteredUsers(filtered);
    };

    return (
        <div>
            <div className="body">
                <div>
                    <h2 className="user_name">HELLO USER</h2>
                </div>
                <div>
                    <h3 className="course_handling">Courses Handling</h3>
                    <div  className="drop-down">
                    <select
                        onChange={handleDepartmentChange}
                        value={selectedDepartment}
                    >
                        <option value="" disabled>
                            Select Department
                        </option>
                        {list.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    </div>
                </div>
            </div>
            {!load ? <div className="main"><img src="nodata.jpg" alt="profile" className="nodata"/></div> : <StudentDetails depname={selectedDepartment} />}
        </div>
    );
}

export default StudentCard;

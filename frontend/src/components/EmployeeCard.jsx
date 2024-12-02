import React from "react";
import "../EmployeeCard.css";
import Header from "./Header";
import Footer from "./Footer";

const employees = [
    {
        id: 1,
        name: "Valter",
        position: "General Manager",
        description: "Обеспечивает стратегическое планирование и контроль всех процессов.",
        phone: "+90 (530) 230-16-13",
        photo: require("../assets/empty_profile.jpg"),
    },
    {
        id: 2,
        name: "John Carter",
        position: "Logistics Coordinator",
        description: "Создает и поддерживает функционал наших приложений.",
        phone: "+90 (506) 988-46-85",
        photo: require("../assets/empty_profile.jpg"),
    },
    {
        id: 3,
        name: "Emre Çelik",
        position: "Rental Contracts Specialist",
        description: "Отвечает за визуальную часть и пользовательский опыт.",
        phone: "+90 (914) 463-37-90",
        photo: require("../assets/empty_profile.jpg"),
    },
    {
        id: 4,
        name: "Hakan Aydin",
        position: "Technical Specialist",
        description: "Следит за качеством и стабильностью продуктов.",
        phone: "+7 (900) 456-78-90",
        photo: require("../assets/empty_profile.jpg"),
    },
    {
        id: 5,
        name: "Lukas Novak",
        position: "Chief Accountant",
        description: "Проводит исследования и предоставляет данные для принятия решений.",
        phone: "+90 (368) 280-54-49",
        photo: require("../assets/empty_profile.jpg"),
    },
    {
        id: 6,
        name: "Daniel Hristov",
        position: "Accountant ",
        description: "Занимается подбором и развитием персонала.",
        phone: "+90 (669) 110-87-87",
        photo: require("../assets/empty_profile.jpg"),
    },
];

const EmployeeCard = () => {
    return (
        <div style={{ width: "100vw" }}>
            <Header />
            <h1 className="team-title">Our Team</h1>
            <div className="employee-container">
                {employees.map((employee) => (
                    <div key={employee.id} className="employee-card">
                        <img src={employee.photo} alt={employee.name} className="employee-photo" />
                        <h2 className="employee-name" style={{width: '250px'}}>{employee.name}</h2>
                        <h3 className="employee-position">{employee.position}</h3>
                        <p className="employee-phone">Phone: {employee.phone}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default EmployeeCard;

function setText(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    }
}

// Mengisi data statis
setText("email", "allisads73@gmail.com");
setText("phone", "+62 857-7971-4959");
setText("Work", "Mathematics Education Student");
setText("Workplace", "University of Sultan Ageng Tirtayasa");
setText("Motto", "Hard work betrays none, but dreams betray many (NCT Lee Taeyong)");

const skills = [
    "Notion", "Canva", "Microsoft Word", "Microsoft Excel", 
    "Google Sheets", "Zoom"
];

const interests = [
    "Reading", "K-Drama", "Writing", "K-POP", 
    "Event Organizer", "Learn Foreign Languages"
];

const languages = [
    "Indonesian", "English (Intermediate)", 
    "Korean (Basic - able to understand simple phrases and common expressions)"
];

const description = `I am Allisa Diyan Salsabila, a second-semester Mathematics Education student 
with strong public speaking, time management, and task organization skills. 
I am highly adaptable in learning, detail-oriented, and thrive in collaborative environments.
Passionate about reading, writing, K-Dramas, K-POP, event organizing, and learning foreign languages, 
I continuously seek opportunities to grow.`; 

const experience = [
    "Vice Chairperson 2 – Student Council (OSIS) (2023-2024)",
    "Secretary of the Olympiad Team (2023-2024)",
    "Member of Division 6 – Student Council (OSIS) (2021-2022)",
    "Secretary of Science & Research Club (KIR) – MIPA Division (2022-2023)",
    "Member of Science & Research Club (KIR) – MIPA Division (2021-2022)"
];

const achievements = [
    "7th Place Winner in the Regency-Level Geography Olympiad (OSN)",
    "Silver Medalist in the National Science Olympiad (Provincial & National Level)"
];

const education = [
    "Universitas Sultan Ageng Tirtayasa - Mathematics Education",
    "SMA Negeri 4 Kabupaten Tangerang - Graduated 2024",
    "SMP Negeri 1 Cikupa - Graduated 2021",
    "SDS Islam Miftahul Jannah - Graduated 2018"
];

// Fungsi untuk mengisi list
function populateList(elementId, data) {
    const list = document.getElementById(elementId);
    if (list) {
        list.innerHTML = "";  // Hapus isi sebelumnya
        data.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            list.appendChild(li);
        });
    }
}

// Menampilkan deskripsi
setText("description", description);

// Mengisi daftar yang diperlukan
populateList("skills", skills);
populateList("interests", interests);
populateList("languages", languages);
populateList("experience", experience);
populateList("achievements", achievements);
populateList("education", education);

let derzhava = [
    {
        id: 1,
        nazva: "Україна",
        stolitsya: "Київ",
        ploshcha: 603628,
        naselennya: 41000000,
        vydupravlinnya: "Парламентсько-президентська республіка"
    },
    {
        id: 2,
        nazva: "Франція",
        stolitsya: "Париж",
        ploshcha: 551695,
        naselennya: 67000000,
        vydupravlinnya: "Президентська республіка"
    },
    {
        id: 3,
        nazva: "Японія",
        stolitsya: "Токіо",
        ploshcha: 377975,
        naselennya: 126000000,
        vydupravlinnya: "Конституційна монархія"
    }
];

let naselennya = [
    {
        id: 1,
        kilkist: 2800000,
        misto: "Київ",
        rik: 2024
    },
    {
        id: 2,
        kilkist: 2148000,
        misto: "Париж",
        rik: 2023
    },
    {
        id: 3,
        kilkist: 13960000,
        misto: "Токіо",
        rik: 2024
    }
];

let natsionalnist = [
    {
        id: 1,
        nazva: "Українці",
        kilkist: 37000000,
        mova: "Українська",
        relihiya: "Православ'я"
    },
    {
        id: 2,
        nazva: "Французи",
        kilkist: 65000000,
        mova: "Французька",
        relihiya: "Католицизм"
    },
    {
        id: 3,
        nazva: "Японці",
        kilkist: 125000000,
        mova: "Японська",
        relihiya: "Синтоїзм"
    }
];

let derzhavaIdCounter = 4;
let naselennyaIdCounter = 4;
let natsionalnistIdCounter = 4;

function fillTable() {
    const derzhavaTab = document.getElementById('derzhavaTableBody');
    derzhavaTab.innerHTML = "";
    derzhava.forEach(item => {
        derzhavaTab.innerHTML += generateDerzhavaRow(item);
    });

    const naselennyaTab = document.getElementById('naselennyaTableBody');
    naselennyaTab.innerHTML = "";
    naselennya.forEach(item => {
        naselennyaTab.innerHTML += generateNaselennyaRow(item);
    });

    const natsionalnistTab = document.getElementById('natsionalnistTableBody');
    natsionalnistTab.innerHTML = "";
    natsionalnist.forEach(item => {
        natsionalnistTab.innerHTML += generateNatsionalnistRow(item);
    });
}

function generateDerzhavaRow(item) {
    return `
        <tr>
            <td>${item.nazva}</td>
            <td>${item.stolitsya}</td>
            <td>${item.ploshcha}</td>
            <td>${item.naselennya}</td>
            <td>${item.vydupravlinnya}</td>
            <td>
                <button class="btn btn-warning" onclick="editDerzhava(${item.id})">Редагувати</button>
                <button class="btn btn-danger" onclick="deleteDerzhava(${item.id})">Видалити</button>
            </td>
        </tr>
    `;
}

function generateNaselennyaRow(item) {
    return `
        <tr>
            <td>${item.kilkist}</td>
            <td>${item.misto}</td>
            <td>${item.rik}</td>
            <td>
                <button class="btn btn-warning" onclick="editNaselennya(${item.id})">Редагувати</button>
                <button class="btn btn-danger" onclick="deleteNaselennya(${item.id})">Видалити</button>
            </td>
        </tr>
    `;
}

function generateNatsionalnistRow(item) {
    return `
        <tr>
            <td>${item.nazva}</td>
            <td>${item.kilkist}</td>
            <td>${item.mova}</td>
            <td>${item.relihya}</td>
            <td>
                <button class="btn btn-warning" onclick="editNatsionalnist(${item.id})">Редагувати</button>
                <button class="btn btn-danger" onclick="deleteNatsionalnist(${item.id})">Видалити</button>
            </td>
        </tr>
    `;
}

// Функції додавання

function addDerzhava(data) {
    data.id = derzhavaIdCounter++;
    derzhava.push(data);
    fillTable();
}

function addNaselennya(data) {
    data.id = naselennyaIdCounter++;
    naselennya.push(data);
    fillTable();
}

function addNatsionalnist(data) {
    data.id = natsionalnistIdCounter++;
    natsionalnist.push(data);
    fillTable();
}

// Видалення

function deleteDerzhava(id) {
    derzhava = derzhava.filter(item => item.id !== id);
    fillTable();
}

function deleteNaselennya(id) {
    naselennya = naselennya.filter(item => item.id !== id);
    fillTable();
}

function deleteNatsionalnist(id) {
    natsionalnist = natsionalnist.filter(item => item.id !== id);
    fillTable();
}

// Редагування

function editDerzhava(id) {
    const item = derzhava.find(e => e.id === id);
    if (item) {
        document.getElementById('derzhavaName').value = item.nazva;
        document.getElementById('derzhavaCapital').value = item.stolitsya;
        document.getElementById('derzhavaArea').value = item.ploshcha;
        document.getElementById('derzhavaPopulation').value = item.naselennya;
        document.getElementById('derzhavaGovernment').value = item.vydupravlinnya;
        
        $("#addDerzhavaModal").modal('show');

        document.getElementById('addDerzhavaForm').onsubmit = function(e) {
            e.preventDefault();
            item.nazva = document.getElementById('derzhavaName').value;
            item.stolitsya = document.getElementById('derzhavaCapital').value;
            item.ploshcha = parseInt(document.getElementById('derzhavaArea').value);
            item.naselennya = parseInt(document.getElementById('derzhavaPopulation').value);
            item.vydupravlinnya = document.getElementById('derzhavaGovernment').value;
            $("#addDerzhavaModal").modal('hide');
            fillTable();
        }
    }
}

function editNaselennya(id) {
    const item = naselennya.find(e => e.id === id);
    if (item) {
        document.getElementById('naselennyaQuantity').value = item.kilkist;
        document.getElementById('naselennyaCity').value = item.misto;
        document.getElementById('naselennyaYear').value = item.rik;
        
        $("#addNaselennyaModal").modal('show');

        document.getElementById('addNaselennyaForm').onsubmit = function(e) {
            e.preventDefault();
            item.kilkist = parseInt(document.getElementById('naselennyaQuantity').value);
            item.misto = document.getElementById('naselennyaCity').value;
            item.rik = parseInt(document.getElementById('naselennyaYear').value);
            $("#addNaselennyaModal").modal('hide');
            fillTable();
        }
    }
}

function editNatsionalnist(id) {
    const item = natsionalnist.find(e => e.id === id);
    if (item) {
        document.getElementById('natsionalnistName').value = item.nazva;
        document.getElementById('natsionalnistQuantity').value = item.kilkist;
        document.getElementById('natsionalnistLanguage').value = item.mova;
        document.getElementById('natsionalnistReligion').value = item.relihya;
        
        $("#addNatsionalnistModal").modal('show');

        document.getElementById('addNatsionalnistForm').onsubmit = function(e) {
            e.preventDefault();
            item.nazva = document.getElementById('natsionalnistName').value;
            item.kilkist = parseInt(document.getElementById('natsionalnistQuantity').value);
            item.mova = document.getElementById('natsionalnistLanguage').value;
            item.relihya = document.getElementById('natsionalnistReligion').value;
            $("#addNatsionalnistModal").modal('hide');
            fillTable();
        }
    }
}

// При завантаженні сторінки
window.onload = function () {
    fillTable();
};

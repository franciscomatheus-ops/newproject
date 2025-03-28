function StartData() {
    let Data = {
        Equipes: [],
        Guia: { ID: 'line_01', ShowTable: false, Quedas: 5 }
    }

    for (let i = 1; i <= 12; i++) {
        let numberF = i < 10 ? `0${i}` : i;
        Data.Equipes.push({
            ID: `line_${numberF}`,
            Nome: `Equipe ${numberF}`,
            Pontos: 0,
            Abates: 0,
        })
    }

    SendData(Data);
}


document.addEventListener('DOMContentLoaded', () => {
    let select = document.getElementById('Equipe');
    console.log(select.value);

    if (!localStorage.getItem('Data')) {
        StartData();
    }
})



function redirectAdmin() {
    window.location.href = "admin.html";
}


function SendData(data) {
    console.log(data);
    
    localStorage.setItem('Data', JSON.stringify(data));
}
const dictMonth = {
    0: 'Janeiro',
    1: 'Fevereiro',
    2: 'Março',
    3: 'Abril',
    4: 'Maio',
    5: 'Junho',
    6: 'Julho',
    7: 'Agosto',
    8: 'Setembro',
    9: 'Outubro',
    10: 'Novembro',
    11: 'Dezembro',
};

document.getElementById('createForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const start = document.getElementById('start').value;
    const year = document.getElementById('year').value;

    const daysByMonth = [];
    for (let i = 0; i < 12; i++) {
        const totalDays = new Date(year, i, 0).getDate()
        daysByMonth.push(totalDays);
    }

    console.log(daysByMonth);

    const pagesByMonth = [];

    let pageStart = parseInt(start);
    daysByMonth.forEach((days, index) => {
        const month = dictMonth[index];
        const pares = [];
        const impares = [];

        let currentPage = pageStart;
        for (let i = 0; i < days; i++) {
            if (currentPage % 2 == 0)
                pares.push(currentPage);
            else
                impares.push(currentPage);

            if (i === days - 1) pageStart = currentPage + 1;
            currentPage++;
        }

        pagesByMonth.push({
            month,
            pares,
            impares,
        });
    });

    console.log(pagesByMonth);

    let htmlResult = '';
    pagesByMonth.forEach((item) => {
        const htmlItem = `
            <div class="row">
                <div class="col-12">
                    <h4 class="my-4">${item.month}</h4>
                </div>
                <div class="col-12">
                    <label for="pares" class="form-label">Pares:</label>
                    <input class="form-control" id="pares" type="text" readonly value="${item.pares.join(',')}" />
                </div>
                <div class="col-12">
                    <label for="impares" class="form-label">Ímpares:</label>
                    <input class="form-control" id="impares" type="text" readonly value="${item.impares.join(',')}" />
                </div>
            </div>
        `;

        htmlResult += htmlItem;
    });

    document.getElementById('result').innerHTML = htmlResult;
});
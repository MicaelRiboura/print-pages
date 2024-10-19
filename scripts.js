document.getElementById('createForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;
    const paresInput = document.getElementById('pares');
    const imparesInput = document.getElementById('impares');

    const pages = [];
    for (let i = parseInt(start); i <= parseInt(end); i++) {
        pages.push(i);
    }

    const pares = [];
    const impares = [];
    pages.forEach(page => {
        if (page % 2 == 0)
            pares.push(page);
        else
            impares.push(page);
    });

    paresInput.value = pares.join(',');
    imparesInput.value = impares.join(',');
});
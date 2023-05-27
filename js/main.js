customSelect('select');

const picker = new easepick.create({
    element: document.getElementById('date_in'),
    css: [
        'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
    ],
    format: 'DD/MM',
});

const picker2 = new easepick.create({
    element: document.getElementById('date_out'),
    css: [
        'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
    ],
    format: 'DD/MM',
});
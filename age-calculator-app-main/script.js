const form = document.querySelector('form');
const submit = document.getElementById('bt-submit');

const inputday = document.getElementById('day');
const errordayvalid = document.getElementById('problem-valid-day');
const errordayrequired = document.getElementById('problem-required-day');

const inputmonth = document.getElementById('month');
const errormonthvalid = document.getElementById('problem-valid-month');
const errormonthrequired = document.getElementById('problem-required-month');

const inputyear = document.getElementById('year');
const erroryearvalid = document.getElementById('problem-valid-year');
const erroryearrequired = document.getElementById('problem-required-year');

const errorvaliddate = document.getElementById('problem-valid-date');



form.addEventListener("submit", function (event) {
    let index = false;

    event.preventDefault();
    clearerrormensage();
    if (inputday.value === '') {
        errordayrequired.style.display = 'block';
        index = true;
    } else if (inputday.value > 31 || inputday.value.length !== 2) {
        errordayvalid.style.display = 'block';
        index = true;
    };

    if (inputmonth.value === '') {
        errormonthrequired.style.display = 'block';
        index = true;
    } else if (inputmonth.value > 12 || inputmonth.value.length !== 2) {
        errormonthvalid.style.display = 'block';
        index = true;
    };



    if (inputyear.value === '') {
        erroryearrequired.style.display = 'block';
        index = true;
    } else if (inputyear.value.length !== 4) {
        erroryearvalid.style.display = 'block';
        index = true;
    };

    const insertdate = new Date(inputyear.value, inputmonth.value - 1, inputday.value);
    const currentdate = new Date();

    if (index === false && insertdate > currentdate) {
        errorvaliddate.style.display = 'Block';
        index = true;
    } else if (index === false) {
        console.log("Valido");
        event.preventDefault();

        const inputdate = new Date(inputyear.value, inputmonth.value - 1, inputday.value);
        const targetdate = new Date();

        const diffmilli = targetdate - inputdate;
        let diffInDays = Math.floor(diffmilli / (1000 * 60 * 60 * 24));

        if (diffmilli > (365 * 4)) {

            let daysbisex = Math.floor(diffInDays / (365 * 4));
            console.log(diffInDays);
            diffInDays = Math.floor(diffInDays - daysbisex);

        };

        console.log(diffInDays);
        const years = Math.floor(diffInDays / 365);
        const months = Math.floor((diffInDays - (years * 365)) / 30.4);
        const days = Math.floor((diffInDays - (years * 365) - (months * 30.4)) + 0.5);

        showresultdate(years, months, days);

        console.log(years);
        console.log(months);
        console.log(days);
    };

});

function clearerrormensage() {
    errorvaliddate.style.display = 'none';

    errordayrequired.style.display = 'none';
    errordayvalid.style.display = 'none';
    errormonthrequired.style.display = 'none';
    errormonthvalid.style.display = 'none';
    erroryearrequired.style.display = 'none';
    erroryearvalid.style.display = 'none';
};

function showresultdate(years, months, days) {
    const spanyears = document.getElementById("years-result");
    const spanmonths = document.getElementById("months-result");
    const spandays = document.getElementById("days-result");

    spanyears.textContent = years;
    spanmonths.textContent = months;
    spandays.textContent = days;
};

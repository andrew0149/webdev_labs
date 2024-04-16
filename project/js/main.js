window.onload = function () {
    document.getElementById("date").value = toDateInputValue(new Date());
}

let paymentMethods = new Map();
paymentMethods.set('cash', 'наличными');
paymentMethods.set('card', 'картой');
paymentMethods.set('paypal', 'переводом на PayPal');

function toDateInputValue(dateObject) {
    const local = new Date(dateObject);
    local.setMinutes(dateObject.getMinutes() - dateObject.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
};

function validateName() {
    let name = document.getElementById("name").value;
    let regex = /^[а-яА-Яa-zA-Z\-\s]{2,15}$/;
    let errorMessage = document.getElementById("name_error");

    if (regex.test(name)) {
        errorMessage.style.display = "none";
        return true;
    }

    errorMessage.style.display = "block";
    errorMessage.innerHTML = "Имя должно быть состоять из 2-15 букв!";
    return false;
}

function validateSurname() {
    let surname = document.getElementById("surname").value;
    let regex = /^[а-яА-Яa-zA-Z\-\s]{2,15}$/;
    let errorMessage = document.getElementById("surname_error");

    if (regex.test(surname) || surname.length < 1) {
        errorMessage.style.display = "none";
        return true;
    }

    errorMessage.style.display = "block";
    errorMessage.innerHTML = "Фамилия должна состоять из 2-15 букв!";
    return false;
}

function validatePhone() {
    let phone = document.getElementById("phone").value;
    let regex = /^(\+7|8)\s?[\(-]?[0-9]{3}[\)-]?([\-\s]?[0-9]){7}$/;
    let errorMessage = document.getElementById("phone_error");


    if (regex.test(phone)) {
        errorMessage.style.display = "none";
        return true;
    }

    errorMessage.style.display = "block";
    errorMessage.innerHTML = "Номер телефона должен соответствовать шаблону!";
    return false;
}

function validateDestination() {
    let destination = document.getElementById("dest").value;
    let regex = /^[а-яА-Яa-zA-Z\s\d\.\,\-]{6,64}$/;
    let errorMessage = document.getElementById("dest_error");

    if (regex.test(destination)) {
        errorMessage.style.display = "none";
        return true;
    }

    errorMessage.style.display = "block";
    errorMessage.innerHTML = "Адрес должен состоять из 6-64 символов!";
    return false;
}

function validateQuantity() {
    let quantity = parseInt(document.getElementById("quantity").value);
    let errorMessage = document.getElementById("quantity_error");

    if (quantity > 0 && quantity < 11) {
        errorMessage.style.display = "none";
        return true;
    }

    errorMessage.style.display = "block";
    if (quantity <= 0) {
        errorMessage.innerHTML = "Количество должно быть больше нуля!";
    }
    if (quantity >= 11) {
        errorMessage.innerHTML = "Количество должно быть меньше одиннадцати!";
    }
    return false;
}

function checkOrderInfo() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let phone = document.getElementById("phone").value;
    let destination = document.getElementById("dest").value;
    let dateTime = document.getElementById("date").value + " в " + document.getElementById("time").value;
    let quantity = document.getElementById("quantity").value;
    let paymentMethod = document.getElementById("payment").value;

    let summaryMessage = document.getElementById("order_summary");

    summaryMessage.style.display = "block";

    if (validateName()
        & validateSurname()
        & validatePhone()
        & validateDestination()
        & validateQuantity()) {
        summaryMessage.style.color = "white";
        summaryMessage.style.textShadow = "none";
        summaryMessage.innerHTML = `Привет, ${name}${surname.length > 1 ? " " + surname : ""}!`;
        summaryMessage.innerHTML += "<p>Ваш заказ успешно размещён. Мы свяжемся с вами как можно раньше.</p>";
        summaryMessage.innerHTML += "<p>Вы можете ознакомиться с реквизитами заказа ниже:</br>";
        summaryMessage.innerHTML += `Номер телефона: ${phone}.</br>`;
        summaryMessage.innerHTML += `Пункт назначения: ${destination}.</br>`;
        summaryMessage.innerHTML += `Дата и время доставки: ${dateTime}.</br>`;
        summaryMessage.innerHTML += `Количество товара: ${quantity} шт.</br>`;
        summaryMessage.innerHTML += `Метод оплаты: ${paymentMethods.get(paymentMethod)}.</p>`;
        summaryMessage.innerHTML += `<p style='font-weight: bold;'>Мы рады, что Вы пользуетесь нашими услугами! 😊</p>`;
    }
    else {
        summaryMessage.style.color = "rgb(220, 0, 0)";
        summaryMessage.style.textShadow = "1px 1px 15px white, 1px 1px 15px white, 1px 1px 15px white";
        summaryMessage.innerHTML = "<p style='font-weight: bold;'>Проверьте заполнение полей реквизитов заказа!<p>"
    }
}
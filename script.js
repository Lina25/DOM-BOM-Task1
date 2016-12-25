var form = document.createElement('form');
form.setAttribute("name", "login");
form.setAttribute("action", "https://google.com");
form.setAttribute("onsubmit", "return validate()");
var inputs = {
  age: {
    type: 'text',
    name: 'age',
    placeholder: 'your age'
  },
   username: {
    type: 'text',
    name: 'username',
    placeholder: 'your username:user_'
  },
    date: {
    type: 'text',
    name: 'date',
    placeholder: 'dd/mm/yyyy'
  },
    button: {
    type: 'submit',
    value: "Validate Me"
  }
}
document.body.appendChild(form);

function formInput(inputs) {
  for (var elements in inputs) {
    var input = document.createElement('input');
    var element = inputs[elements];
    for (var key in element) {
      input.setAttribute(key, element[key])
    }
    form.appendChild(input);
  }
}
formInput(inputs);
var form = document.querySelector('form');
form.addEventListener('submit', function validate() {
  checkAge(this.age.value);
  checkName(this.username.value);
  checkDate(this.date.value);
});

function checkAge(userage) {
  var ageRegex = /^(0?[1-9]|[0-9][0-9])$/;
  var ageOk = ageRegex.test(userage);
  if (ageOk) {
    return true;
  } else {
    alert("Your age is not valid!Age should contains only positive numbers!");
    return false;
  }
}

function checkName(username) {
  if (form.elements[1].value.indexOf("user_") == 0) {
    return true;
  } else {
    alert("Your username is not valid! It should start from user_");
    return false;
  }
}

function checkDate(date) {
  var dateRegex = new RegExp("([0-9]{4}[/](0[1-9]|1[0-2])[/]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[/](0[1-9]|1[0-2])[/][0-9]{4})");
  var dateOk = dateRegex.test(date);
  if (dateOk) {
    return true;
  } else {
    alert("Your date is not valid!");
    return false;
  }
}
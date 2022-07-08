$(function () {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load

  // $(`.red-box`).fadeTo(1000, 0.25);
  // $(`.green-box`).delay(1000).fadeTo(1000, 0.5);
  // $(`.red-box`)
  //   .delay(2000)
  //   .fadeTo(1000, 0.25, function () {
  //     $(`.green-box`).fadeTo(1000, 0.5, function () {
  //       $(`.blue-box`).fadeTo(1000, 0.75, function () {
  //         // alert(`Ìt's the final callbaack`);
  //       });
  //     });
  //   });
  // $(`.lightbox`).delay(500).fadeIn(1000);
  //---------------box swap-------------------//
  // setInterval(function () {
  //   $(`.blue-box`).animate(
  //     {
  //       "margin-left": "-=330px",
  //       opacity: "1",
  //     },
  //     1000,
  //     "linear"
  //   );
  //   $(`.red-box`).delay(1000).animate(
  //     {
  //       "margin-left": "+=420px",
  //       opacity: "1",
  //     },
  //     1000
  //   );
  //   $(`.green-box`).delay(2000).animate(
  //     {
  //       "margin-left": "-=220px",
  //       opacity: "1",
  //     },
  //     1000
  //   );
  //   ////
  //   $(`.blue-box`).delay(3000).animate(
  //     {
  //       "margin-left": "+=330px",
  //     },
  //     1000,
  //     "linear"
  //   );
  //   $(`.red-box`).delay(4000).animate(
  //     {
  //       "margin-left": "-=420px",
  //     },
  //     1000
  //   );
  //   $(`.green-box`).delay(5000).animate(
  //     {
  //       "margin-left": "+=220px",
  //     },
  //     1000
  //   );
  // }, 15000);

  //---------------CSS in JS------------------//
  $(`.red-box,.green-box,.blue-box`).css(`border-radius`, `55px`);
  $(`.red-box,.green-box,.blue-box`).css(`text-align`, `center`);
  $(`.red-box,.green-box,.blue-box`).css(`position`, `relative`);
  $(`.text`).css("position", "absolute");
  $(`.text`).css("top", "50%");
  $(`.text`).css("left", "50%");
  $(`.text`).css("transform", "translate(-50%, -50%)");

  $("#list").parent().css("background-color", "#fff111");
  $(`li`)
    .first()
    .filter(function (index) {
      return true;
    })
    .css(`color`, `#00d800`);
  $(`li`)
    .eq(4 + 5)
    .filter(function (index) {
      return true;
    })
    .css(`color`, `#d12211`);

  $(`p`).css("background-color", "#228b22");
  $(`p`).css(`color`, `#f1f1f1`);
  $(`p`).css(`border-radius`, `25px`);
  $(`p`).css(`padding`, `25px`);
  $(`input[type=submit]`).css(`background-color`, `#009f6b`);
  $(`input, textarea`).css(`border-radius`, `8px`);
  $(`input[type=submit]`).css(`border-radius`, `25px`);
  $(`input[type=submit]`).css(`color`, `#f1f1f1`);

  //--------------------DOM---------------------//

  $(`ul ul:first`).append("<li>jQuery appended values</li>");
  $("<li>jQuery prepend values</li>").prependTo($(`ul ul:last`));
  $("<h3>Ishwar Patro</h3>").prependTo($(`#content`)).css(`color`, `#400404`);
  $(`.red-box`).after(
    `<div class="red-box"><div class="text">after</div></div>`
  );
  $(`.blue-box`).before(function () {
    return `<div class="blue-box"><div class="text">before</div></div>`;
  });
  $(`#content p:first`).after($(`#list`));
  $(`#list2 ul li:first`).replaceWith(`<li>REPLACED ITEAM</li>`);
  // $(`#list2:last`).replaceWith(`<li>REPLACED ITEAM</li>`);
  $(`#list2 ul:last`).remove();
  $(`.green-box,.blue-box,.red-box`).empty();
  // $(`.green-box`).prev().prev().remove();
  // $(`.green-box`).next().next().remove();
  $(`.green-box`).prev().remove();
  $(`.green-box`).next().remove();

  let l = $(`p`);
  console.log(l.attr(`p`));

  let checkb = $(`input[type=checkbox]`);
  console.log(checkb.prop(`checked`));

  let v = $(`input[type=range]`);
  console.log(v.val());

  let galleryImage = $(`.gallery`).find(`img`).first();
  $(`html`).on(`click keydown`, function () {
    console.log(`Mouse is clicked`);
  });
  let images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg",
    "images/login-page-bg.jpg",
  ];

  let count = 0;
  function imagenext() {
    $(this).attr(`src`, images[count]).fadeIn();
  }
  function switchnext() {
    count = (count + 1) % images.length;
    galleryImage.fadeOut(imagenext);
  }
  // setInterval(function () {
  //   count = (count + 1) % images.length;
  //   galleryImage.fadeOut(function () {
  //     $(this).attr(`src`, images[count]);
  //     $(this).fadeIn();
  //   });
  //   console.log(galleryImage.attr(`src`));
  // }, 2500);

  galleryImage.on(`click`, switchnext);
  //------------------DOM2--------------------//
  let firstP = $(`p:first`);
  console.log(firstP.text());
  console.log(firstP.html());

  firstP.html(`<h1><strong>Hello World!!</strong><h1>`);
  //------------------EVENT HANDELING----------//
  $(`#btn-click`).click(function (event) {
    console.log(event);
    alert(`A button was clicked`);
  });
  $(`.red-box, .blue-box, .green-box`).click(function () {
    $(this).fadeTo(500, 0.2);
  });
  $(`.red-box, .blue-box, .green-box`).click(function () {
    $(this).fadeTo(500, 1);
  });
  $(`p`).mouseenter(function () {
    $(this).fadeTo(500, 1).css(`background-color`, `#01f010`);
  });
  $(`p`).mouseleave(function () {
    $(this).fadeTo(500, 0.7).css("background-color", "#228b22");
  });

  $(`p`).hover(function () {
    $(this).fadeTo(500, 1);
  });

  $(`html`).keydown(function (event) {
    console.log(event.which);
  });

  let ARROW_RIGHT = 39;
  let ARROW_LEFT = 37;

  $(`html`).keydown(function (event) {
    if (event.which == ARROW_RIGHT) {
      $(`.blue-box`).stop().animate(
        {
          marginLeft: `+=5px`,
        },
        50
      );
      // $(`.green-box`).click().stop().animate(
      //   {
      //     marginLeft: `+=5px`,
      //   },
      //   50
      // );
      // $(`.red-box`).click().stop().animate(
      //   {
      //     marginLeft: `+=5px`,
      //   },
      //   50
      // );
    }
  });
  $(`html`).keydown(function (event) {
    if (event.which == ARROW_LEFT) {
      $(`.blue-box`).stop().animate(
        {
          marginLeft: `-=5px`,
        },
        50
      );
    }
  });

  let inputFields = $(`input:text, input:password, textarea`);

  inputFields.focus(function () {
    $(this).css(`box-shadow`, `#666`);
  });
  let submit = $(`#submit`);
  let form = $(`#form`);
  enableFastFeedback(form);

  form.submit(function (event) {
    let name = $(`#name`).val();
    let email = $(`#email`).val();
    let password = $(`#password`).val();
    let message = $(`#message`).val();
    let checkbox = $(`#checkbox`).is(`:checked`);

    validateNameField(name, event);
    validateEmailField(email, event);
    validatePasswordField(password, event);
  });

  //---------------------jQueryAjax---------------//

  // $(`#code`).load(`css/style.css`);

  //-----------------------flickr API-------------//
  let flickrApiURL = `https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?`;

  $.getJSON(flickrApiURL, {
    //Options....
    tags: `thunder, rain, dark`,
    tagnode: `all`,
    format: `json`,
  })
    .done(function (data) {
      //Sucessful....
      // console.log(data);
      $.each(data.items, function (index, item) {
        // console.log(item);
        $(`<img>`).attr("src", item.media.m).appendTo(`#flickr`);

        if (index == 4) {
          return false;
        }
      });
    })
    .fail(function () {
      //Failure....
      alert(`Ajax call failed`);
    });
  //---------------------POKE API-----------------------//
  var pokeapiURL = `https://pokeapi.co/api/v2/generation/3`;

  $.getJSON(pokeapiURL).done(function (data) {
    // console.log(data);
    $.each(data.pokemon_species, function (index, pokemon) {
      let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      if (name == "Jirachi") {
        name.toUpperCase();
      }
      let li = $(`<li>`).html(
        "Pokemon species no. " + (index + 1) + " is " + name
      );
      li.appendTo(`#pokemon`);
    });
  });
});
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
function enableFastFeedback(formElement) {
  let nameInput = formElement.find(`#name`);
  let emailInput = formElement.find(`#email`);
  let passwordInput = formElement.find(`#password`);
  let messageInput = formElement.find(`#message`);
  let checkboxInput = formElement.find(`#checkbox`);

  nameInput.blur(function (event) {
    let name = $(this).val();
    validateNameField(name, event);

    if (!isValidName(name)) {
      $(this).css({ "box-shadow": "0 0 5px #811", border: "1px solid #600" });
    } else {
      $(this).css({ "box-shadow": "0 0 5px #180", border: "1px solid #180" });
    }
  });

  passwordInput.blur(function (event) {
    let password = $(this).val();
    validatePasswordField(password, event);

    if (!isValidPassword(password)) {
      $(this).css({ "box-shadow": "0 0 5px #811", border: "1px solid #600" });
    } else {
      $(this).css({ "box-shadow": "0 0 5px #180", border: "1px solid #180" });
    }
  });
}

function validateNameField(name, event) {
  if (!isValidName(name)) {
    $(`#name-feedback`).text(`Please enter at least three characters`);
    event.preventDefault();
  } else {
    $(`#name-feedback`).text(``);
  }
}

function isValidName(name) {
  return name.length >= 3;
}

function validatePasswordField(Password, event) {
  if (!isValidPassword(Password)) {
    $(`#password-feedback`).text(`Please enter at least 6-characters`);
    event.preventDefault();
  } else {
    $(`#password-feedback`).text(``);
  }
}

function isValidPassword(Password) {
  return Password.length >= 6;
}

function validateEmailField(mail, event) {
  if (!isValidEmail(mail)) {
    $(`#email-feedback`).text(`Please enter a proper Email id`);
    event.preventDefault();
  } else {
    $(`#email-feedback`).text(``);
  }
}

function isValidEmail(mail) {
  for (var i = 0; i < mail.length; i++) {
    if (mail[i] == `@`) {
      return true;
    }
  }
  return false;
}

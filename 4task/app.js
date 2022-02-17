const calculate = () => {
  let price = Number(document.getElementById("price").value);
  let amount = Number(document.querySelector("#amount").value);

  let totalprice = Math.floor(price * amount);

  let answer = document.querySelector(".answer");

  let text;

  totalprice >= 10
    ? (text = `Bigman richman buying ${totalprice}€  worth of gasoline`)
    : (text = `Wiseman, buy in small batches, this time- with ${totalprice}€ `);

  answer.textContent = text;
};

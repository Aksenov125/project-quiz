const questForm = document.querySelector(".questionForm");
const div = document.querySelector(".text-answer");
if (questForm) {
  questForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const answer = e.target.answer.value;
    const { id, idt } = e.target.dataset;
    const res = await fetch(`/themes/${id}/${idt}`, {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        id: id,
        answer: answer,
      }),
    });
    const data = await res.json();
    console.log(data);
    div.innerHTML = data.message;
  });
}

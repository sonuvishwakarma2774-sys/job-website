function submitForm(event, jobType) {
  event.preventDefault();

  let form = event.target;

  let name = form.querySelectorAll("input")[0].value;
  let mobile = form.querySelectorAll("input")[1].value;
  let time = form.querySelectorAll("input")[2].value;

  // Message format
  let message = 
`📢 Job Apply

🏢 Company: ANITA PRIVATE LIMITED
📌 Post: ${jobType}

👤 Name: ${name}
📱 Mobile: ${mobile}
⏰ Joining Time: ${time}

📍 Location: Prayagraj / All India`;

  // WhatsApp Number
  let whatsappNumber = "917408791947";

  let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Open WhatsApp
  window.open(url, "_blank");
}

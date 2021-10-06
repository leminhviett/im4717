function check_input() {
	var email_regex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,3}$/;
	var name_regex = /^[a-zA-Z ]+$/;

	var received_email = document.getElementById("email").value;
	var received_name = document.getElementById("name").value;
	var chosen_date = new Date(Date.parse(document.getElementById("myDateid").valueAsDate));
	chosen_date.setHours(0, 0, 0, 0);

	var today = new Date();
	today.setHours(0, 0, 0, 0);

	if (
		email_regex.test(received_email) &
		name_regex.test(received_name) &
		(today <= chosen_date)
	) {
		return true;
	}
	alert(
		String(email_regex.test(received_email)) +
			String(name_regex.test(received_name)) +
			String(today <= chosen_date)
	);
	return false;
}

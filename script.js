const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "c4b3251a-78fc-4a66-bc7a-da057f35b602");

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            console.log("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
        }
    } catch (error) {
        console.error("Error submitting form:", error);
    }
};

document.getElementById("myForm").addEventListener("submit", onSubmit);

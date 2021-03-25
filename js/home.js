async function getCards() {
    try {
        const repsonse = await fetch('https://noroffcors.herokuapp.com/https://jsonkeeper.com/b/CH8F');
        const jsonResults = await repsonse.json();
        const result = jsonResults;
        for (let i = 0; i < result.length; i++) {
            document.querySelector('main').innerHTML += `
                <div class="cards">
                <h3>${result[i].name}</h3>
                <a href="${result[i].link}"><img src="${result[i].image}"></a>
                    <p>${result[i].description}</p>
                    <a href="sign-in.html"><button type="submit" class="btn">Give to Charity</button></a>
                </div>
            `;
        }
    } catch (error) {
        document.querySelector('.alert').innerHTML += thisIsAnAlert(
            'An error has occured',
            'danger'
        );
        console.log(error);
    } finally {
        setTimeout( function() {
            document.querySelector('.alert').innerHTML = '';
        }, 3000);
    }
};
getCards();
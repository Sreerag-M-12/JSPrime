function IsPrime() {
    let p = document.getElementById('prime');
    let prime = true;
    let num = parseInt(document.getElementById('number').value);

    if (num == 0 || num == 1) {
        prime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                prime = false;
                break;
            }
        }
    }

    if (prime) {
        p.innerHTML = num + " is a prime number";
    } else {
        p.innerHTML = num + " is not a prime number";
    }
}

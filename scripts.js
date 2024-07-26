const num = 153;

let sum = 0;
let sumArm = 0
let quo = num;
for (let i = 0; i < num.toString().length; i++) {
    let rem = quo % 10;
    sum = sum + rem;
    sumArm = sumArm + (rem**3);
    quo = Math.trunc(quo / 10);
}
console.log("Sum of its digits is", sum);
const arm = (num == sumArm) ? "It is an Armstrong number." : "It is not an armstrong number";
console.log(arm);

let f;
for (let i = 2; i <= Math.trunc(num/2); i++) {
    if (num % i == 0) {
        let f = 0;
        break;
    }
}

if (f == 0) {
    console.log("It is not a prime number.");
} else {
    console.log("It is a prime number.");
}

console.log("Factors:");
for (i = 1; i <= num; i++) {
    if (num % i == 0) {
        console.log(i);
    }
}
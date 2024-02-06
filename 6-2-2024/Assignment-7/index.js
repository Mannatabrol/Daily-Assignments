// Objective: Explore truthy and falsy values in JavaScript through direct input testing.

let i = prompt("Enter Various Value suggestions: empty string, 0, null, undefined, NaN, false, a non-empty string, any number other than zero")
if (i === " " || i === "0" || i === "null" || i === "undefined" || i === "NaN" || i === "false") {
    alert("falsy");
} else {
    alert("truthy");
}

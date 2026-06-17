const mysym=Symbol("maihoon")
const me={
    [mysym]:"kyahai",
    name: "ataf",
    email: "a@gmail.com"
}
console.log(me[mysym]);
const {name}=me
console.log(name);//deconstructed object



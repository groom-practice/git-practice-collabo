let cat = {
  name: "gimchi",
  dislike: "hospital",
};

cat.name = "mandoo";
delete cat.dislike;
cat.age = 2;
cat.like = "tuna";

console.log(cat.name);
console.log(cat);

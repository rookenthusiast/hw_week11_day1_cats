data = [{name: "Name: Bob",  food: "Favorite Food: Kebab", image: "images/maxresdefault.jpg"},{name: "Name: Kapowsky",  food: "Favorite Food: Milk", image: "images/Russian-blue-cat.jpg"},{name: "Name: Wrinkles",  food: "Favorite Food: Sardines", image: "images/wrinkle-cat.jpg"}]

var createCatUl = function(){
  var catUl = document.createElement("ul");
  catUl.classList.add("cat");
  return catUl;
}

var createCatName = function(name){
  var catName = document.createElement("li");
  catName.innerText = name;
  return catName;
}

var createFavFood = function(favFood){
  var food = document.createElement("li");
  food.innerText = favFood;
  return food;
}

var appendElements = function(cats, catUl, catName, food, image){
  food.appendChild(image);
  catName.appendChild(food);
  catUl.appendChild(catName);
  cats.appendChild(catUl);
}

var createImage = function(sourceImg){
  var image = new Image();
  image.src = sourceImg;
  image.width = "500";
  return image;
}

var addCat = function(name, favFood, sourceImg){
  var catUl = createCatUl();
  var catName = createCatName(name);
  var favoriteFood = createFavFood(favFood);
  var image = createImage(sourceImg);
  var cats = document.getElementById("cats");
  appendElements(cats,catUl,catName, favoriteFood, image);
}

var app = function(){
for(cat of data){
  addCat(cat.name, cat.food, cat.image);
}
}
window.onload = app;

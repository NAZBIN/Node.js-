var book  = {
  "title": "javascript",
  "authors":["qiu","wen","bin"],
  edition:3,
  year:2011
};

var jsonTest = JSON.stringify(book,["title","edition"],4);
console.log(jsonTest);

function handleResponse(response){
  alert("you're at ip adress "+ response.ip + "..."+response.city+response.region_name);
}

var script = document.createElement("script");
script.src = "http://bonfires.cn/json/?callback=handleResponse";
document.body.insertBefore(script,document.body.firstChild);



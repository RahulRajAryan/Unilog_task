import './App.css';


function App() {
  let data = {
                "projetcName" : "Build-Car",
                "startDate" : "Thu Nov 05 2020 11:20:12 GMT+0530 (India Standard Time)",
                "endDate" : "Thu Nov 15 2020 11:20:12 GMT+0530 (India Standard Time)",
                "root" : {
                        "task1" : { "name" : "BuildFrame" , "prevTask" : "", "nextTask" : "task2" },
                        "task2" : { "name" : "BuildBody" , "prevTask" : "task1" , "nextTask" : "task4" },
                        "task3" : { "name" : "TestCar" , "prevTask" : "task4" , "nextTask" : ""},
                        "task4" : { "name" : "FitTyre" , "prevTask" : "task2" , "nextTask" : "task3" }
                }
  }

  function prev(tname) {
      for (let i in data.root){
          if (data["root"][i]["name"] === tname){
              if (data["root"][i]["prevTask"] !== ""){
                  let newcontent = data["root"][i]["prevTask"]
                  document.getElementById("content").innerHTML = data["root"][newcontent]["name"]
              }
          break
          }
      }
  }

  function next(tname) {
      for (let i in data.root){
          if (data["root"][i]["name"] === tname){
              if (data["root"][i]["nextTask"] !== ""){
                  let newcontent = data["root"][i]["nextTask"]
                  document.getElementById("content").innerHTML = data["root"][newcontent]["name"]
              }
          break
          }
      }
  }


  return (
    <div className="App">
            <div id="content">
              {
                  data.root.task1.name
              }
            </div>

            <div style={{display : "flex"}}>

              <button onClick={() => prev(document.getElementById("content").innerHTML)}> Prev </button>
              <button onClick={() => next(document.getElementById("content").innerHTML)}> Next </button>

            </div>
    </div>
  );
}

export default App;

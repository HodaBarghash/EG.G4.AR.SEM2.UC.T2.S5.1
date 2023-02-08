function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6mK83NonhQA":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbw1FHq4LGS3KedJtDoWYLvu3eK1P5oJfx-09FAeVM_DqIy8lZPXsWRLmB5XBVpANi0H-g/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}


#pragma strict

var MenuSkin : GUISkin;

//reverenties
var player : GameObject;
var mainCamera : GameObject;
var arms : GameObject;

//icons
var racket : Texture;
var ship : Texture;
var spareIcons : Texture;

//player prefabs
var racket : GameObject;
var ship : GameObject;
var spare : GameObject;

private var showGUI : boolean = false

private var invScript : Inventory:

function start()
{
	invScript = GetComponent(inventory);
}

function update()
{
	if(Input.GetKeyDown("c"))
	{
		showGUI = !showGUI;
	}
	if(showGUI == true)
	{
		Time.timeScale = 0;
		player.GetComponent(FPSInputController).enabled = false;
		player.GetComponent(MouseLook).enebled = false;
		mainCamera.GetComponent(MouseLook).enebled = false;
		arms.GetComponent(playerControl).enebled = false;
	}
	if(showGUI == false)
	{
		Time.timeScale = 1;
		player.GetComponent(FPSInputController).enabled = true;
		player.GetComponent(MouseLook).enebled = true;
		mainCamera.GetComponent(MouseLook).enebled = true;
		arms.GetComponent(playerControl).enebled = true;
	}
}
	function OnGUI()
	{
		if(showGUI == true)
		{
			GUI.skin = MenuSkin;
				GUI.beginGroup(new Rect(Screen.width / 2 - 150, Screen.height / 2 - 150, 300, 300));
					GUI.Box(rect(0, 0, 300, 300), "crafting system");
					
					if(GUI.Button(rect(10, 50, 50, 50), GUIContent (shipIcon, "build a ship")))
					{
						if(invScript.iron >= 3 && (invScript.wood >= 7)
						{
							Ship.SetActive(true);
							invScript.iron -= 3;
							invScript -= 7;
						}
					}
					
					if(GUI.Button(rect(10, 120, 50, 50), GUIContent (rocetIcon, "build a rocket")))
					{
						if(invScript.iron >= 7 && (invScript.wood >= 3)
						{
							rocket.SetActive(true);
							invScript.iron -= 7;
							invScript -= 3;
						}
					}
					
					if(GUI.Button(rect(10, 190, 50, 50), GUIContent (spareIcon, "build a spare")))
					{
						if(invScript.iron >= 7 && (invScript.wood >= 3)
						{
							spare.SetActive(true);
							invScript.iron -= 7;
							invScript -= 3;
						}
					}
					
					GUI.Label(rect(100, 250, 100, 40), GUI.tooltip);
					GUI.EndGroup();
		}
		
	}
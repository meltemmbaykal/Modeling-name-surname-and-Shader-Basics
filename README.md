# Modeling-name-surname-and-Shader-Basics
modeling the initials of the name,surname and shader basics


Task 1 – Modeling
You will model the geometry of the initial letters of your name and surname, centered at the origin. 

The rules for determining the initial letters and drawing them are as follows:
 • This is a WebGL assignment. DO NOT USE ANY NON-WEBGL SOLUTIONS FOR DRAWING TEXT inside canvas. You must also use pure WebGL. DO NOT USE libraries such as Three.js, OpenType.js, etc. which are used for font rendering. You will model the letters as they are 2D geometric objects, just as triangles or rectangles.
• Do not bother with Turkish characters (Draw C for Ç, U for Ü, etc.).
• The shapes of the letters do not have to be perfect, but they should highly resemble the corresponding letter.
• If your name and surname have the same initial letters, take the first letter of your name and the second letter of your surname.
• If you have multiple names, you can select either of them. But the selected letter should be different from the letter for the surname.
• The geometry of the letters must be in 2D, they should not consist of just lines. In other words, you will draw using triangles, not lines. 
• While calculating vertex coordinates, do not forget the WebGL clip coordinates.


Task 2 – Interaction

• Color: Pass the color obtained from sliders to the fragment shader to set the color of the first letter. The color of the second letter should be the opposite color of the first letter. You can calculate it as (1-r, 1-g, 1-b).
• Position: Perform 2D displacement according to X and Y slider values.
• Scale: Scale the size of the shapes according to the slider values. (Scaling should be local (about the center of the geometry). It should not change the position.)
• Note that we have not covered transformation matrices in class yet. You can perform changing the position and scale of the shape in vertex shader.

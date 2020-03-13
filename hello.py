
from gtts import gTTS 
  




def something():
	mytext = 'Welcome to geeksforgeeks!'
	  
	language = 'en'
	  

	myobj = gTTS(text=mytext, lang=language, slow=False) 

	myobj.save("mpfile/welcome.mp3") 


something()
print("Hello this is from python")
import sys
from gtts import gTTS 
 

def speech():
	 mytext = sys.argv[1]
  
	 language = 'en'
  

	 myobj = gTTS(text=mytext, lang=language, slow=False) 

	 myobj.save("python/mpfile/" + sys.argv[1] + ".mp3") 

	 
speech()
	 
print(sys.argv[1])

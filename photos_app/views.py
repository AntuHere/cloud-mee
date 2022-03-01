from pathlib import Path
from time import time
from django.shortcuts import render
from . models import Photo
import os
import time

def index(request):
        if request.method=='POST':
            try:
                new_photo=Photo(img=request.FILES['img'])
                new_photo.save()
                return render(request,'index.html',{ 'new_url':str(new_photo.img.url)})
            finally:
                # time.sleep(7)
                # a=f'{new_photo.img.url}'
                # fuck=a.replace('/media/img/','')
                # print(fuck)
                # BASE_DIR = Path(__file__).resolve().parent.parent
                # filename=f"{BASE_DIR}\media\img\{fuck}"
                # os.remove(filename)
                pass
        else:
            return render(request,'index.html')
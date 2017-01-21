tasklist /nh /fi "imagename eq python.exe" | find /i "python.exe" > nul || (start python -m http.server)
start chrome http://127.0.0.1:8000/src/index.html

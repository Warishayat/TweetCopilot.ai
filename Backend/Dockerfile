#base image
FROM python:3.9-slim

#copy all the file
COPY . /app/

#set the workdir
WORKDIR /app/

#install dependencies
RUN pip install --no-cache-dir -r requirements.txt

#port expose
EXPOSE 8000 

#run command
CMD ["uvicorn", "Backend.api:app", "--host", "0.0.0.0", "--port", "8000"]